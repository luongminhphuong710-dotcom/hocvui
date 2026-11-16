// Tài khoản của bé: giữ phiên đăng nhập, tải dữ liệu từ máy chủ, tự lưu lên máy chủ.
const HVAuth = (() => {
  const SESSION = "hv-session";
  const SYNC_AT = "hv-sync-at";
  const SKIP = /^hv-(session|sync-at|parent-ok)$/;
  const isDataKey = (k) => /^(hv-|vh-)/.test(k) && !SKIP.test(k);
  const ls = (() => { try { return window.localStorage; } catch (e) { return null; } })();

  const session = () => { try { return JSON.parse(ls.getItem(SESSION) || "null"); } catch (e) { return null; } };
  const snapshot = () => {
    const out = {};
    if (!ls) return out;
    for (let i = 0; i < ls.length; i++) { const k = ls.key(i); if (isDataKey(k)) out[k] = ls.getItem(k); }
    return out;
  };
  const clearData = () => { if (!ls) return; Object.keys(snapshot()).forEach((k) => ls.removeItem(k)); };
  const applyData = (data) => { clearData(); Object.entries(data || {}).forEach(([k, v]) => isDataKey(k) && ls.setItem(k, v)); };

  async function call(body, method = "POST", token) {
    const opt = { method, headers: { "Content-Type": "application/json" } };
    if (token) opt.headers.Authorization = "Bearer " + token;
    if (method === "POST") opt.body = JSON.stringify(body);
    const r = await fetch("/api/account", opt);
    const j = await r.json().catch(() => ({ error: "Không kết nối được máy chủ." }));
    if (!r.ok) { const e = new Error(j.error || "Lỗi"); e.status = r.status; throw e; }
    return j;
  }

  function begin(res) {
    ls.setItem(SESSION, JSON.stringify({ username: res.profile.username, token: res.token, name: res.profile.name }));
    const data = { ...res.data };
    // Lần đầu: tạo hồ sơ theo thông tin đăng ký (lớp, tên, ảnh) để vào thẳng chương trình đúng lớp.
    let prof = {};
    try { prof = JSON.parse(data["hv-profile"] || "{}"); } catch (e) {}
    prof = { ...prof, name: prof.name || res.profile.name, grade: prof.grade || res.profile.grade, avatar: prof.avatar || res.profile.avatar };
    data["hv-profile"] = JSON.stringify(prof);
    applyData(data);
    ls.setItem(SYNC_AT, String(res.updatedAt || Date.now()));
    lastPushed = JSON.stringify(snapshot());
  }

  const register = async (f) => { const r = await call({ action: "register", ...f }); begin(r); push(true); return r; };
  const login = async (username, password) => { const r = await call({ action: "login", username, password }); begin(r); return r; };

  let lastPushed = null;
  async function push(force) {
    const s = session(); if (!s) return;
    const snap = snapshot(); const str = JSON.stringify(snap);
    if (!force && str === lastPushed) return;
    try {
      const r = await call({ action: "sync", token: s.token, data: snap });
      lastPushed = str; ls.setItem(SYNC_AT, String(r.updatedAt));
    } catch (e) { if (e.status === 401) logout(true); }
  }
  function pushBeacon() {
    const s = session(); if (!s) return;
    const str = JSON.stringify(snapshot()); if (str === lastPushed) return;
    try {
      fetch("/api/account", { method: "POST", keepalive: true, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "sync", token: s.token, data: JSON.parse(str) }) });
      lastPushed = str;
    } catch (e) {}
  }

  async function logout(expired) {
    if (!expired) await push(true);
    clearData(); ls.removeItem(SESSION); ls.removeItem(SYNC_AT);
    try { sessionStorage.removeItem("hv-parent-ok"); } catch (e) {}
    location.href = "dang-nhap.html" + (expired ? "#het-han" : "");
  }

  // Khởi động trên mọi trang (trừ trang đăng nhập)
  const onLoginPage = /dang-nhap\.html$/.test(location.pathname);
  if (!onLoginPage && ls) {
    const s = session();
    if (!s) { location.replace("dang-nhap.html"); }
    else {
      lastPushed = JSON.stringify(snapshot());
      // Nếu máy chủ có dữ liệu mới hơn (bé học trên thiết bị khác) thì tải về.
      call(null, "GET", s.token).then((r) => {
        const local = Number(ls.getItem(SYNC_AT) || 0);
        if (r.updatedAt > local) {
          begin({ ...r, token: s.token });
          if (!sessionStorage.getItem("hv-pulled")) { sessionStorage.setItem("hv-pulled", "1"); location.reload(); }
        } else push();
      }).catch((e) => { if (e.status === 401 || e.status === 404) logout(true); });
      setInterval(push, 15000);
      addEventListener("pagehide", pushBeacon);
      document.addEventListener("visibilitychange", () => document.hidden && pushBeacon());
    }
  }

  return { session, register, login, logout, push };
})();
