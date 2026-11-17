// Trang "Hôm nay": 3 nhiệm vụ mỗi ngày → mở khoá trò chơi, tích sao đổi quà.
{
  const P = HV.profile();
  HV.track("learn");
  const QUESTIONS_PER_MISSION = 5;
  const rnd = (n) => Math.floor(Math.random() * n);
  const shuffle = (a) => a.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);
  const dayNum = Math.floor(Date.now() / 864e5);

  // ---------- Câu hỏi Toán theo lớp ----------
  function mathQ(g) {
    let q, a;
    const t = rnd(3);
    if (g <= 1) {
      const x = rnd(10), y = rnd(10 - x + 1);
      if (t === 0 && x >= y) { q = `${x} − ${y} = ?`; a = x - y; } else { q = `${x} + ${y} = ?`; a = x + y; }
    } else if (g === 2) {
      if (t === 0) { const k = [2, 5][rnd(2)], m = 1 + rnd(10); q = `${k} × ${m} = ?`; a = k * m; }
      else if (t === 1) { const x = 20 + rnd(70), y = 5 + rnd(Math.min(25, 99 - x)); q = `${x} + ${y} = ?`; a = x + y; }
      else { const x = 30 + rnd(70), y = 5 + rnd(x - 10); q = `${x} − ${y} = ?`; a = x - y; }
    } else if (g === 3) {
      const k = 2 + rnd(8), m = 2 + rnd(9);
      if (t === 0) { q = `${k} × ${m} = ?`; a = k * m; }
      else if (t === 1) { q = `${k * m} : ${k} = ?`; a = m; }
      else { const x = 100 + rnd(800), y = 10 + rnd(99); q = `${x} + ${y} = ?`; a = x + y; }
    } else if (g === 4) {
      if (t === 0) { const x = 12 + rnd(88), y = 3 + rnd(7); q = `${x} × ${y} = ?`; a = x * y; }
      else if (t === 1) { const y = 3 + rnd(7), m = 12 + rnd(40); q = `${y * m} : ${y} = ?`; a = m; }
      else { const x = 1000 + rnd(8000), y = 100 + rnd(900); q = `${x} − ${y} = ?`; a = x - y; }
    } else {
      if (t === 0) { const x = (10 + rnd(90)) / 10, y = (10 + rnd(90)) / 10; q = `${x.toString().replace(".", ",")} + ${y.toString().replace(".", ",")} = ?`; a = Math.round((x + y) * 10) / 10; }
      else if (t === 1) { const p = [10, 20, 25, 50][rnd(4)], n = (2 + rnd(9)) * 20; q = `${p}% của ${n} là bao nhiêu?`; a = (p * n) / 100; }
      else { const x = 12 + rnd(30), y = 11 + rnd(20); q = `${x} × ${y} = ?`; a = x * y; }
    }
    const fmt = (v) => String(v).replace(".", ",");
    const opts = new Set([fmt(a)]);
    let guard = 0;
    while (opts.size < 4 && guard++ < 50) {
      const step = Number.isInteger(a) ? 1 + rnd(Math.max(3, Math.round(Math.abs(a) * 0.15))) : (1 + rnd(9)) / 10;
      const v = Math.round((a + (rnd(2) ? step : -step)) * 10) / 10;
      if (v >= 0) opts.add(fmt(v));
    }
    return { q, a: fmt(a), opts: shuffle([...opts]) };
  }

  // ---------- Tiếng Việt ----------
  const viBank = [
    ["Từ nào viết đúng chính tả?", "sạch sẽ", ["xạch sẽ", "sạch xẽ", "xạch xẽ"]],
    ["Từ nào viết đúng chính tả?", "trong trẻo", ["chong chẻo", "trong chẻo", "chong trẻo"]],
    ["Từ nào viết đúng chính tả?", "lấp lánh", ["nấp lánh", "lấp nánh", "nấp nánh"]],
    ["Từ nào viết đúng chính tả?", "giúp đỡ", ["dúp đỡ", "rúp đỡ", "giúp đở"]],
    ["Từ nào viết đúng chính tả?", "nghỉ ngơi", ["ngỉ ngơi", "nghĩ ngơi", "nghỉ nghơi"]],
    ["Từ nào viết đúng chính tả?", "quả chuối", ["quả truối", "quả chúi", "của chuối"]],
    ["Từ nào viết đúng chính tả?", "kiên nhẫn", ["kiêng nhẫn", "kiên nhẩn", "ciên nhẫn"]],
    ["Từ nào viết đúng chính tả?", "gọn gàng", ["ghọn gàng", "gọn ghàng", "gọng gàng"]],
    ["Từ nào chỉ hoạt động?", "chạy", ["bàn", "xanh", "đẹp"]],
    ["Từ nào chỉ sự vật?", "cây bút", ["viết", "nhanh", "vui vẻ"]],
    ["Từ nào chỉ đặc điểm?", "cao lớn", ["con mèo", "nhảy", "cái ghế"]],
    ["Từ nào chỉ hoạt động?", "đọc sách", ["quyển sách", "dày", "màu đỏ"]],
    ["Từ trái nghĩa với “nóng” là:", "lạnh", ["ấm", "nắng", "mát mẻ"]],
    ["Từ trái nghĩa với “nhanh” là:", "chậm", ["vội", "lẹ", "gấp"]],
    ["Từ cùng nghĩa với “siêng năng” là:", "chăm chỉ", ["lười biếng", "vui vẻ", "thông minh"]],
    ["Từ cùng nghĩa với “to lớn” là:", "khổng lồ", ["bé nhỏ", "tí hon", "xinh xắn"]],
    ["Câu nào dùng đúng dấu câu?", "Bạn tên là gì?", ["Bạn tên là gì.", "Bạn tên là gì,", "Bạn, tên là gì"]],
    ["Câu nào là câu hỏi?", "Hôm nay em học bài gì?", ["Em thích học Toán.", "Ôi, đẹp quá!", "Hãy ngồi ngay ngắn."]],
    ["Câu nào là câu cảm?", "Bông hoa đẹp quá!", ["Bông hoa màu đỏ.", "Hoa này tên gì?", "Hãy tưới hoa đi."]],
    ["“Mặt trời như quả bóng lửa.” dùng biện pháp gì?", "So sánh", ["Nhân hoá", "Điệp từ", "Không có"]],
    ["“Chị gió hát ru cây.” dùng biện pháp gì?", "Nhân hoá", ["So sánh", "Liệt kê", "Không có"]],
    ["Chữ nào đứng ngay sau chữ “b” trong bảng chữ cái?", "c", ["d", "a", "đ"]],
    ["Tiếng nào có vần “oang”?", "khoang", ["khang", "khoan", "hoàng hôn"]],
    ["Từ nào viết hoa đúng tên riêng?", "Hà Nội", ["hà Nội", "Hà nội", "hà nội"]],
  ];
  const viQ = () => { const [q, a, w] = viBank[rnd(viBank.length)]; return { q, a, opts: shuffle([a, ...w]) }; };

  // ---------- Tiếng Anh ----------
  const enBank = [
    ["🐱", "cat", ["dog", "fish", "bird"]], ["🐶", "dog", ["cat", "cow", "pig"]], ["🍎", "apple", ["banana", "orange", "grape"]],
    ["🍌", "banana", ["apple", "mango", "lemon"]], ["📚", "book", ["pen", "bag", "ruler"]], ["✏️", "pencil", ["book", "desk", "chair"]],
    ["🏠", "house", ["school", "park", "shop"]], ["☀️", "sun", ["moon", "star", "rain"]], ["🌧️", "rainy", ["sunny", "windy", "snowy"]],
    ["👗", "dress", ["shirt", "hat", "shoes"]], ["👟", "shoes", ["socks", "dress", "skirt"]], ["🚗", "car", ["bus", "bike", "train"]],
    ["🐟", "fish", ["bird", "frog", "duck"]], ["🥛", "milk", ["water", "juice", "tea"]], ["👀", "eyes", ["ears", "nose", "mouth"]],
    ["🎂", "birthday", ["holiday", "party", "school"]], ["👩‍🏫", "teacher", ["doctor", "farmer", "driver"]], ["🌸", "flower", ["tree", "leaf", "grass"]],
  ];
  const enQ = () => {
    if (rnd(4) === 0) {
      const set = [["red", "đỏ"], ["blue", "xanh dương"], ["green", "xanh lá"], ["yellow", "vàng"], ["pink", "hồng"], ["black", "đen"]];
      const [en, vi] = set[rnd(set.length)];
      return { q: `“${vi}” trong tiếng Anh là gì?`, a: en, opts: shuffle([en, ...shuffle(set.filter((s) => s[0] !== en)).slice(0, 3).map((s) => s[0])]) };
    }
    const [e, a, w] = enBank[rnd(enBank.length)];
    return { q: `<span class="big-emoji">${e}</span> This is a …`, a, opts: shuffle([a, ...w]) };
  };

  // ---------- Kỹ năng sống ----------
  const lifeTasks = [
    ["🛏️", "Tự gấp chăn, xếp gối sau khi ngủ dậy"], ["🎒", "Tự chuẩn bị sách vở cho ngày mai"], ["🍽️", "Giúp bố mẹ dọn bàn ăn"],
    ["🦷", "Đánh răng 2 phút, sáng và tối"], ["🧸", "Cất đồ chơi về đúng chỗ"], ["👕", "Tự gấp quần áo của mình"],
    ["🌱", "Tưới cây trong nhà"], ["💬", "Kể cho bố mẹ 3 điều vui ở trường hôm nay"], ["🙏", "Nói lời cảm ơn với một người đã giúp mình"],
    ["📞", "Đọc thuộc số điện thoại của bố hoặc mẹ"], ["🚸", "Nói cho bố mẹ nghe cách sang đường an toàn"], ["💧", "Uống đủ nước, nhắc cả nhà uống nước"],
    ["🧺", "Giúp phân loại quần áo bẩn"], ["📖", "Đọc to 1 trang truyện cho bố mẹ nghe"], ["🤗", "Ôm và nói “con yêu bố mẹ”"],
  ];
  const lifeTask = lifeTasks[dayNum % lifeTasks.length];
  const langKey = dayNum % 2 ? "english" : "vietnamese";

  const missions = [
    { key: "math", icon: "🔢", title: "Toán", desc: `${QUESTIONS_PER_MISSION} phép tính lớp ${P.grade}`, color: "#fff1b8", gen: () => mathQ(P.grade) },
    langKey === "english"
      ? { key: "english", icon: "🔤", title: "Tiếng Anh", desc: `${QUESTIONS_PER_MISSION} câu từ vựng`, color: "#e3f4ff", gen: enQ }
      : { key: "vietnamese", icon: "📖", title: "Tiếng Việt", desc: `${QUESTIONS_PER_MISSION} câu chính tả, từ và câu`, color: "#ffe4e7", gen: viQ },
    { key: "life", icon: lifeTask[0], title: "Kỹ năng sống", desc: lifeTask[1], color: "#e6f7dc" },
  ];

  const $ = (s) => document.querySelector(s);
  const isDone = (rec, m) => (m.key === "life" ? rec.life : rec[m.key].done >= QUESTIONS_PER_MISSION);

  function renderHero() {
    const rec = HV.day();
    const n = missions.filter((m) => isDone(rec, m)).length;
    $("#heroName").textContent = P.name;
    $("#heroAvatar").textContent = P.avatar;
    $("#heroStreak").textContent = HV.streak();
    $("#heroStars").textContent = HV.stars();
    $("#heroCount").textContent = `${n}/3`;
    $("#ring").style.setProperty("--p", (n / 3) * 100);
    const s = document.querySelector("#hvStars"); if (s) s.textContent = HV.stars();
    const box = $("#unlockBox");
    box.className = "unlock " + (rec.complete ? "is-open" : "");
    box.innerHTML = rec.complete
      ? `<span>🎉</span><div><strong>Giỏi quá! Góc trò chơi đã mở.</strong><p>Hôm nay bé được chơi ${P.playLimit} phút.</p></div><a class="btn" href="tro-choi.html">Vào chơi game</a>`
      : `<span>🔒</span><div><strong>Làm xong 3 nhiệm vụ để mở Góc trò chơi</strong><p>Còn ${3 - n} nhiệm vụ nữa thôi!</p></div>`;
  }

  function renderMissions() {
    const rec = HV.day();
    $("#missions").innerHTML = missions
      .map((m, i) => {
        const done = isDone(rec, m);
        const prog = m.key === "life" ? "" : `<div class="bar"><i style="width:${(Math.min(rec[m.key].done, QUESTIONS_PER_MISSION) / QUESTIONS_PER_MISSION) * 100}%"></i></div>`;
        const btn = done ? `<span class="done-tag">✓ Đã xong</span>` : m.key === "life"
          ? `<button class="btn" data-life>Con làm xong rồi!</button>`
          : `<button class="btn" data-go="${i}">${rec[m.key].done ? "Làm tiếp" : "Bắt đầu"}</button>`;
        return `<article class="mission${done ? " is-done" : ""}" style="--c:${m.color}">
          <div class="m-icon">${m.icon}</div>
          <div class="m-body"><p class="m-step">Nhiệm vụ ${i + 1}</p><h3>${m.title}</h3><p>${m.desc}</p>${prog}</div>
          <div class="m-act">${btn}</div></article>`;
      })
      .join("");
    document.querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => play(missions[b.dataset.go])));
    const lb = document.querySelector("[data-life]");
    if (lb) lb.onclick = () => HV.parentGate(() => { const r = HV.day(); r.life = true; HV.addHistory({ kind: "life", subject: "life", title: `Việc tốt: ${lifeTask[1]}` }); finish(r, "Bố mẹ đã xác nhận. +5 ⭐"); HV.addStars(5); }, "Bố mẹ xác nhận con đã làm xong");
  }

  function finish(rec, msg) {
    const wasComplete = rec.complete;
    rec.complete = missions.every((m) => isDone(rec, m));
    HV.saveDay(rec);
    if (rec.complete && !wasComplete) { HV.addStars(10); HV.confetti(); HV.toast("Hoàn thành cả 3 nhiệm vụ! +10 ⭐ thưởng"); }
    else if (msg) HV.toast(msg);
    renderAll();
  }

  // ---------- Khung làm bài ----------
  function play(m) {
    const panel = $("#player");
    let qi = HV.day()[m.key].done;
    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "start" });

    const next = () => {
      const rec = HV.day();
      if (rec[m.key].done >= QUESTIONS_PER_MISSION) {
        panel.innerHTML = `<div class="p-done"><span>🏅</span><h3>Xong nhiệm vụ ${m.title}!</h3>
          <p>Đúng ${rec[m.key].correct}/${QUESTIONS_PER_MISSION} câu.</p><button class="btn" id="pClose">Về nhiệm vụ</button></div>`;
        $("#pClose").onclick = () => { panel.hidden = true; };
        HV.addHistory({ kind: "mission", subject: m.key, title: `Nhiệm vụ hằng ngày: ${m.title}`, score: rec[m.key].correct, total: QUESTIONS_PER_MISSION });
        finish(rec, `Xong ${m.title}! +3 ⭐`); HV.addStars(3); renderHero();
        return;
      }
      const item = m.gen();
      let tries = 0;
      panel.innerHTML = `<div class="p-head" style="--c:${m.color}"><span>${m.icon} ${m.title}</span><span>Câu ${qi + 1}/${QUESTIONS_PER_MISSION}</span>
          <button class="p-x" aria-label="Đóng">✕</button></div>
        <h3 class="p-q">${item.q}</h3>
        <div class="p-opts">${item.opts.map((o) => `<button class="opt" data-v="${o}">${o}</button>`).join("")}</div>
        <p class="p-fb" aria-live="polite"></p>`;
      panel.querySelector(".p-x").onclick = () => { panel.hidden = true; };
      panel.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
        const ok = b.dataset.v === item.a;
        const fb = panel.querySelector(".p-fb");
        if (ok) {
          b.classList.add("ok");
          panel.querySelectorAll(".opt").forEach((x) => (x.disabled = true));
          const r = HV.day(); r[m.key].done++; if (tries === 0) { r[m.key].correct++; HV.addStars(1); }
          HV.saveDay(r); HV.answer(m.key, tries === 0); qi++;
          fb.textContent = tries === 0 ? ["Đúng rồi! +1 ⭐", "Xuất sắc! +1 ⭐", "Giỏi quá! +1 ⭐"][rnd(3)] : "Đúng rồi! Lần sau cố gắng ngay từ đầu nhé.";
          fb.className = "p-fb good"; renderHero(); renderMissions();
          setTimeout(next, 900);
        } else {
          tries++; b.classList.add("no"); b.disabled = true;
          fb.textContent = "Chưa đúng, con thử lại nhé!"; fb.className = "p-fb bad";
        }
      }));
    };
    next();
  }

  // ---------- Tủ quà ----------
  function renderRewards() {
    const p = HV.profile();
    const wk = HV.weekDays()[0];
    const given = HV.get("hv-given", {});
    $("#rewards").innerHTML = p.rewards.length
      ? p.rewards.map((r, i) => {
          const pr = HV.rewardProgress(r, p);
          const pct = Math.min(100, (pr.have / pr.need) * 100);
          const gk = r.type === "stars" ? null : `${r.name}|${r.type === "streak" ? "streak" : wk}`;
          const done = gk && given[gk];
          const ready = pr.have >= pr.need && !done;
          const label = r.type === "stars" ? "Đổi quà" : done ? "Đã nhận" : "Nhận quà";
          return `<div class="reward"><div><strong>🎁 ${r.name}</strong><div class="bar"><i style="width:${pct}%"></i></div>
            <small>${Math.min(pr.have, pr.need)}/${pr.need} ${pr.unit}</small></div>
            <button class="btn ${ready ? "" : "ghost"}" data-r="${i}" ${ready ? "" : "disabled"}>${label}</button></div>`;
        }).join("")
      : `<p>Bố mẹ chưa đặt phần thưởng. Vào Góc bố mẹ để thêm nhé.</p>`;
    document.querySelectorAll("[data-r]").forEach((b) => (b.onclick = () => {
      const r = p.rewards[b.dataset.r];
      HV.parentGate(() => {
        if (r.type === "stars") HV.addStars(-r.need);
        else { const g = HV.get("hv-given", {}); g[`${r.name}|${r.type === "streak" ? "streak" : wk}`] = Date.now(); HV.set("hv-given", g); }
        const h = HV.get("hv-redeemed", []); h.unshift({ name: r.name, type: r.type, need: r.need, at: new Date().toISOString() }); HV.set("hv-redeemed", h.slice(0, 80));
        HV.addHistory({ kind: "reward", title: `Nhận quà: ${r.name}` });
        if (/phút/.test(r.name)) HV.set("hv-bonus-" + HV.today(), (HV.get("hv-bonus-" + HV.today(), 0) || 0) + (parseInt(r.name.match(/\d+/)) || 15));
        HV.confetti(); HV.toast(`Đã nhận quà: ${r.name}`); renderAll();
      }, `Bố mẹ duyệt quà: ${r.name}`);
    }));
  }

  function renderAll() { renderHero(); renderMissions(); renderRewards(); }
  renderAll();
}
