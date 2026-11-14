// Dữ liệu dùng chung: hồ sơ bé, sao, nhật ký học, phần thưởng, khoá bố mẹ.
const HV = (() => {
  const get = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } };
  const set = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };

  const defaults = {
    name: "Bé yêu",
    avatar: "👧",
    grade: 2,
    playLimit: 30,
    requireMissions: true,
    rewards: [
      { name: "Thêm 15 phút chơi game", cost: 20 },
      { name: "Một cuốn truyện mới", cost: 60 },
      { name: "Đi công viên cuối tuần", cost: 100 },
    ],
  };

  const profile = () => ({ ...defaults, ...get("hv-profile", {}) });
  const saveProfile = (p) => set("hv-profile", p);

  const stars = () => Number(get("vh-stars", 0)) || 0;
  const addStars = (n) => { const s = Math.max(0, stars() + n); set("vh-stars", s); return s; };

  const log = () => get("hv-log", {});
  const day = (d = today()) => {
    const l = log();
    return l[d] || { math: { done: 0, correct: 0 }, vietnamese: { done: 0, correct: 0 }, english: { done: 0, correct: 0 }, life: false, complete: false, minutes: 0 };
  };
  const saveDay = (rec, d = today()) => { const l = log(); l[d] = rec; set("hv-log", l); };

  const streak = () => {
    const l = log(); let n = 0; const d = new Date();
    if (!(l[today()] && l[today()].complete)) d.setDate(d.getDate() - 1);
    for (;;) {
      const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      if (l[k] && l[k].complete) { n++; d.setDate(d.getDate() - 1); } else break;
    }
    return n;
  };

  const gameUnlocked = () => !profile().requireMissions || day().complete || get("hv-unlock-" + today(), false);

  // Cổng bố mẹ: một phép nhân 2 chữ số × 1 chữ số, bé lớp 1-2 khó tự giải.
  function parentGate(onPass, reason = "Phần này dành cho bố mẹ") {
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
    box.querySelector(".ghost").onclick = () => box.remove();
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

  // Thanh sao trên header
  function headerStars() {
    const bar = document.querySelector(".topbar");
    if (!bar || bar.querySelector(".hv-head")) return;
    const p = profile();
    const el = document.createElement("div"); el.className = "hv-head";
    el.innerHTML = `<span class="hv-pill" title="Sao của bé">⭐ <b id="hvStars">${stars()}</b></span>
      <a class="hv-lock" href="bo-me.html" title="Góc bố mẹ" aria-label="Góc bố mẹ">🔒</a>`;
    bar.append(el);
    addEventListener("storage", () => { const s = document.querySelector("#hvStars"); if (s) s.textContent = stars(); });
  }
  document.addEventListener("DOMContentLoaded", headerStars);

  return { get, set, today, profile, saveProfile, stars, addStars, log, day, saveDay, streak, gameUnlocked, parentGate, toast, confetti };
})();
