// Dữ liệu dùng chung: hồ sơ bé, sao, nhật ký từng ngày, lịch sử học, mục tiêu, phần quà, cổng bố mẹ.
const HV = (() => {
  const get = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } };
  const set = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const key = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const today = () => key(new Date());
  const daysAgo = (n) => { const d = new Date(); d.setDate(d.getDate() - n); return d; };
  const weekStart = () => { const d = new Date(); const w = (d.getDay() + 6) % 7; d.setDate(d.getDate() - w); d.setHours(0, 0, 0, 0); return d; };
  const weekDays = () => { const s = weekStart(); return [...Array(7)].map((_, i) => { const d = new Date(s); d.setDate(s.getDate() + i); return key(d); }); };

  const defaults = {
    name: "Bé yêu",
    avatar: "👧",
    grade: 2,
    playLimit: 30,
    requireMissions: true,
    goals: { minutes: 20, questions: 15, accuracy: 80, lessonsWeek: 5, daysWeek: 5 },
    rewards: [
      { name: "Thêm 15 phút chơi game", type: "stars", need: 20 },
      { name: "Một cuốn truyện mới", type: "stars", need: 60 },
      { name: "Đi công viên cuối tuần", type: "goalDays", need: 5 },
    ],
  };
  const normReward = (r) => (r.type ? r : { name: r.name, type: "stars", need: r.cost || r.need || 10 });
  const profile = () => {
    const p = { ...defaults, ...get("hv-profile", {}) };
    p.goals = { ...defaults.goals, ...(p.goals || {}) };
    p.rewards = (p.rewards || []).map(normReward);
    return p;
  };
  const saveProfile = (p) => set("hv-profile", p);

  const stars = () => Number(get("vh-stars", 0)) || 0;
  const addStars = (n) => { const s = Math.max(0, stars() + n); set("vh-stars", s); return s; };

  const log = () => get("hv-log", {});
  const emptyDay = () => ({ math: { done: 0, correct: 0 }, vietnamese: { done: 0, correct: 0 }, english: { done: 0, correct: 0 }, life: false, complete: false, learnSec: 0, videoSec: 0, ans: {}, lessons: 0 });
  const day = (d = today()) => ({ ...emptyDay(), ...(log()[d] || {}) });
  const saveDay = (rec, d = today()) => { const l = log(); l[d] = rec; set("hv-log", l); };
  const updateDay = (fn) => { const r = day(); fn(r); saveDay(r); return r; };

  const answer = (sub, firstTry) => updateDay((r) => { const a = r.ans[sub] || [0, 0]; a[1]++; if (firstTry) a[0]++; r.ans[sub] = a; });
  const dayStats = (r) => {
    r = { ...emptyDay(), ...(r || {}) };
    const t = Object.values(r.ans || {}).reduce((s, a) => [s[0] + a[0], s[1] + a[1]], [0, 0]);
    return { correct: t[0], total: t[1], acc: t[1] ? Math.round((t[0] / t[1]) * 100) : 0, learnMin: Math.round((r.learnSec || 0) / 60), videoMin: Math.round((r.videoSec || 0) / 60), minutes: Math.round(((r.learnSec || 0) + (r.videoSec || 0)) / 60), lessons: r.lessons || 0 };
  };
  const goalMet = (r, p = profile()) => { const s = dayStats(r); return s.minutes >= p.goals.minutes && s.total >= p.goals.questions && (!s.total || s.acc >= p.goals.accuracy); };

  const history = () => get("hv-history", []);
  const addHistory = (e) => { const h = history(); h.unshift({ at: Date.now(), ...e }); set("hv-history", h.slice(0, 400)); };
  const videos = () => get("hv-videos", []);
  const addVideo = (v) => { const h = videos(); h.unshift({ at: Date.now(), sec: 0, ...v }); set("hv-videos", h.slice(0, 300)); };
  const updateVideoSec = (at, sec) => { const h = videos(); const v = h.find((x) => x.at === at); if (v) { v.sec = sec; set("hv-videos", h); } };
  const blocked = () => get("hv-video-block", []);

  const lessons = () => get("hv-lessons", {});
  const saveLesson = (id, r) => { const l = lessons(); const old = l[id] || {}; l[id] = { ...old, ...r, stars: Math.max(old.stars || 0, r.stars || 0), best: Math.max(old.best || 0, r.best || 0), tries: (old.tries || 0) + 1, at: Date.now() }; set("hv-lessons", l); };

  const streak = () => {
    const l = log(); let n = 0; const d = new Date();
    if (!(l[today()] && l[today()].complete)) d.setDate(d.getDate() - 1);
    while (l[key(d)] && l[key(d)].complete) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };
  const gameUnlocked = () => !profile().requireMissions || day().complete || get("hv-unlock-" + today(), false);

  const REWARD_TYPES = { stars: "Đổi bằng sao", goalDays: "Số ngày đạt mục tiêu trong tuần", lessons: "Số bài học hoàn thành trong tuần", streak: "Số ngày học liên tục" };
  function rewardProgress(r, p = profile()) {
    if (r.type === "stars") return { have: stars(), need: r.need, unit: "sao" };
    const wk = weekDays(); const l = log();
    if (r.type === "goalDays") return { have: wk.filter((k) => l[k] && goalMet(l[k], p)).length, need: r.need, unit: "ngày đạt mục tiêu (tuần này)" };
    if (r.type === "lessons") return { have: wk.reduce((s, k) => s + ((l[k] && l[k].lessons) || 0), 0), need: r.need, unit: "bài học (tuần này)" };
    if (r.type === "streak") return { have: streak(), need: r.need, unit: "ngày liên tục" };
    return { have: 0, need: r.need, unit: "" };
  }

  // Đếm thời gian học: trang đang mở và bé có thao tác trong 2 phút gần nhất; video đang mở thì tính thời gian xem.
  let lastInput = Date.now();
  ["pointerdown", "keydown", "scroll", "touchstart"].forEach((e) => addEventListener(e, () => (lastInput = Date.now()), { passive: true }));
  const tracker = { kind: null, video: false };
  setInterval(() => {
    if (document.hidden) return;
    if (tracker.video) return updateDay((r) => (r.videoSec = (r.videoSec || 0) + 10));
    if (tracker.kind === "learn" && Date.now() - lastInput < 120000) updateDay((r) => (r.learnSec = (r.learnSec || 0) + 10));
  }, 10000);
  const track = (kind) => (tracker.kind = kind);
  const setVideoPlaying = (on) => (tracker.video = on);

  function parentGate(onPass, reason = "Phần này dành cho bố mẹ", onCancel) {
    const a = 12 + Math.floor(Math.random() * 30), b = 3 + Math.floor(Math.random() * 6);
    const box = document.createElement("div");
    box.className = "gate";
    box.innerHTML = `<form class="gate-card"><p class="gate-lock">🔒</p><h3>${reason}</h3>
      <p>Bố mẹ trả lời: <strong>${a} × ${b} = ?</strong></p>
      <input type="number" inputmode="numeric" required aria-label="Đáp án" />
      <p class="gate-msg" aria-live="polite"></p>
      <div class="gate-actions"><button type="button" class="btn ghost">Huỷ</button><button class="btn">Xác nhận</button></div></form>`;
    document.body.append(box);
    const input = box.querySelector("input"); input.focus();
    box.querySelector(".ghost").onclick = () => { box.remove(); onCancel && onCancel(); };
    box.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      if (Number(input.value) === a * b) { box.remove(); onPass(); }
      else { box.querySelector(".gate-msg").textContent = "Chưa đúng, thử lại nhé."; input.select(); }
    };
  }

  function toast(msg) {
    let t = document.querySelector(".hv-toast");
    if (!t) { t = document.createElement("div"); t.className = "hv-toast"; t.setAttribute("role", "status"); document.body.append(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2600);
  }

  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layer = document.createElement("div"); layer.className = "hv-confetti";
    const colors = ["#ffd166", "#ff7a7a", "#78d6b6", "#6bb8ff", "#9a7bd8"];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "%"; p.style.background = colors[i % 5];
      p.style.animationDelay = Math.random() * 0.6 + "s"; p.style.transform = `rotate(${Math.random() * 360}deg)`;
      layer.append(p);
    }
    document.body.append(layer); setTimeout(() => layer.remove(), 3200);
  }

  const refreshStars = () => { const s = document.querySelector("#hvStars"); if (s) s.textContent = stars(); };

  function headerStars() {
    const bar = document.querySelector(".topbar");
    if (!bar || bar.querySelector(".hv-head")) return;
    const p = profile();
    const el = document.createElement("div"); el.className = "hv-head";
    const acc = typeof HVAuth !== "undefined" ? HVAuth.session() : null;
    el.innerHTML = `<span class="hv-pill" title="Sao của bé">⭐ <b id="hvStars">${stars()}</b></span>
      ${acc ? `<details class="hv-acc"><summary title="Tài khoản">${p.avatar} <span>${p.name}</span></summary>
        <div class="hv-acc-menu"><p>Đăng nhập: <b>${acc.username}</b><br />Lớp ${p.grade}</p>
        <button type="button" class="btn ghost" id="hvLogout">Đăng xuất / Đổi bé</button></div></details>` : ""}
      <a class="hv-lock" href="bo-me.html" title="Góc bố mẹ" aria-label="Góc bố mẹ">🔒</a>`;
    bar.append(el);
    const lo = el.querySelector("#hvLogout"); if (lo) lo.onclick = () => HVAuth.logout();
    addEventListener("storage", refreshStars);
  }
  document.addEventListener("DOMContentLoaded", headerStars);

  return {
    get, set, key, today, daysAgo, weekDays, profile, saveProfile, stars, addStars, refreshStars,
    log, day, saveDay, updateDay, answer, dayStats, goalMet, history, addHistory, videos, addVideo, updateVideoSec, blocked,
    lessons, saveLesson, streak, gameUnlocked, REWARD_TYPES, rewardProgress, track, setVideoPlaying, parentGate, toast, confetti,
  };
})();
