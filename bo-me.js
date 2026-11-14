{
  const $ = (s) => document.querySelector(s);
  const app = $("#parentApp");
  const AVATARS = ["👧", "👦", "👸", "🧚", "🦸", "🐱", "🐰", "🦄", "🐼", "🦊"];
  const SUBJ = { math: "Toán", vietnamese: "Tiếng Việt", english: "Tiếng Anh" };
  const open = () => { app.hidden = false; render(); };

  if (sessionStorage.getItem("hv-parent-ok") === "1") open();
  else HV.parentGate(() => { try { sessionStorage.setItem("hv-parent-ok", "1"); } catch (e) {} open(); }, "Góc bố mẹ");

  function lastDays(n) {
    const out = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      out.push([k, d]);
    }
    return out;
  }

  function render() {
    const p = HV.profile();
    const log = HV.log();
    const days = lastDays(7);
    const tot = { math: [0, 0], vietnamese: [0, 0], english: [0, 0] };
    let completeDays = 0, lifeDays = 0;
    days.forEach(([k]) => {
      const r = log[k]; if (!r) return;
      Object.keys(tot).forEach((s) => { tot[s][0] += r[s].correct; tot[s][1] += r[s].done; });
      if (r.complete) completeDays++; if (r.life) lifeDays++;
    });

    $("#stats").innerHTML = [
      ["⭐", HV.stars(), "sao hiện có"],
      ["🔥", HV.streak(), "ngày học liên tục"],
      ["✅", `${completeDays}/7`, "ngày xong nhiệm vụ"],
      ["🌱", `${lifeDays}/7`, "ngày làm kỹ năng sống"],
    ].map(([i, v, l]) => `<div class="stat"><span>${i}</span><b>${v}</b><small>${l}</small></div>`).join("");

    const cell = (r, s) => (r && r[s].done ? `${r[s].correct}/${r[s].done}` : "–");
    $("#report").innerHTML = `<thead><tr><th>Ngày</th><th>Toán</th><th>Tiếng Việt</th><th>Tiếng Anh</th><th>Kỹ năng</th><th>Xong</th></tr></thead><tbody>${days
      .map(([k, d]) => { const r = log[k]; return `<tr><td>${d.toLocaleDateString("vi-VN", { weekday: "short", day: "2-digit", month: "2-digit" })}</td>
        <td>${cell(r, "math")}</td><td>${cell(r, "vietnamese")}</td><td>${cell(r, "english")}</td>
        <td>${r && r.life ? "✓" : "–"}</td><td>${r && r.complete ? "🎉" : "–"}</td></tr>`; }).join("")}</tbody>`;

    const rated = Object.entries(tot).filter(([, v]) => v[1] >= 5).map(([s, v]) => [s, v[0] / v[1]]).sort((a, b) => a[1] - b[1]);
    $("#advice").textContent = rated.length
      ? `Môn cần chú ý: ${SUBJ[rated[0][0]]} (đúng ngay lần đầu ${Math.round(rated[0][1] * 100)}%). Môn tốt nhất: ${SUBJ[rated[rated.length - 1][0]]} (${Math.round(rated[rated.length - 1][1] * 100)}%).`
      : "Chưa đủ dữ liệu để nhận xét. Con làm nhiệm vụ vài ngày là có báo cáo.";

    const f = $("#profileForm");
    f.name.value = p.name; f.grade.value = p.grade; f.playLimit.value = p.playLimit; f.requireMissions.checked = p.requireMissions;
    let avatar = p.avatar;
    const drawAv = () => ($("#avatars").innerHTML = AVATARS.map((a) => `<button type="button" class="av${a === avatar ? " is-on" : ""}" data-a="${a}">${a}</button>`).join(""));
    drawAv();
    $("#avatars").onclick = (e) => { const b = e.target.closest("[data-a]"); if (b) { avatar = b.dataset.a; drawAv(); } };
    f.onsubmit = (e) => {
      e.preventDefault();
      HV.saveProfile({ ...HV.profile(), name: f.name.value.trim() || "Bé yêu", avatar, grade: Number(f.grade.value), playLimit: Number(f.playLimit.value), requireMissions: f.requireMissions.checked });
      HV.toast("Đã lưu hồ sơ"); render();
    };

    $("#rewardEdit").innerHTML = p.rewards.map((r, i) => `<div class="re-row"><span>🎁 ${r.name}</span><b>${r.cost} ⭐</b><button class="link-btn" data-del="${i}">Xoá</button></div>`).join("") || `<p class="muted">Chưa có phần thưởng.</p>`;
    $("#rewardEdit").onclick = (e) => { const b = e.target.closest("[data-del]"); if (!b) return; const q = HV.profile(); q.rewards.splice(Number(b.dataset.del), 1); HV.saveProfile(q); render(); };
    const af = $("#addReward");
    af.onsubmit = (e) => { e.preventDefault(); const q = HV.profile(); q.rewards.push({ name: af.name.value.trim(), cost: Number(af.cost.value) }); HV.saveProfile(q); af.reset(); render(); };

    const h = HV.get("hv-redeemed", []);
    $("#history").innerHTML = h.length ? h.slice(0, 8).map((x) => `<li>${new Date(x.at).toLocaleDateString("vi-VN")} · ${x.name} (−${x.cost} ⭐)</li>`).join("") : `<li class="muted">Chưa đổi quà nào.</li>`;
    const hs = document.querySelector("#hvStars"); if (hs) hs.textContent = HV.stars();
  }

  $("#unlockToday").onclick = () => { HV.set("hv-unlock-" + HV.today(), true); HV.toast("Đã mở khoá game cho hôm nay"); };
  $("#plus5").onclick = () => { HV.addStars(5); render(); HV.toast("Đã thưởng 5 sao"); };
  $("#minus5").onclick = () => { HV.addStars(-5); render(); };
  $("#resetToday").onclick = () => { const l = HV.log(); delete l[HV.today()]; HV.set("hv-log", l); render(); HV.toast("Đã đặt lại nhiệm vụ hôm nay"); };
}
