// API video kiến thức: ít nhất 20 video mỗi môn theo lớp, tự đổi mới mỗi tuần (thứ Hai, giờ Việt Nam).
// Tìm trên YouTube theo chủ đề của lớp (xoay vòng chủ đề theo tuần), lọc video an toàn, lưu vào Vercel Blob dùng cả tuần.
const { put, get } = require("@vercel/blob");

const TOPICS = {
  math: {
    1: ["Các số từ 0 đến 10", "So sánh số: lớn hơn, bé hơn, bằng nhau", "Phép cộng trong phạm vi 10", "Phép trừ trong phạm vi 10", "Hình vuông, hình tròn, hình tam giác", "Các số đến 100", "Đo độ dài, xem đồng hồ, xem lịch"],
    2: ["Ôn tập các số đến 100", "Phép cộng có nhớ trong phạm vi 100", "Phép trừ có nhớ trong phạm vi 100", "Làm quen phép nhân, bảng nhân 2 và 5", "Phép chia, bảng chia 2 và 5", "Các số trong phạm vi 1000", "Ki-lô-gam, lít, mét, ki-lô-mét"],
    3: ["Bảng nhân, bảng chia 6, 7, 8, 9", "Nhân số có hai chữ số với số có một chữ số", "Chia có dư", "Các số đến 10 000 và 100 000", "Chu vi, diện tích hình chữ nhật, hình vuông", "Góc vuông, góc không vuông", "Tiền Việt Nam"],
    4: ["Số có nhiều chữ số, lớp triệu", "Phép nhân, phép chia với số có nhiều chữ số", "Biểu thức có chứa chữ", "Phân số và các phép tính với phân số", "Tìm số trung bình cộng", "Hai đường thẳng vuông góc, song song", "Hình bình hành, hình thoi"],
    5: ["Số thập phân", "Cộng, trừ, nhân, chia số thập phân", "Tỉ số phần trăm", "Diện tích hình tam giác, hình thang", "Chu vi, diện tích hình tròn", "Thể tích hình hộp chữ nhật, hình lập phương", "Toán chuyển động đều: vận tốc, quãng đường, thời gian"],
  },
  vietnamese: {
    1: ["Bảng chữ cái tiếng Việt", "Học âm và vần", "Đánh vần, ghép tiếng", "Tập viết chữ thường", "Dấu thanh: sắc, huyền, hỏi, ngã, nặng", "Tập đọc đoạn văn ngắn", "Chính tả nghe – viết"],
    2: ["Từ chỉ sự vật, hoạt động, đặc điểm", "Câu giới thiệu, câu nêu hoạt động", "Dấu chấm, dấu phẩy, dấu chấm hỏi", "Viết đoạn văn kể về người thân", "Viết đoạn văn tả đồ vật", "Tập đọc thơ lớp 2", "Viết chữ hoa"],
    3: ["Biện pháp so sánh", "Từ có nghĩa giống nhau, trái nghĩa", "Câu cảm, câu khiến", "Viết đoạn văn kể lại sự việc", "Viết thư cho người thân", "Biện pháp nhân hoá", "Đọc hiểu văn bản"],
    4: ["Danh từ, động từ, tính từ", "Chủ ngữ, vị ngữ, trạng ngữ", "Biện pháp nhân hoá", "Văn miêu tả con vật", "Văn miêu tả cây cối", "Viết đoạn văn nêu ý kiến", "Đọc hiểu truyện và thơ"],
    5: ["Từ đồng nghĩa, từ trái nghĩa", "Từ đa nghĩa", "Đại từ, kết từ", "Câu ghép và cách nối các vế câu", "Văn tả người", "Văn tả phong cảnh", "Viết bài văn kể chuyện sáng tạo"],
  },
  english: {
    1: ["Hello – Chào hỏi", "Colours – Màu sắc", "Numbers 1 to 10", "Animals – Con vật", "My family – Gia đình", "Toys – Đồ chơi", "Phonics: letters A to Z"],
    2: ["Alphabet song and phonics", "At home – Đồ vật trong nhà", "Food and drinks", "Clothes – Quần áo", "Weather – Thời tiết", "Numbers 11 to 20", "Body parts – Bộ phận cơ thể"],
    3: ["Unit: Hello / What's your name?", "My school things", "My friends and family", "Colours and break time activities", "My house and my bedroom", "Jobs – Nghề nghiệp", "Numbers and age: How old are you?"],
    4: ["My friends: Where are you from?", "Time and daily routines", "Days of the week, school subjects", "My birthday party", "Things we can do", "My hobbies", "Shopping: How much is it?"],
    5: ["All about me", "Our homes and addresses", "My foreign friends", "Our free-time activities", "My future job", "Past simple: What did you do?", "Holidays and travelling"],
  },
  life: {
    1: ["Tự chăm sóc bản thân: rửa tay, đánh răng", "Lời chào, lời cảm ơn, xin lỗi", "An toàn khi đi đường", "Gọn gàng: tự cất đồ dùng", "Không đi theo người lạ", "Nhận biết cảm xúc của mình"],
    2: ["Kỹ năng tự phục vụ: gấp quần áo, chuẩn bị cặp sách", "Phòng tránh đuối nước", "An toàn với điện, lửa, vật sắc nhọn", "Biết ơn thầy cô, ông bà, cha mẹ", "Kết bạn và chơi hoà đồng", "Thuộc số điện thoại, địa chỉ nhà"],
    3: ["Quản lý thời gian, lập thời gian biểu", "Giữ gìn vệ sinh trường lớp", "Phòng tránh xâm hại cơ thể", "Ứng xử khi bị bắt nạt", "Tiết kiệm tiền và tiết kiệm nước", "Gọi số khẩn cấp 113, 114, 115"],
    4: ["Kỹ năng làm việc nhóm", "Kỹ năng thuyết trình tự tin", "An toàn khi dùng Internet", "Kiểm soát cảm xúc, giải quyết mâu thuẫn", "Sơ cứu vết thương nhỏ", "Bảo vệ môi trường, phân loại rác"],
    5: ["Kỹ năng tự học hiệu quả", "Đặt mục tiêu và lập kế hoạch", "Thoát hiểm khi có cháy", "Tuổi dậy thì và chăm sóc cơ thể", "An toàn trên mạng xã hội", "Lòng biết ơn và giúp đỡ cộng đồng"],
  },
};

