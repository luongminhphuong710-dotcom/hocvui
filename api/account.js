// API tài khoản Học vui: đăng ký, đăng nhập, lưu/tải dữ liệu học của từng bé.
// Dữ liệu lưu trong Vercel Blob (kho riêng tư) tại users/<tên-đăng-nhập>.json
const crypto = require("crypto");
const { put, get } = require("@vercel/blob");

const SECRET = crypto.createHash("sha256").update("hocvui:" + (process.env.BLOB_READ_WRITE_TOKEN || "dev")).digest();
const TOKEN_DAYS = 180;
const MAX_DATA = 400 * 1024;

const json = (res, code, body) => { res.statusCode = code; res.setHeader("Content-Type", "application/json; charset=utf-8"); res.setHeader("Cache-Control", "no-store"); res.end(JSON.stringify(body)); };
const cleanUser = (u) => String(u || "").trim().toLowerCase();
const validUser = (u) => /^[a-z0-9_.]{3,20}$/.test(u);
const path = (u) => `users/${u}.json`;

function hashPass(password, salt) {
  return crypto.scryptSync(String(password), salt, 32).toString("hex");
}
function sign(u) {
  const exp = Date.now() + TOKEN_DAYS * 864e5;
  const payload = `${u}.${exp}`;
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("base64url");
  return `${Buffer.from(payload).toString("base64url")}.${sig}`;
}
function verify(token) {
  const [p, sig] = String(token || "").split(".");
  if (!p || !sig) return null;
  const payload = Buffer.from(p, "base64url").toString();
  const good = crypto.createHmac("sha256", SECRET).update(payload).digest("base64url");
  if (sig.length !== good.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(good))) return null;
  const i = payload.lastIndexOf(".");
  const u = payload.slice(0, i), exp = Number(payload.slice(i + 1));
  return exp > Date.now() ? u : null;
}

async function load(u) {
  try {
    const r = await get(path(u), { access: "private", useCache: false });
    if (!r || r.statusCode !== 200) return null;
    return JSON.parse(await new Response(r.stream).text());
  } catch (e) {
    if (e && /not.?found/i.test(e.name + e.message)) return null;
    throw e;
  }
}
const save = (u, rec) => put(path(u), JSON.stringify(rec), { access: "private", allowOverwrite: true, addRandomSuffix: false, contentType: "application/json" });

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  const chunks = []; let size = 0;
  for await (const c of req) { size += c.length; if (size > MAX_DATA + 4096) throw new Error("too_big"); chunks.push(c); }
  try { return JSON.parse(Buffer.concat(chunks).toString() || "{}"); } catch (e) { return {}; }
}

const publicProfile = (rec) => ({ username: rec.username, name: rec.name, grade: rec.grade, avatar: rec.avatar });

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      const u = verify((req.headers.authorization || "").replace(/^Bearer\s+/i, ""));
      if (!u) return json(res, 401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
      const rec = await load(u);
      if (!rec) return json(res, 404, { error: "Không tìm thấy tài khoản." });
      return json(res, 200, { profile: publicProfile(rec), data: rec.data || {}, updatedAt: rec.updatedAt || 0 });
    }
    if (req.method !== "POST") return json(res, 405, { error: "Method not allowed" });

    const body = await readBody(req);
    const action = body.action;

    if (action === "register") {
      const u = cleanUser(body.username);
      const name = String(body.name || "").trim().slice(0, 24);
      const grade = Math.min(5, Math.max(1, Number(body.grade) || 1));
      const avatar = String(body.avatar || "👧").slice(0, 8);
      if (!validUser(u)) return json(res, 400, { error: "Tên đăng nhập 3–20 ký tự, chỉ gồm chữ thường không dấu, số, dấu chấm hoặc gạch dưới." });
      if (String(body.password || "").length < 4) return json(res, 400, { error: "Mật khẩu cần ít nhất 4 ký tự." });
      if (!name) return json(res, 400, { error: "Hãy nhập tên của bé." });
      if (await load(u)) return json(res, 409, { error: "Tên đăng nhập này đã có người dùng, hãy chọn tên khác." });
      const salt = crypto.randomBytes(16).toString("hex");
      const now = Date.now();
      const rec = { username: u, name, grade, avatar, salt, hash: hashPass(body.password, salt), createdAt: now, updatedAt: now, data: {} };
      await save(u, rec);
      return json(res, 200, { token: sign(u), profile: publicProfile(rec), data: {}, updatedAt: now });
    }

    if (action === "login") {
      const u = cleanUser(body.username);
      const rec = validUser(u) ? await load(u) : null;
      if (!rec || hashPass(body.password || "", rec.salt) !== rec.hash) return json(res, 401, { error: "Sai tên đăng nhập hoặc mật khẩu." });
      return json(res, 200, { token: sign(u), profile: publicProfile(rec), data: rec.data || {}, updatedAt: rec.updatedAt || 0 });
    }

    if (action === "sync") {
      const u = verify(body.token || (req.headers.authorization || "").replace(/^Bearer\s+/i, ""));
      if (!u) return json(res, 401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
      const data = body.data && typeof body.data === "object" ? body.data : {};
      if (JSON.stringify(data).length > MAX_DATA) return json(res, 413, { error: "Dữ liệu quá lớn." });
      const rec = await load(u);
      if (!rec) return json(res, 404, { error: "Không tìm thấy tài khoản." });
      rec.data = data;
      rec.updatedAt = Date.now();
      try { const p = JSON.parse(data["hv-profile"] || "null"); if (p) { rec.name = String(p.name || rec.name).slice(0, 24); rec.grade = Number(p.grade) || rec.grade; rec.avatar = p.avatar || rec.avatar; } } catch (e) {}
      await save(u, rec);
      return json(res, 200, { ok: true, updatedAt: rec.updatedAt });
    }

    return json(res, 400, { error: "Yêu cầu không hợp lệ." });
  } catch (e) {
    console.error(e);
    return json(res, 500, { error: "Máy chủ đang bận, thử lại sau nhé." });
  }
};
