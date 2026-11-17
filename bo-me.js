// Góc bố mẹ: tổng quan so với mục tiêu, lịch sử học, video đã xem, mục tiêu & phần quà, hồ sơ.
{
  const $ = (s) => document.querySelector(s);
  const SUB = { math: "Toán", vietnamese: "Tiếng Việt", english: "Tiếng Anh", life: "Kỹ năng sống" };
  const KIND = { lesson: ["📚", "Bài học"], mission: ["✅", "Nhiệm vụ"], video: ["🎬", "Video"], life: ["🌱", "Việc tốt"], reward: ["🎁", "Quà"] };
  const AVATARS = ["👧", "👦", "👸", "🧚", "🦸", "🐱", "🐰", "🦄", "🐼", "🦊"];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const fmtMin = (sec) => { const m = Math.round((sec || 0) / 60); return m < 60 ? `${m} phút` : `${Math.floor(m / 60)} giờ ${m % 60} phút`; };
  const dLabel = (d) => d.toLocaleDateString("vi-VN", { weekday: "short", day: "2-digit", month: "2-digit" });

  const open = () => { $("#locked").hidden = true; $("#parentApp").hidden = false; render(); };
  const ask = () => HV.parentGate(() => { try { sessionStorage.setItem("hv-parent-ok", "1"); } catch (e) {} open(); }, "Góc bố mẹ");
  $("#unlockBtn").onclick = ask;
  if (sessionStorage.getItem("hv-parent-ok") === "1") open(); else ask();

  let tab = "overview";
  document.querySelectorAll("[data-tab]").forEach((b) => (b.onclick = () => {
    tab = b.dataset.tab;
    document.querySelectorAll("[data-tab]").forEach((x) => { x.classList.toggle("is-on", x === b); x.setAttribute("aria-selected", x === b); });
    document.querySelectorAll("[data-panel]").forEach((p) => (p.hidden = p.dataset.panel !== tab));
    render();
  }));

  function render() {
    const p = HV.profile();
    $("#kidAvatar").textContent = p.avatar;
    $("#kidName").textContent = `Góc bố mẹ của ${p.name}`;
    $("#kidSub").textContent = `Lớp ${p.grade} · ${HV.stars()} sao · ${HV.streak()} ngày học liên tục`;
    HV.refreshStars();
    ({ overview, history: historyTab, videos: videosTab, goals: goalsTab, profile: profileTab })[tab](p);
  }

  // ---------- Tổng quan ----------
  function overview(p) {
    const g = p.goals, t = HV.dayStats(HV.day());
    const wk = HV.weekDays(), log = HV.log();
    const weekLessons = wk.reduce((s, k) => s + ((log[k] && log[k].lessons) || 0), 0);
    const kpi = (icon, label, have, need, unit, okWhen = have >= need) => `<div class="kpi ${okWhen ? "ok" : ""}">
      <span class="k-ico">${icon}</span><small>${label}</small><b>${have}<em>/${need} ${unit}</em></b>
      <div class="bar"><i style="width:${Math.min(100, need ? (have / need) * 100 : 100)}%"></i></div>
      <span class="k-state">${okWhen ? "✓ Đạt" : "Chưa đạt"}</span></div>`;
    $("#kpiToday").innerHTML =
      kpi("⏱️", "Thời gian học", t.minutes, g.minutes, "phút") +
      kpi("✏️", "Số câu đã làm", t.total, g.questions, "câu") +
      kpi("🎯", "Đúng ngay lần đầu", t.acc, g.accuracy, "%", t.total > 0 && t.acc >= g.accuracy) +
      kpi("📚", "Bài học tuần này", weekLessons, g.lessonsWeek, "bài");

    drawChart(p);

    const metDays = wk.filter((k) => log[k] && HV.goalMet(log[k], p)).length;
    $("#week").innerHTML = `<div class="week-days">${wk.map((k) => {
      const d = new Date(k + "T00:00:00"); const r = log[k]; const met = r && HV.goalMet(r, p); const fut = k > HV.today();
      return `<div class="wd ${met ? "met" : r ? "part" : ""} ${fut ? "fut" : ""}" title="${dLabel(d)}"><small>${d.toLocaleDateString("vi-VN", { weekday: "short" })}</small><span>${met ? "✓" : r ? "•" : ""}</span></div>`;
    }).join("")}</div>
      <p><b>${metDays}/${g.daysWeek}</b> ngày đạt mục tiêu · <b>${weekLessons}/${g.lessonsWeek}</b> bài học · <b>${fmtMin(wk.reduce((s, k) => s + ((log[k] && (log[k].learnSec || 0) + (log[k].videoSec || 0)) || 0), 0))}</b> học trong tuần</p>`;

    const tot = {};
    for (let i = 0; i < 7; i++) { const r = log[HV.key(HV.daysAgo(i))]; if (!r || !r.ans) continue; for (const [s, a] of Object.entries(r.ans)) { tot[s] = tot[s] || [0, 0]; tot[s][0] += a[0]; tot[s][1] += a[1]; } }
    const rows = Object.keys(SUB).map((s) => { const a = tot[s] || [0, 0]; const pc = a[1] ? Math.round((a[0] / a[1]) * 100) : null; return [s, a, pc]; });
    $("#subjects").innerHTML = rows.map(([s, a, pc]) => `<div class="srow"><span>${SUB[s]}</span>
      <div class="bar"><i style="width:${pc ?? 0}%;background:${pc === null ? "transparent" : pc >= g.accuracy ? "#1baf7a" : "#eda100"}"></i></div>
      <b>${pc === null ? "–" : pc + "%"}</b><small>${a[1]} câu</small></div>`).join("");
    const rated = rows.filter((r) => r[1][1] >= 5).sort((x, y) => x[2] - y[2]);
    $("#advice").textContent = rated.length
      ? `${rated[0][2] < g.accuracy ? `Môn cần kèm thêm: ${SUB[rated[0][0]]} (${rated[0][2]}% đúng, mục tiêu ${g.accuracy}%). ` : "Các môn đều đạt mức đúng mong muốn. "}${rated.length > 1 ? `Môn tốt nhất: ${SUB[rated[rated.length - 1][0]]} (${rated[rated.length - 1][2]}%).` : ""}`
      : "Chưa đủ dữ liệu để nhận xét. Con học vài ngày là có báo cáo.";

    $("#pathGrade").textContent = p.grade;
    const prog = HV.lessons();
    $("#pathProg").innerHTML = Object.entries(CUR.SUBJECTS).map(([k, s]) => {
      const us = CUR.units(k, p.grade); const done = us.filter((u) => (prog[u.id] || {}).done);
      const st = done.reduce((x, u) => x + (prog[u.id].stars || 0), 0);
      const next = us.find((u) => !(prog[u.id] || {}).done);
      return `<div class="pp"><span class="pp-ico" style="background:${s.color}">${s.icon}</span><div><b>${s.label}</b>
        <div class="bar"><i style="width:${(done.length / us.length) * 100}%"></i></div>
        <small>${done.length}/${us.length} bài · ${st} ★ ${next ? `· Tiếp theo: ${esc(next.title)}` : "· Đã hoàn thành lộ trình 🎉"}</small></div></div>`;
    }).join("");
  }

  function drawChart(p) {
    const log = HV.log(), goal = p.goals.minutes;
    const days = [...Array(14)].map((_, i) => { const d = HV.daysAgo(13 - i); const r = log[HV.key(d)] || {}; return { d, learn: Math.round((r.learnSec || 0) / 60), video: Math.round((r.videoSec || 0) / 60) }; });
    const max = Math.max(goal * 1.25, ...days.map((x) => x.learn + x.video), 10);
    const el = $("#chart");
    el.innerHTML = `<div class="goal-line" style="bottom:${(goal / max) * 100}%"><span>${goal} phút</span></div>` + days.map((x, i) => {
      const tot = x.learn + x.video;
      return `<div class="col" tabindex="0" data-i="${i}">
        <div class="stack" style="height:${(tot / max) * 100}%">
          ${x.video ? `<i class="seg v" style="flex:${x.video}"></i>` : ""}${x.learn ? `<i class="seg l" style="flex:${x.learn}"></i>` : ""}
        </div><small class="${i % 2 && i !== 13 ? "odd" : ""}">${x.d.getDate()}/${x.d.getMonth() + 1}</small></div>`;
    }).join("") + `<div class="tip" id="chartTip" hidden></div>`;
    const tip = $("#chartTip");
    el.querySelectorAll(".col").forEach((c) => {
      const show = () => {
        const x = days[c.dataset.i];
        tip.innerHTML = `<b>${dLabel(x.d)}</b><span><i style="background:#2a78d6"></i>Học bài ${x.learn} phút</span><span><i style="background:#eb6834"></i>Video ${x.video} phút</span><span>Tổng ${x.learn + x.video}/${goal} phút ${x.learn + x.video >= goal ? "✓" : ""}</span>`;
        tip.hidden = false;
        const r = c.getBoundingClientRect(), pr = el.getBoundingClientRect();
        tip.style.left = Math.min(Math.max(0, r.left - pr.left + r.width / 2 - 80), pr.width - 160) + "px";
      };
      c.onmouseenter = show; c.onfocus = show; c.onmouseleave = c.onblur = () => (tip.hidden = true);
    });
    $("#chartTable").innerHTML = `<thead><tr><th>Ngày</th><th>Học bài</th><th>Video</th><th>Tổng</th></tr></thead><tbody>${days.slice().reverse().map((x) => `<tr><td>${dLabel(x.d)}</td><td>${x.learn}</td><td>${x.video}</td><td>${x.learn + x.video}</td></tr>`).join("")}</tbody>`;
  }

  // ---------- Lịch sử ----------
  let filter = "all";
  function historyTab() {
    const h = HV.history();
    $("#histFilter").innerHTML = [["all", "Tất cả"], ...Object.entries(KIND).map(([k, v]) => [k, v[1]])].map(([k, l]) => `<button type="button" class="${filter === k ? "is-on" : ""}" data-f="${k}">${l}</button>`).join("");
    $("#histFilter").querySelectorAll("[data-f]").forEach((b) => (b.onclick = () => { filter = b.dataset.f; historyTab(); }));
    const list = h.filter((e) => filter === "all" || e.kind === filter);
    if (!list.length) { $("#histList").innerHTML = `<p class="muted">Chưa có hoạt động nào.</p>`; return; }
    const groups = {};
    list.forEach((e) => { const k = HV.key(new Date(e.at)); (groups[k] = groups[k] || []).push(e); });
    const log = HV.log();
    $("#histList").innerHTML = Object.entries(groups).map(([k, es]) => {
      const s = HV.dayStats(log[k]);
      return `<div class="hday"><h3>${dLabel(new Date(k + "T00:00:00"))} <small>${s.minutes} phút học · ${s.total} câu · ${s.acc}% đúng</small></h3>
        ${es.map((e) => { const [ic] = KIND[e.kind] || ["•"]; return `<div class="hrow"><time>${new Date(e.at).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}</time><span class="h-ico">${ic}</span>
          <div class="h-main"><b>${esc(e.title)}</b><small>${e.subject && SUB[e.subject] ? SUB[e.subject] : ""}</small></div>
          <div class="h-res">${e.total ? `<b>${e.score}/${e.total}</b>` : ""}${e.stars ? `<span class="stars">${"★".repeat(e.stars)}</span>` : ""}${e.sec ? `<small>${fmtMin(e.sec)}</small>` : ""}</div></div>`; }).join("")}</div>`;
    }).join("");
  }

  // ---------- Video ----------
  function videosTab() {
    const vs = HV.videos(), block = new Set(HV.blocked());
    $("#vidList").innerHTML = vs.length ? vs.map((v, i) => `<div class="vrow${block.has(v.id) ? " is-blocked" : ""}">
        <img src="https://i.ytimg.com/vi/${esc(v.id)}/default.jpg" alt="" loading="lazy" />
        <div class="h-main"><b>${esc(v.title)}</b><small>${esc(v.channel || "")} · ${SUB[v.subject] || ""} · ${new Date(v.at).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" })} · xem ${fmtMin(v.sec)}</small></div>
        <a class="link-btn" href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener">Xem thử</a>
        ${block.has(v.id) ? `<span class="muted">Đã ẩn</span>` : `<button class="link-btn" data-block="${esc(v.id)}">Ẩn video</button>`}</div>`).join("")
      : `<p class="muted">Con chưa xem video nào.</p>`;
    $("#blockList").innerHTML = block.size ? [...block].map((id) => { const v = vs.find((x) => x.id === id); return `<div class="re-row"><span>${esc(v ? v.title : id)}</span><button class="link-btn" data-unblock="${esc(id)}">Bỏ ẩn</button></div>`; }).join("") : `<p class="muted">Chưa ẩn video nào.</p>`;
    document.querySelectorAll("[data-block]").forEach((b) => (b.onclick = () => { HV.set("hv-video-block", [...new Set([...HV.blocked(), b.dataset.block])]); clearVidCache(); HV.toast("Đã ẩn video"); videosTab(); }));
    document.querySelectorAll("[data-unblock]").forEach((b) => (b.onclick = () => { HV.set("hv-video-block", HV.blocked().filter((x) => x !== b.dataset.unblock)); clearVidCache(); videosTab(); }));
  }
  const clearVidCache = () => { try { Object.keys(sessionStorage).filter((k) => k.startsWith("hv-vid-")).forEach((k) => sessionStorage.removeItem(k)); } catch (e) {} };

  // ---------- Mục tiêu & quà ----------
  function goalsTab(p) {
    const f = $("#goalForm");
    Object.entries(p.goals).forEach(([k, v]) => f[k] && (f[k].value = v));
    f.onsubmit = (e) => {
      e.preventDefault();
      const q = HV.profile();
      q.goals = Object.fromEntries(["minutes", "questions", "accuracy", "lessonsWeek", "daysWeek"].map((k) => [k, Number(f[k].value)]));
      HV.saveProfile(q); HV.toast("Đã lưu mục tiêu"); render();
    };
    $("#rewardType").innerHTML = Object.entries(HV.REWARD_TYPES).map(([k, l]) => `<option value="${k}">${l}</option>`).join("");
    $("#rewardEdit").innerHTML = p.rewards.map((r, i) => {
      const pr = HV.rewardProgress(r, p);
      return `<div class="rw">
        <input value="${esc(r.name)}" data-k="name" data-i="${i}" aria-label="Tên phần quà" />
        <select data-k="type" data-i="${i}" aria-label="Điều kiện">${Object.entries(HV.REWARD_TYPES).map(([k, l]) => `<option value="${k}" ${k === r.type ? "selected" : ""}>${l}</option>`).join("")}</select>
        <input type="number" min="1" value="${r.need}" data-k="need" data-i="${i}" aria-label="Cần đạt" />
        <button class="link-btn" data-del="${i}">Xoá</button>
        <small class="rw-prog">Hiện tại: ${Math.min(pr.have, pr.need)}/${pr.need} ${pr.unit}${pr.have >= pr.need ? " · ✓ Đủ điều kiện" : ""}</small></div>`;
    }).join("") || `<p class="muted">Chưa có phần quà.</p>`;
    $("#rewardEdit").onchange = (e) => {
      const el = e.target.closest("[data-k]"); if (!el) return;
      const q = HV.profile(); const r = q.rewards[el.dataset.i];
      r[el.dataset.k] = el.dataset.k === "need" ? Math.max(1, Number(el.value) || 1) : el.value;
      HV.saveProfile(q); HV.toast("Đã lưu"); goalsTab(HV.profile());
    };
    $("#rewardEdit").onclick = (e) => { const b = e.target.closest("[data-del]"); if (!b) return; const q = HV.profile(); q.rewards.splice(Number(b.dataset.del), 1); HV.saveProfile(q); goalsTab(HV.profile()); };
    const af = $("#addReward");
    af.onsubmit = (e) => { e.preventDefault(); const q = HV.profile(); q.rewards.push({ name: af.name.value.trim(), type: af.type.value, need: Number(af.need.value) }); HV.saveProfile(q); af.reset(); HV.toast("Đã thêm phần quà"); goalsTab(HV.profile()); };
    const h = HV.get("hv-redeemed", []);
    $("#redeemed").innerHTML = h.length ? h.slice(0, 10).map((x) => `<li>${new Date(x.at).toLocaleDateString("vi-VN")} · ${esc(x.name)}${x.type === "stars" || !x.type ? ` (−${x.need || x.cost} ⭐)` : ""}</li>`).join("") : `<li class="muted">Chưa trao quà nào.</li>`;
  }

  // ---------- Hồ sơ ----------
  function profileTab(p) {
    const f = $("#profileForm");
    f.name.value = p.name; f.grade.value = p.grade; f.playLimit.value = p.playLimit; f.requireMissions.checked = p.requireMissions;
    let avatar = p.avatar;
    const drawAv = () => ($("#avatars").innerHTML = AVATARS.map((a) => `<button type="button" class="av${a === avatar ? " is-on" : ""}" data-a="${a}">${a}</button>`).join(""));
    drawAv();
    $("#avatars").onclick = (e) => { const b = e.target.closest("[data-a]"); if (b) { avatar = b.dataset.a; drawAv(); } };
    f.onsubmit = (e) => {
      e.preventDefault();
      const old = HV.profile();
      const grade = Number(f.grade.value);
      if (grade !== old.grade && !confirm(`Chuyển con sang chương trình lớp ${grade}? Tiến độ lớp cũ vẫn được giữ.`)) return;
      HV.saveProfile({ ...old, name: f.name.value.trim() || "Bé yêu", avatar, grade, playLimit: Number(f.playLimit.value), requireMissions: f.requireMissions.checked });
      clearVidCache(); HV.toast("Đã lưu hồ sơ"); render();
    };
  }
  $("#unlockToday").onclick = () => { HV.set("hv-unlock-" + HV.today(), true); HV.toast("Đã mở khoá game cho hôm nay"); };
  $("#plus5").onclick = () => { HV.addStars(5); render(); HV.toast("Đã thưởng 5 sao"); };
  $("#minus5").onclick = () => { HV.addStars(-5); render(); };
  $("#resetToday").onclick = () => { const l = HV.log(); const r = l[HV.today()]; if (r) { Object.assign(r, { math: { done: 0, correct: 0 }, vietnamese: { done: 0, correct: 0 }, english: { done: 0, correct: 0 }, life: false, complete: false }); HV.set("hv-log", l); } render(); HV.toast("Đã đặt lại nhiệm vụ hôm nay"); };
}