const LABEL = { math: "Toán", vietnamese: "Tiếng Việt", english: "Tiếng Anh", life: "Kỹ năng sống" };
const TRUSTED = /(VTV7|VTV|VioEdu|HOCMAI|Hocmai|VietJack|NXB Giáo dục|Giáo dục Việt Nam|Vuihoc|VUIHOC|Monkey|Kết nối tri thức|Global Success|Super Simple|British Council|Sesame|Pinkfong|Alokiddy|Edupia|ICAN|Cánh Diều|Chân trời sáng tạo)/i;
const UNSAFE = /(kinh dị|ma quỷ|đánh nhau|prank|18\+|giết|bạo lực|sexy|tán gái|free ?fire|minecraft|roblox|liên quân|pubg|tiktok|asmr|reaction|troll)/i;
const MIN_VIDEOS = 20, TARGET = 24;

function weekId(now = new Date()) {
  const d = new Date(now.getTime() + 7 * 3600e3); // giờ Việt Nam
  const day = (d.getUTCDay() + 6) % 7; // 0 = thứ Hai
  const mon = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - day));
  const th = new Date(mon); th.setUTCDate(mon.getUTCDate() + 3);
  const y = th.getUTCFullYear(), jan4 = new Date(Date.UTC(y, 0, 4));
  const w = 1 + Math.round(((th - jan4) / 864e5 - 3 + ((jan4.getUTCDay() + 6) % 7)) / 7);
  return { id: `${y}-w${String(w).padStart(2, "0")}`, week: w, n: y * 53 + w };
}

function query(sub, g, topic) {
  if (sub === "life") return `kỹ năng sống cho học sinh tiểu học ${topic}`;
  if (sub === "english") return `Tiếng Anh lớp ${g} ${topic}`;
  return `${LABEL[sub]} lớp ${g} ${topic} bài giảng`;
}

const toSec = (t) => (t || "").split(":").reduce((s, x) => s * 60 + Number(x), 0);

function collect(node, out) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) { node.forEach((x) => collect(x, out)); return; }
  if (node.videoRenderer) {
    const v = node.videoRenderer;
    const title = (v.title && v.title.runs && v.title.runs.map((r) => r.text).join("")) || "";
    const len = v.lengthText && v.lengthText.simpleText;
    const ch = v.ownerText && v.ownerText.runs && v.ownerText.runs[0] && v.ownerText.runs[0].text;
    if (v.videoId && title && len) out.push({ id: v.videoId, title, channel: ch || "", duration: len, sec: toSec(len) });
    return;
  }
  for (const k in node) collect(node[k], out);
}

