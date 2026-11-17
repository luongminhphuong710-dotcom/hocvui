// Trang Học bài: lộ trình bài học tương tác theo lớp của tài khoản + thư viện video tách riêng.
{
  const $ = (s) => document.querySelector(s);
  const P = HV.profile();
  const G = Math.min(5, Math.max(1, Number(P.grade) || 1));
  const SUBS = Object.keys(CUR.SUBJECTS);
  const QUESTIONS = 8;
  const state = { mode: "path", sub: HV.get("hv-last-sub", "math"), vsub: "math" };
  if (!SUBS.includes(state.sub)) state.sub = "math";
  HV.track("learn");
  $("#gradeLabel").textContent = `${P.avatar} ${P.name} · Chương trình lớp ${G}`;

  // ---------- Chuyển phần ----------
  document.querySelectorAll("[data-mode]").forEach((b) => (b.onclick = () => setMode(b.dataset.mode)));
  function setMode(m) {
    state.mode = m;
    document.querySelectorAll("[data-mode]").forEach((b) => { b.classList.toggle("is-on", b.dataset.mode === m); b.setAttribute("aria-selected", b.dataset.mode === m); });
    $("#pathView").hidden = m !== "path";
    $("#videoView").hidden = m !== "video";
    $("#lessonView").hidden = true;
    if (m === "path") renderPath(); else renderVideos();
    history.replaceState(null, "", m === "video" ? "#video" : "#lo-trinh");
  }

  // ---------- Lộ trình ----------
  const unlocked = (sub, i, prog) => i === 0 || (prog[CUR.units(sub, G)[i - 1].id] || {}).done;
  function subTabs(el, active, onPick, withProgress) {
    const prog = HV.lessons();
    el.innerHTML = SUBS.map((k) => {
      const s = CUR.SUBJECTS[k];
      const us = CUR.units(k, G);
      const done = us.filter((u) => (prog[u.id] || {}).done).length;
      return `<button type="button" role="tab" class="subj${k === active ? " is-on" : ""}" style="--c:${s.color}" data-s="${k}">
        <span class="subj-ico">${s.icon}</span><span><b>${s.label}</b>${withProgress ? `<small>${done}/${us.length} bài</small>` : ""}</span></button>`;
    }).join("");
    el.querySelectorAll("[data-s]").forEach((b) => (b.onclick = () => onPick(b.dataset.s)));
  }

  function renderPath() {
    subTabs($("#subjTabs"), state.sub, (k) => { state.sub = k; HV.set("hv-last-sub", k); renderPath(); }, true);
    const sub = state.sub, s = CUR.SUBJECTS[sub];
    const us = CUR.units(sub, G);
    const prog = HV.lessons();
    const done = us.filter((u) => (prog[u.id] || {}).done).length;
    const route = sub !== "life" && LESSON_DATA.route[sub] ? LESSON_DATA.route[sub][G] : null;
    $("#goalCard").innerHTML = `<p class="m-step">${s.icon} ${s.label} · Lớp ${G}</p>
      <h2>Con cần nắm được</h2>
      ${route ? `<p><b>Trọng tâm:</b> ${route.focus}</p><p><b>Sau lộ trình:</b> ${route.outcome}</p>` : `<p>Biết tự chăm sóc bản thân, ứng xử lễ phép và giữ an toàn trong cuộc sống hằng ngày.</p>`}
      <div class="bar big"><i style="width:${(done / us.length) * 100}%"></i></div>
      <p class="muted">Đã xong ${done}/${us.length} bài</p>`;
    $("#path").innerHTML = us.map((u, i) => {
      const p = prog[u.id] || {};
      const open = unlocked(sub, i, prog);
      const cur = open && !p.done;
      const st = p.done ? "★".repeat(p.stars || 1) + "☆".repeat(3 - (p.stars || 1)) : "";
      return `<li class="node${p.done ? " is-done" : ""}${cur ? " is-cur" : ""}${open ? "" : " is-locked"}" style="--c:${s.color}">
        <button type="button" data-i="${i}" ${open ? "" : "disabled"} aria-label="Bài ${i + 1}: ${u.title}${open ? "" : " (chưa mở)"}">
          <span class="dot">${p.done ? "✓" : open ? i + 1 : "🔒"}</span>
          <span class="n-body"><small>Bài ${i + 1}</small><b>${u.title}</b>${p.done ? `<span class="stars">${st}</span><small>Điểm cao nhất ${p.best}%</small>` : cur ? `<span class="go">Học ngay ▶</span>` : ""}</span>
        </button></li>`;
    }).join("");
    $("#path").querySelectorAll("[data-i]").forEach((b) => (b.onclick = () => startLesson(sub, Number(b.dataset.i))));
  }

  // ---------- Bài học ----------
  function startLesson(sub, i) {
    const L = CUR.lesson(sub, G, i, QUESTIONS);
    const s = CUR.SUBJECTS[sub];
    const view = $("#lessonView");
    $("#pathView").hidden = true; view.hidden = false;
    scrollTo({ top: 0, behavior: "smooth" });
    const t0 = Date.now();

    const visuals = L.visuals ? `<div class="chips-row">${L.visuals.map((v) => `<span class="vchip">${v}</span>`).join("")}</div>` : "";
    const example = L.example ? `<div class="example"><p class="m-step">Ví dụ</p><p class="ex-q">${L.example.q}</p><p class="ex-a">Đáp án: <b>${L.example.a}</b></p>${L.example.hint ? `<p class="muted">Cách làm: ${L.example.hint}</p>` : ""}</div>` : "";
    view.innerHTML = `<div class="p-head" style="--c:${s.color}"><span>${s.icon} ${s.label} · Bài ${i + 1}</span><button class="p-x" id="lsClose" aria-label="Đóng">✕</button></div>
      <div class="learn-card"><p class="m-step">Ghi nhớ</p><h2>${L.title}</h2><p class="tip">${L.tip}</p>${visuals}${example}
      <button class="btn wide" id="lsStart">Bắt đầu luyện tập (${L.questions.length} câu)</button></div>`;
    $("#lsClose").onclick = back;
    $("#lsStart").onclick = () => run(0);

    let correct = 0;
    function run(k) {
      if (k >= L.questions.length) return finish();
      const q = L.questions[k];
      let tries = 0;
      view.innerHTML = `<div class="p-head" style="--c:${s.color}"><span>${s.icon} ${L.title}</span><span>Câu ${k + 1}/${L.questions.length}</span><button class="p-x" id="lsClose" aria-label="Thoát">✕</button></div>
        <div class="dots">${L.questions.map((_, j) => `<i class="${j < k ? "d-done" : j === k ? "d-cur" : ""}"></i>`).join("")}</div>
        <h3 class="p-q">${q.q}</h3>
        <div class="p-opts">${q.opts.map((o) => `<button class="opt" data-v="${String(o).replace(/"/g, "&quot;")}">${o}</button>`).join("")}</div>
        <p class="p-fb" aria-live="polite"></p>`;
      $("#lsClose").onclick = () => { if (confirm("Thoát bài học? Kết quả bài này chưa được lưu.")) back(); };
      view.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
        const fb = view.querySelector(".p-fb");
        if (b.dataset.v === String(q.a)) {
          b.classList.add("ok"); view.querySelectorAll(".opt").forEach((x) => (x.disabled = true));
          if (tries === 0) correct++;
          HV.answer(sub, tries === 0);
          fb.className = "p-fb good"; fb.textContent = tries === 0 ? ["Chính xác!", "Giỏi quá!", "Đúng rồi!"][k % 3] : "Đúng rồi! Con đã sửa được lỗi sai.";
          setTimeout(() => run(k + 1), 850);
        } else {
          tries++; b.classList.add("no"); b.disabled = true;
          fb.className = "p-fb bad"; fb.innerHTML = `Chưa đúng.${q.hint ? ` <span class="hint-line">💡 ${q.hint}</span>` : " Con thử lại nhé!"}`;
        }
      }));
    }

    function finish() {
      const n = L.questions.length, acc = Math.round((correct / n) * 100);
      const PASS = 50;
      const passed = acc >= PASS;
      const stars = acc >= 90 ? 3 : acc >= 70 ? 2 : passed ? 1 : 0;
      const sec = Math.round((Date.now() - t0) / 1000);
      const first = !(HV.lessons()[L.id] || {}).done;
      const wasDone = !!(HV.lessons()[L.id] || {}).done;
      HV.saveLesson(L.id, { done: passed || wasDone, stars, best: acc, sub, grade: G, title: L.title });
      if (passed) HV.updateDay((r) => (r.lessons = (r.lessons || 0) + 1));
      HV.addHistory({ kind: "lesson", subject: sub, title: `Bài ${i + 1}: ${L.title}`, score: correct, total: n, sec, stars });
      const bonus = stars + (first && passed ? 2 : 0);
      HV.addStars(bonus); HV.refreshStars();
      if (stars === 3) HV.confetti();
      const next = CUR.units(sub, G)[i + 1];
      view.innerHTML = `<div class="p-done"><span>${stars === 3 ? "🏆" : stars === 2 ? "🎉" : "💪"}</span>
        <h3>${stars === 3 ? "Xuất sắc!" : stars === 2 ? "Làm tốt lắm!" : passed ? "Đạt rồi! Cố gắng thêm nhé!" : "Mình học lại bài này nhé!"}</h3>
        ${passed ? "" : `<p class="muted">Cần đúng ít nhất ${PASS}% để mở bài tiếp theo. Đọc lại phần ghi nhớ rồi thử lại nha!</p>`}
        <p class="big-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</p>
        <p>Đúng ngay lần đầu <b>${correct}/${n}</b> câu (${acc}%) · ${Math.max(1, Math.round(sec / 60))} phút · +${bonus} ⭐</p>
        <div class="quick center"><button class="btn ghost" id="again">Học lại bài này</button>
        ${next && (passed || wasDone) ? `<button class="btn" id="next">Bài tiếp: ${next.title} ▶</button>` : ""}<button class="btn ghost" id="toPath">Về lộ trình</button></div></div>`;
      $("#again").onclick = () => startLesson(sub, i);
      if ($("#next")) $("#next").onclick = () => startLesson(sub, i + 1);
      $("#toPath").onclick = back;
    }
  }
  function back() { $("#lessonView").hidden = true; $("#pathView").hidden = false; renderPath(); }

  // ---------- Video kiến thức ----------
  const fmtDur = (s) => s || "";
  async function loadVideos(sub) {
    const ck = `hv-vid-${G}-${sub}`;
    try { const c = JSON.parse(sessionStorage.getItem(ck) || "null"); if (c && Date.now() - c.t < 6 * 3600e3) return c.d; } catch (e) {}
    const r = await fetch(`/api/videos?grade=${G}&subject=${sub}`);
    if (!r.ok) throw new Error("api");
    const d = await r.json();
    try { sessionStorage.setItem(ck, JSON.stringify({ t: Date.now(), d })); } catch (e) {}
    return d;
  }

  async function renderVideos() {
    subTabs($("#vidTabs"), state.vsub, (k) => { state.vsub = k; renderVideos(); }, false);
    const sub = state.vsub;
    const grid = $("#vidGrid");
    grid.innerHTML = `<p class="muted">Đang tải video…</p>`;
    $("#vidInfo").textContent = "";
    let data;
    try { data = await loadVideos(sub); }
    catch (e) { grid.innerHTML = `<p class="err">Chưa tải được danh sách video. Kiểm tra mạng rồi thử lại nhé.</p>`; return; }
    if (sub !== state.vsub) return;
    const block = new Set(HV.blocked());
    const watched = new Set(HV.videos().map((v) => v.id));
    const list = (data.videos || []).filter((v) => !block.has(v.id));
    $("#vidInfo").innerHTML = `<b>${list.length} video</b> ${CUR.SUBJECTS[sub].label} lớp ${G} · Tuần ${data.week} (đổi mới vào thứ Hai hằng tuần)`;
    grid.innerHTML = list.map((v, i) => `<button type="button" class="vcard" data-i="${i}">
        <span class="thumb"><img loading="lazy" src="https://i.ytimg.com/vi/${v.id}/mqdefault.jpg" alt="" />${v.duration ? `<em>${fmtDur(v.duration)}</em>` : ""}${watched.has(v.id) ? `<strong class="seen">✓ Đã xem</strong>` : ""}</span>
        <span class="vt">${v.title}</span><small>${v.channel || ""}</small></button>`).join("") || `<p class="muted">Chưa có video phù hợp tuần này.</p>`;
    grid.querySelectorAll("[data-i]").forEach((b) => (b.onclick = () => openVideo(list[b.dataset.i], sub)));
  }

  let playing = null;
  function openVideo(v, sub) {
    $("#vidTitle").textContent = v.title;
    $("#vidFrame").src = `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`;
    $("#vidModal").hidden = false;
    HV.addVideo({ id: v.id, title: v.title, channel: v.channel, subject: sub, grade: G });
    playing = { at: HV.videos()[0].at, t0: Date.now(), v, sub };
    HV.setVideoPlaying(true);
    $("#vidClose").focus();
  }
  function closeVideo() {
    if (!playing) return;
    const sec = Math.round((Date.now() - playing.t0) / 1000);
    HV.updateVideoSec(playing.at, sec);
    HV.addHistory({ kind: "video", subject: playing.sub, title: playing.v.title, sec });
    HV.setVideoPlaying(false);
    playing = null;
    $("#vidFrame").src = "about:blank"; $("#vidModal").hidden = true;
    renderVideos();
  }
  $("#vidClose").onclick = closeVideo;
  $("#vidModal").onclick = (e) => { if (e.target.id === "vidModal") closeVideo(); };
  addEventListener("keydown", (e) => { if (e.key === "Escape") closeVideo(); });
  addEventListener("pagehide", () => { if (playing) { HV.updateVideoSec(playing.at, Math.round((Date.now() - playing.t0) / 1000)); } });

  setMode(location.hash === "#video" ? "video" : "path");
}