async function search(q) {
  const url = "https://www.youtube.com/results?hl=vi&gl=VN&sp=EgIQAQ%253D%253D&search_query=" + encodeURIComponent(q);
  const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", "Accept-Language": "vi-VN,vi;q=0.9", Cookie: "CONSENT=YES+cb; SOCS=CAI" } });
  if (!r.ok) return [];
  const html = await r.text();
  const m = html.match(/var ytInitialData\s*=\s*(\{.+?\});\s*<\/script>/s) || html.match(/ytInitialData"\]\s*=\s*(\{.+?\});/s);
  if (!m) return [];
  const out = [];
  try { collect(JSON.parse(m[1]), out); } catch (e) {}
  return out.filter((v) => v.sec >= 60 && v.sec <= 1800 && !UNSAFE.test(v.title + " " + v.channel));
}

async function build(sub, g, wk) {
  const topics = TOPICS[sub][g];
  const start = wk.n % topics.length;
  const order = topics.map((_, i) => topics[(start + i) % topics.length]);
  const seen = new Set(), pool = [];
  const add = (list, topic) => list.forEach((v) => { if (!seen.has(v.id)) { seen.add(v.id); pool.push({ ...v, topic }); } });
  // Tuần này: 5 chủ đề đầu theo vòng xoay, mỗi chủ đề lấy tối đa 6 video
  const first = await Promise.all(order.slice(0, 5).map((t) => search(query(sub, g, t)).then((l) => [t, l])));
  first.forEach(([t, l]) => add(l.slice(0, 6), t));
  for (const t of order.slice(5)) { if (pool.length >= TARGET) break; add((await search(query(sub, g, t))).slice(0, 6), t); }
  if (pool.length < MIN_VIDEOS) first.forEach(([t, l]) => add(l.slice(6, 12), t));
  // Ưu tiên kênh uy tín, giữ đa dạng chủ đề
  pool.sort((a, b) => (TRUSTED.test(b.channel) ? 1 : 0) - (TRUSTED.test(a.channel) ? 1 : 0));
  return pool.slice(0, Math.max(TARGET, MIN_VIDEOS)).map(({ sec, ...v }) => v);
}

async function readCache(p) {
  try { const r = await get(p, { access: "private" }); if (!r || r.statusCode !== 200) return null; return JSON.parse(await new Response(r.stream).text()); } catch (e) { return null; }
}

module.exports = async (req, res) => {
  const send = (code, body) => { res.statusCode = code; res.setHeader("Content-Type", "application/json; charset=utf-8"); res.setHeader("Cache-Control", code === 200 ? "public, s-maxage=3600, stale-while-revalidate=86400" : "no-store"); res.end(JSON.stringify(body)); };
  try {
    const u = new URL(req.url, "http://x");
    const g = Math.min(5, Math.max(1, Number(u.searchParams.get("grade")) || 1));
    const sub = u.searchParams.get("subject");
    if (!TOPICS[sub]) return send(400, { error: "Môn không hợp lệ." });
    const wk = weekId();
    const path = `videos/${wk.id}/g${g}-${sub}.json`;
    let data = await readCache(path);
    if (!data) {
      const videos = await build(sub, g, wk);
      if (videos.length >= 8) {
        data = { week: wk.week, weekId: wk.id, grade: g, subject: sub, updatedAt: Date.now(), videos };
        await put(path, JSON.stringify(data), { access: "private", allowOverwrite: true, addRandomSuffix: false, contentType: "application/json" });
      } else {
        // Không tìm được: dùng lại danh sách tuần trước nếu có
        const prev = weekId(new Date(Date.now() - 7 * 864e5));
        data = await readCache(`videos/${prev.id}/g${g}-${sub}.json`);
        if (!data) return send(502, { error: "Chưa tìm được video, thử lại sau." });
        data = { ...data, week: wk.week, stale: true };
      }
    }
    return send(200, data);
  } catch (e) {
    console.error(e);
    return send(500, { error: "Máy chủ đang bận." });
  }
};

module.exports._test = { weekId, collect, build, search };
