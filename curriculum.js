// Chương trình học theo lớp: lộ trình bài (đơn vị kiến thức) cho 4 môn.
// Toán: câu hỏi sinh tự động theo chủ đề (mỗi lần học có câu mới).
// Tiếng Việt, Tiếng Anh: bài trong LESSON_DATA + ngân hàng chung. Kỹ năng sống: tình huống.
const CUR = (() => {
  const rnd = (n) => Math.floor(Math.random() * n);
  const between = (a, b) => a + rnd(b - a + 1);
  const shuffle = (a) => a.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);
  const vn = (n) => String(n).replace(".", ",");
  const money = (n) => n.toLocaleString("vi-VN") + " đồng";

  // Tạo 4 lựa chọn số quanh đáp án
  function numQ(q, a, opt = {}) {
    const fmt = opt.fmt || vn;
    const set = new Set([fmt(a)]);
    const spread = opt.spread || Math.max(2, Math.round(Math.abs(a) * 0.12));
    let g = 0;
    while (set.size < 4 && g++ < 80) {
      let v = a + (rnd(2) ? 1 : -1) * (1 + rnd(spread));
      if (opt.dec) v = Math.round((a + (rnd(2) ? 1 : -1) * (1 + rnd(9)) / (opt.dec === 2 ? 100 : 10)) * 100) / 100;
      if (v >= 0) set.add(fmt(v));
    }
    return { q, a: fmt(a), opts: shuffle([...set]), hint: opt.hint };
  }
  const choiceQ = (q, a, wrong, hint) => ({ q, a, opts: shuffle([a, ...[...new Set(wrong.filter((x) => x !== a))].slice(0, 3)]), hint });

  // ---------- Bộ sinh câu hỏi Toán ----------
  const EMO = ["🍎", "⭐", "🐟", "🌸", "🎈", "🍓", "🐤", "🚗"];
  const G = {
    count: (m) => { const n = between(2, m), e = EMO[rnd(EMO.length)]; return numQ(`Có bao nhiêu ${e}?<span class="emo-row">${e.repeat(n)}</span>`, n, { spread: 2, hint: "Chỉ tay vào từng hình và đếm lần lượt." }); },
    compare: (m) => { const a = rnd(m + 1), b = rnd(m + 1); return choiceQ(`Điền dấu thích hợp: ${a} … ${b}`, a > b ? ">" : a < b ? "<" : "=", [">", "<", "="].filter((x) => x !== (a > b ? ">" : a < b ? "<" : "=")), "Số nào nhiều chục hơn thì lớn hơn; cùng chục thì so đơn vị."); },
    add: (m) => { const a = rnd(m + 1), b = rnd(m - a + 1); return numQ(`${a} + ${b} = ?`, a + b, { hint: "Đếm thêm từ số lớn hơn." }); },
    sub: (m) => { const a = rnd(m + 1), b = rnd(a + 1); return numQ(`${a} − ${b} = ?`, a - b, { hint: "Bớt đi rồi đếm phần còn lại." }); },
    addCarry: () => { const a = between(15, 79), b = between(5, Math.min(99 - a, 29)); return numQ(`${a} + ${b} = ?`, a + b, { hint: "Cộng đơn vị trước, đủ 10 thì nhớ 1 sang hàng chục." }); },
    subBorrow: () => { const a = between(31, 99), b = between(6, a - 10); return numQ(`${a} − ${b} = ?`, a - b, { hint: "Đơn vị không trừ được thì mượn 1 chục (thêm 10)." }); },
    place: (m) => { const n = between(11, m - 1), c = Math.floor(n / 10), d = n % 10; return choiceQ(`Số ${n} gồm:`, `${c} chục ${d} đơn vị`, [`${d} chục ${c} đơn vị`, `${c} chục ${d + 1} đơn vị`, `${c + 1} chục ${d} đơn vị`], "Chữ số bên trái là hàng chục, bên phải là hàng đơn vị."); },
    seq: () => { const s = [2, 5, 10, 3][rnd(4)], st = between(0, 20), arr = [0, 1, 2, 3].map((i) => st + i * s); return numQ(`Số tiếp theo: ${arr.join(", ")}, …`, st + 4 * s, { spread: s, hint: `Mỗi số hơn số trước ${s} đơn vị.` }); },
    hundreds: () => { const n = between(101, 889); return choiceQ(`Số ${n} đọc là:`, readNum(n), [readNum(n + 10), readNum(n + 100 > 999 ? n - 100 : n + 100), readNum(reverse3(n))].filter((x) => x !== readNum(n)), "Đọc lần lượt hàng trăm, chục, đơn vị."); },
    mul: (t) => { const k = t[rnd(t.length)], m = between(1, 10); return numQ(`${k} × ${m} = ?`, k * m, { hint: `Đọc lại bảng nhân ${k}.` }); },
    div: (t) => { const k = t[rnd(t.length)], m = between(1, 10); return numQ(`${k * m} : ${k} = ?`, m, { spread: 2, hint: `Nhớ bảng nhân ${k}: ${k} × ? = ${k * m}.` }); },
    mulBig: () => { const a = between(12, 299), b = between(2, 9); return numQ(`${a} × ${b} = ?`, a * b, { hint: "Nhân từ phải sang trái, có nhớ thì cộng vào hàng tiếp theo." }); },
    divBig: () => { const b = between(2, 9), m = between(11, 120); return numQ(`${b * m} : ${b} = ?`, m, { hint: "Chia lần lượt từ trái sang phải." }); },
    divRem: () => { const b = between(2, 9), m = between(2, 9), r = rnd(b); return choiceQ(`${b * m + r} : ${b} = ?`, `${m} (dư ${r})`, [`${m + 1} (dư ${r})`, `${m} (dư ${(r + 1) % b})`, `${m - 1 < 0 ? m + 2 : m - 1} (dư ${r})`], "Số dư luôn bé hơn số chia."); },
    big: () => { const a = between(10000, 89999), b = between(1000, 9999); return rnd(2) ? numQ(`${a} + ${b} = ?`, a + b, { spread: 1000 }) : numQ(`${a} − ${b} = ?`, a - b, { spread: 1000 }); },
    word: (lv) => {
      const n = ["Lan", "Minh", "Bông", "Nam", "Mai"][rnd(5)], o = ["quyển vở", "bông hoa", "viên bi", "cái kẹo"][rnd(4)];
      if (lv <= 1) { const a = between(2, 6), b = between(1, 9 - a); return numQ(`${n} có ${a} ${o}, được cho thêm ${b} ${o}. Hỏi ${n} có tất cả bao nhiêu ${o}?`, a + b, { spread: 2, hint: "“Thêm” thì làm phép cộng." }); }
      if (lv === 2) { const a = between(30, 80), b = between(5, a - 10); return numQ(`${n} có ${a} ${o}, cho bạn ${b} ${o}. Hỏi ${n} còn lại bao nhiêu ${o}?`, a - b, { hint: "“Cho bạn, còn lại” thì làm phép trừ." }); }
      const k = between(3, 9), m = between(4, 9); return numQ(`Mỗi hộp có ${k} ${o}. Hỏi ${m} hộp như thế có bao nhiêu ${o}?`, k * m, { hint: "Nhiều nhóm bằng nhau thì làm phép nhân." });
    },
    time: () => { const h = between(1, 12), half = rnd(2); return choiceQ(`Kim ngắn chỉ số ${h}${half ? ` và hơi quá một chút` : ""}, kim dài chỉ số ${half ? 6 : 12}. Đồng hồ chỉ mấy giờ?`, half ? `${h} giờ 30 phút` : `${h} giờ`, half ? [`${h} giờ`, `6 giờ ${h * 5} phút`, `${h % 12 + 1} giờ 30 phút`] : [`12 giờ ${h * 5} phút`, `${h} giờ 30 phút`, `${h % 12 + 1} giờ`], "Kim ngắn chỉ giờ, kim dài chỉ phút; kim dài ở số 6 là 30 phút."); },
    measure: () => {
      const t = rnd(4);
      if (t === 0) { const m = between(1, 9); return numQ(`${m} m = ? cm`, m * 100, { spread: 50, hint: "1 m = 100 cm." }); }
      if (t === 1) { const k = between(1, 9); return numQ(`${k} kg = ? g`, k * 1000, { spread: 500, hint: "1 kg = 1000 g." }); }
      if (t === 2) { const a = between(2, 30), b = between(2, 30); return numQ(`${a} kg + ${b} kg = ? kg`, a + b, { hint: "Cộng số đo như cộng số, giữ nguyên đơn vị." }); }
      const k = between(1, 9); return numQ(`${k} km = ? m`, k * 1000, { spread: 500, hint: "1 km = 1000 m." });
    },
    money: () => { const pay = [10, 20, 50, 100][rnd(4)] * 1000, cost = between(1, pay / 1000 - 1) * 1000; return numQ(`Mẹ đưa ${money(pay)}, mua hết ${money(cost)}. Còn lại bao nhiêu tiền?`, pay - cost, { fmt: money, spread: 3000, hint: "Lấy số tiền đưa trừ số tiền mua." }); },
    perim: () => { const a = between(3, 20), b = between(2, a); return rnd(2) ? numQ(`Hình chữ nhật dài ${a} cm, rộng ${b} cm. Chu vi là bao nhiêu cm?`, (a + b) * 2, { hint: "Chu vi = (dài + rộng) × 2." }) : numQ(`Hình vuông cạnh ${a} cm. Chu vi là bao nhiêu cm?`, a * 4, { hint: "Chu vi hình vuông = cạnh × 4." }); },
    area: () => { const a = between(3, 15), b = between(2, a); return rnd(2) ? numQ(`Hình chữ nhật dài ${a} cm, rộng ${b} cm. Diện tích là bao nhiêu cm²?`, a * b, { hint: "Diện tích = dài × rộng." }) : numQ(`Hình vuông cạnh ${a} cm. Diện tích là bao nhiêu cm²?`, a * a, { hint: "Diện tích hình vuông = cạnh × cạnh." }); },
    fracOf: () => { const d = [2, 3, 4, 5][rnd(4)], m = between(2, 9); return numQ(`1/${d} của ${d * m} là bao nhiêu?`, m, { spread: 2, hint: `Chia ${d * m} thành ${d} phần bằng nhau.` }); },
    fracCmp: () => { const d = between(4, 12), a = between(1, d - 1); let b = between(1, d - 1); if (b === a) b = a === 1 ? 2 : a - 1; return choiceQ(`So sánh: ${a}/${d} … ${b}/${d}`, a > b ? ">" : "<", [a > b ? "<" : ">", "="], "Cùng mẫu số: tử số lớn hơn thì phân số lớn hơn."); },
    fracAdd: () => { const d = between(3, 12), a = between(1, d - 2), b = between(1, d - a - 1); return choiceQ(`${a}/${d} + ${b}/${d} = ?`, `${a + b}/${d}`, [`${a + b}/${d * 2}`, `${a + b + 1}/${d}`, `${a * b}/${d}`], "Cùng mẫu số: cộng tử số, giữ nguyên mẫu số."); },
    letter: () => { const a = between(5, 60), b = between(5, 40); return numQ(`Tính giá trị của a + ${b} với a = ${a}`, a + b, { hint: "Thay chữ a bằng số rồi tính." }); },
    avg: () => { const m = between(10, 50), d = [between(1, 8), between(1, 8)]; const xs = shuffle([m - d[0], m + d[0] - d[1], m + d[1]]); return numQ(`Trung bình cộng của ${xs.join(", ")} là?`, m, { hint: "Cộng tất cả rồi chia cho số các số hạng." }); },
    dec: () => { const a = between(11, 99) / 10, b = between(11, 99) / 10; return rnd(2) ? numQ(`${vn(a)} + ${vn(b)} = ?`, Math.round((a + b) * 10) / 10, { dec: 1, hint: "Đặt thẳng dấu phẩy rồi cộng như số tự nhiên." }) : numQ(`${vn(a)} × 10 = ?`, Math.round(a * 100) / 10, { dec: 1, hint: "Nhân với 10: dời dấu phẩy sang phải 1 chữ số." }); },
    pct: () => { const p = [10, 20, 25, 50, 75][rnd(5)], n = between(2, 20) * 20; return numQ(`${p}% của ${n} là bao nhiêu?`, (p * n) / 100, { hint: `Lấy ${n} × ${p} : 100.` }); },
    tri: () => { const a = between(2, 20) * 2, h = between(2, 15); return numQ(`Tam giác có đáy ${a} cm, chiều cao ${h} cm. Diện tích là bao nhiêu cm²?`, (a * h) / 2, { hint: "Diện tích tam giác = đáy × chiều cao : 2." }); },
    vol: () => { const a = between(2, 9), b = between(2, 9), c = between(2, 9); return numQ(`Hình hộp chữ nhật dài ${a} cm, rộng ${b} cm, cao ${c} cm. Thể tích là bao nhiêu cm³?`, a * b * c, { hint: "Thể tích = dài × rộng × cao." }); },
    speed: () => { const v = between(3, 12) * 5, t = between(2, 5); return rnd(2) ? numQ(`Ô tô đi ${v * t} km trong ${t} giờ. Vận tốc là bao nhiêu km/giờ?`, v, { hint: "Vận tốc = quãng đường : thời gian." }) : numQ(`Xe máy đi với vận tốc ${v} km/giờ trong ${t} giờ. Quãng đường là bao nhiêu km?`, v * t, { hint: "Quãng đường = vận tốc × thời gian." }); },
  };
  function readNum(n) {
    const d = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const h = Math.floor(n / 100), c = Math.floor((n % 100) / 10), u = n % 10;
    let s = `${d[h]} trăm`;
    if (c === 0 && u) s += ` linh ${d[u]}`;
    else if (c === 1) s += ` mười${u ? " " + (u === 5 ? "lăm" : d[u]) : ""}`;
    else if (c > 1) s += ` ${d[c]} mươi${u ? " " + (u === 1 ? "mốt" : u === 5 ? "lăm" : d[u]) : ""}`;
    return s;
  }
  function reverse3(n) { const r = Number(String(n).split("").reverse().join("")); return r >= 100 && r !== n ? r : n + 11; }

  // Đơn vị kiến thức Toán theo lớp: [tên, ghi nhớ, [bộ sinh, tham số]...]
  const MATH = {
    1: [
      ["Đếm đến 10", "Đếm lần lượt từng đồ vật, mỗi đồ vật chỉ đếm một lần.", [["count", 10]]],
      ["So sánh số trong phạm vi 10", "Dấu > là lớn hơn, < là bé hơn, = là bằng nhau. Miệng dấu luôn mở về phía số lớn.", [["compare", 10]]],
      ["Cộng trong phạm vi 10", "Cộng là gộp lại. Đếm thêm từ số lớn hơn sẽ nhanh hơn.", [["add", 10], ["word", 1]]],
      ["Trừ trong phạm vi 10", "Trừ là bớt đi. Số bị trừ luôn lớn hơn hoặc bằng số trừ.", [["sub", 10]]],
      ["Các số đến 20", "Số 15 gồm 1 chục và 5 đơn vị.", [["count", 20], ["compare", 20], ["add", 20]]],
      ["Các số đến 100", "Đếm theo chục: 10, 20, 30… 100.", [["place", 100], ["compare", 100], ["seq"]]],
      ["Xem đồng hồ", "Kim ngắn chỉ giờ, kim dài chỉ phút. Kim dài ở số 12 là giờ đúng.", [["time"]]],
      ["Ôn tập lớp 1", "Ôn đếm, so sánh, cộng trừ trong phạm vi 100 không nhớ.", [["add", 20], ["sub", 20], ["compare", 100], ["word", 1]]],
    ],
    2: [
      ["Ôn tập số đến 100", "Mỗi số có hàng chục và hàng đơn vị.", [["place", 100], ["compare", 100], ["seq"]]],
      ["Cộng có nhớ trong phạm vi 100", "Cộng hàng đơn vị trước; được 10 trở lên thì viết đơn vị, nhớ 1 sang hàng chục.", [["addCarry"]]],
      ["Trừ có nhớ trong phạm vi 100", "Đơn vị không trừ được thì mượn 1 chục (thêm 10), rồi trả 1 ở hàng chục.", [["subBorrow"]]],
      ["Bài toán thêm, bớt", "“Thêm, tất cả” → cộng. “Bớt, còn lại” → trừ.", [["word", 2], ["word", 1]]],
      ["Bảng nhân 2 và 5", "Nhân là cộng nhiều số giống nhau: 2 × 3 = 2 + 2 + 2.", [["mul", [2, 5]]]],
      ["Bảng chia 2 và 5", "Chia là chia đều. 10 : 2 = 5 vì 2 × 5 = 10.", [["div", [2, 5]]]],
      ["Các số đến 1000", "Số có ba chữ số: hàng trăm, hàng chục, hàng đơn vị.", [["hundreds"]]],
      ["Đo lường: kg, lít, m, km", "1 m = 100 cm; 1 km = 1000 m; 1 kg = 1000 g.", [["measure"]]],
      ["Xem giờ và thời gian", "Kim dài ở số 6 là 30 phút (rưỡi).", [["time"]]],
    ],
    3: [
      ["Bảng nhân 6, 7, 8, 9", "Học thuộc bảng nhân giúp tính chia nhanh hơn.", [["mul", [6, 7, 8, 9]]]],
      ["Bảng chia 6, 7, 8, 9", "Muốn chia, nhớ lại phép nhân tương ứng.", [["div", [6, 7, 8, 9]]]],
      ["Nhân số có nhiều chữ số với số có một chữ số", "Nhân lần lượt từ hàng đơn vị, có nhớ thì cộng sang hàng kế tiếp.", [["mulBig"]]],
      ["Phép chia có dư", "Số dư bao giờ cũng bé hơn số chia.", [["divRem"]]],
      ["Các số đến 100 000", "Đặt tính thẳng hàng rồi cộng, trừ từ phải sang trái.", [["big"]]],
      ["Chu vi hình chữ nhật, hình vuông", "Chu vi HCN = (dài + rộng) × 2; hình vuông = cạnh × 4.", [["perim"]]],
      ["Diện tích hình chữ nhật, hình vuông", "Diện tích HCN = dài × rộng; hình vuông = cạnh × cạnh.", [["area"]]],
      ["Tiền Việt Nam", "Tiền thừa = tiền đưa − tiền hàng.", [["money"]]],
      ["Giải toán hai bước", "Đọc kỹ đề, tìm cái đã cho và cái cần tìm, làm từng bước.", [["word", 3], ["word", 2]]],
    ],
    4: [
      ["Số có nhiều chữ số", "Đọc số theo từng lớp: lớp triệu, lớp nghìn, lớp đơn vị.", [["big"]]],
      ["Nhân, chia số có nhiều chữ số", "Đặt tính đúng hàng, nhân chia lần lượt.", [["mulBig"], ["divBig"]]],
      ["Biểu thức có chứa chữ", "Thay chữ bằng số rồi tính giá trị biểu thức.", [["letter"]]],
      ["Trung bình cộng", "Trung bình cộng = tổng các số : số các số hạng.", [["avg"]]],
      ["Phân số", "Phân số có tử số (trên) và mẫu số (dưới), mẫu số khác 0.", [["fracOf"], ["fracCmp"]]],
      ["Cộng phân số cùng mẫu", "Cộng tử số, giữ nguyên mẫu số.", [["fracAdd"]]],
      ["Đo lường và đổi đơn vị", "Đổi về cùng đơn vị trước khi tính.", [["measure"]]],
      ["Chu vi, diện tích", "Nhớ công thức và đơn vị: cm cho chu vi, cm² cho diện tích.", [["perim"], ["area"]]],
    ],
    5: [
      ["Số thập phân", "Phần nguyên ở bên trái dấu phẩy, phần thập phân ở bên phải.", [["dec"]]],
      ["Tỉ số phần trăm", "Tìm p% của a: a × p : 100.", [["pct"]]],
      ["Diện tích tam giác", "Diện tích tam giác = đáy × chiều cao : 2.", [["tri"]]],
      ["Thể tích hình hộp", "Thể tích hình hộp chữ nhật = dài × rộng × cao.", [["vol"]]],
      ["Toán chuyển động đều", "s = v × t; v = s : t; t = s : v.", [["speed"]]],
      ["Phân số và trung bình cộng", "Ôn phân số và trung bình cộng.", [["fracAdd"], ["avg"]]],
      ["Ôn tập tổng hợp", "Ôn tất cả dạng toán lớp 5.", [["dec"], ["pct"], ["tri"], ["vol"], ["speed"]]],
    ],
  };

  // ---------- Kỹ năng sống ----------
  const LIFE_Q = {
    hygiene: [["Khi nào cần rửa tay bằng xà phòng?", "Trước khi ăn và sau khi đi vệ sinh", ["Chỉ khi tay bẩn nhìn thấy được", "Một tuần một lần", "Không cần rửa"]], ["Mỗi lần đánh răng nên kéo dài khoảng:", "2 phút", ["10 giây", "30 phút", "Không cần đánh răng"]], ["Sau khi chơi ngoài sân về, em nên làm gì trước?", "Rửa tay, rửa mặt", ["Ăn bánh ngay", "Lên giường ngủ", "Lau tay vào áo"]]],
    manners: [["Khi được bạn cho mượn bút, em nói:", "Cảm ơn bạn!", ["Đưa đây!", "Không nói gì", "Của tớ rồi"]], ["Em lỡ làm rơi đồ của bạn, em nên:", "Xin lỗi và nhặt lên giúp bạn", ["Bỏ đi luôn", "Cười to", "Đổ lỗi cho bạn khác"]], ["Khi gặp thầy cô, em:", "Lễ phép chào hỏi", ["Quay mặt đi", "Gọi trống không", "Chạy trốn"]]],
    traffic: [["Khi sang đường, em nên đi ở đâu?", "Vạch kẻ đường cho người đi bộ", ["Bất kỳ chỗ nào", "Giữa ngã tư", "Chạy qua thật nhanh"]], ["Đèn giao thông màu nào báo hiệu dừng lại?", "Màu đỏ", ["Màu xanh", "Màu vàng nhấp nháy", "Màu tím"]], ["Ngồi sau xe máy, em phải:", "Đội mũ bảo hiểm và ngồi ngay ngắn", ["Đứng lên cho vui", "Bỏ mũ bảo hiểm", "Vẫy tay ra ngoài"]]],
    stranger: [["Người lạ rủ em đi chơi và cho kẹo, em nên:", "Từ chối và báo ngay cho bố mẹ, thầy cô", ["Đi theo vì được cho kẹo", "Giữ bí mật", "Lên xe người lạ"]], ["Ở nhà một mình có người lạ gõ cửa, em:", "Không mở cửa, gọi điện cho bố mẹ", ["Mở cửa ngay", "Nói nhà không có ai lớn", "Ra ngoài nói chuyện"]], ["Vùng nào trên cơ thể không ai được chạm vào?", "Vùng đồ lót che kín", ["Bàn tay khi bắt tay", "Vai khi khen ngợi", "Tóc khi cắt tóc"]]],
    home: [["Em thấy ổ điện hở dây, em nên:", "Không chạm vào và báo người lớn", ["Thử chạm xem sao", "Cắm thêm đồ", "Lấy nước dội vào"]], ["Dao, kéo sắc nhọn em nên:", "Chỉ dùng khi có người lớn hướng dẫn", ["Mang ra chơi", "Ném cho bạn", "Để trên sàn"]], ["Thấy khói và mùi cháy trong nhà, em:", "Hô to, bò thấp ra ngoài và gọi 114", ["Trốn vào gầm giường", "Mở tủ tìm đồ chơi", "Đi thang máy"]]],
    water: [["Muốn đi bơi, em cần:", "Có người lớn đi cùng và ở chỗ an toàn", ["Đi một mình ra sông", "Rủ bạn nhảy xuống ao", "Bơi lúc trời giông"]], ["Thấy bạn bị đuối nước, em nên:", "Hô to gọi người lớn, ném phao hoặc đồ nổi", ["Nhảy xuống kéo bạn", "Bỏ chạy về nhà", "Đứng xem"]]],
    emotion: [["Khi em thấy rất tức giận, em nên:", "Hít thở sâu, đếm đến 10 rồi nói ra cảm xúc", ["Đánh bạn", "Ném đồ đạc", "La hét thật to"]], ["Em buồn vì bị điểm kém, em có thể:", "Kể với bố mẹ và tìm cách học tốt hơn", ["Giấu bài kiểm tra", "Khóc cả ngày", "Bỏ học"]], ["Bạn đang buồn, em nên:", "Hỏi han và an ủi bạn", ["Trêu bạn", "Kể với cả lớp", "Mặc kệ bạn"]]],
    friends: [["Có bạn mới chuyển đến lớp, em nên:", "Chủ động chào và rủ bạn chơi cùng", ["Trêu bạn mới", "Không chơi với bạn", "Giấu đồ của bạn"]], ["Bị bạn bắt nạt, em nên:", "Nói rõ “Dừng lại!” và báo thầy cô, bố mẹ", ["Im lặng chịu đựng", "Bắt nạt lại bạn khác", "Giấu mọi người"]], ["Hai bạn cùng muốn một đồ chơi, cách tốt nhất là:", "Thay phiên nhau chơi", ["Giành lấy", "Khóc thật to", "Làm hỏng đồ chơi"]]],
    time: [["Thời gian biểu giúp em:", "Biết lúc nào học, lúc nào chơi, lúc nào nghỉ", ["Chơi game cả ngày", "Ngủ muộn hơn", "Không cần làm bài"]], ["Việc nào nên làm trước?", "Làm bài tập rồi mới chơi", ["Chơi đến khuya rồi làm bài", "Bỏ bài tập", "Xem tivi suốt"]], ["Học sinh tiểu học nên ngủ khoảng:", "9–11 tiếng mỗi đêm", ["4 tiếng", "Không cần ngủ", "15 tiếng"]]],
    money: [["Tiết kiệm tiền giúp em:", "Có tiền mua thứ thật sự cần", ["Không bao giờ được tiêu", "Mua thật nhiều kẹo", "Khoe với bạn"]], ["Cách tiết kiệm nước là:", "Khoá vòi khi đánh răng", ["Để vòi chảy suốt", "Tắm thật lâu", "Xả nước cho vui"]], ["Mua đồ dùng học tập, em nên:", "Chọn đồ cần thiết, vừa túi tiền", ["Mua đồ đắt nhất", "Mua thật nhiều thứ không cần", "Mua mỗi ngày một bộ"]]],
    internet: [["Người lạ trên mạng hỏi địa chỉ nhà, em:", "Không trả lời và báo bố mẹ", ["Gửi địa chỉ ngay", "Gửi cả ảnh nhà", "Hẹn gặp người đó"]], ["Mật khẩu tài khoản của em:", "Chỉ em và bố mẹ biết", ["Cho cả lớp biết", "Đăng lên mạng", "Dán ở cổng trường"]], ["Thấy video làm em sợ hãi, em nên:", "Tắt đi và kể với bố mẹ", ["Xem tiếp một mình", "Gửi cho bạn", "Giấu bố mẹ"]]],
    env: [["Vỏ chai nhựa nên bỏ vào:", "Thùng rác tái chế", ["Lòng đường", "Ao hồ", "Gầm bàn"]], ["Việc nào giúp bảo vệ môi trường?", "Trồng cây và tắt điện khi không dùng", ["Vứt rác bừa bãi", "Bẻ cành cây", "Để đèn sáng cả ngày"]]],
    firstaid: [["Bị đứt tay chảy máu nhẹ, em nên:", "Rửa sạch, ấn nhẹ bằng gạc và báo người lớn", ["Để mặc", "Bôi đất vào", "Cho bạn xem rồi chơi tiếp"]], ["Số điện thoại cấp cứu y tế là:", "115", ["113", "114", "116"]], ["Số điện thoại cứu hoả là:", "114", ["113", "115", "112"]]],
    study: [["Khi học bài ở nhà, em nên:", "Ngồi bàn học gọn gàng, tắt tivi", ["Vừa học vừa xem tivi", "Nằm trên giường", "Học trong bóng tối"]], ["Gặp bài khó, em nên:", "Đọc lại đề, thử cách khác rồi hỏi người lớn", ["Bỏ qua luôn", "Chép bài bạn", "Xé vở"]]],
  };
  const LIFE = {
    1: [["Rửa tay, đánh răng đúng cách", "Rửa tay với xà phòng trước khi ăn; đánh răng sáng và tối.", ["hygiene"]], ["Lời chào, cảm ơn, xin lỗi", "Ba câu thần kỳ: chào, cảm ơn, xin lỗi.", ["manners"]], ["An toàn khi đi đường", "Đi bộ trên vỉa hè, sang đường ở vạch kẻ, nắm tay người lớn.", ["traffic"]], ["Không đi theo người lạ", "Không nhận quà, không đi theo người lạ; báo ngay người lớn.", ["stranger"]], ["Hiểu cảm xúc của mình", "Vui, buồn, giận đều bình thường; hãy nói ra với người thân.", ["emotion"]], ["Gọn gàng ngăn nắp", "Đồ dùng xong cất đúng chỗ.", ["time", "study"]]],
    2: [["Tự phục vụ bản thân", "Tự gấp quần áo, chuẩn bị cặp sách mỗi tối.", ["time", "hygiene"]], ["Phòng tránh đuối nước", "Chỉ bơi khi có người lớn; không chơi gần ao hồ.", ["water"]], ["An toàn với điện, lửa, vật sắc", "Không nghịch ổ điện, bật lửa, dao kéo.", ["home"]], ["Biết ơn và lễ phép", "Lễ phép với ông bà, cha mẹ, thầy cô.", ["manners"]], ["Kết bạn, chơi hoà đồng", "Chia sẻ, thay phiên nhau, giúp đỡ bạn.", ["friends"]], ["Khi bị lạc, gặp người lạ", "Thuộc số điện thoại bố mẹ, tìm chú công an hoặc nhân viên.", ["stranger"]]],
    3: [["Quản lý thời gian", "Lập thời gian biểu: học, chơi, nghỉ hợp lý.", ["time"]], ["Phòng tránh xâm hại", "Cơ thể em là của em; nói KHÔNG và kể với người tin cậy.", ["stranger"]], ["Ứng xử khi bị bắt nạt", "Nói dừng lại, tránh xa và báo thầy cô, bố mẹ.", ["friends", "emotion"]], ["Tiết kiệm", "Tiết kiệm tiền, nước, điện.", ["money", "env"]], ["Số khẩn cấp 113, 114, 115", "113 công an, 114 cứu hoả, 115 cấp cứu.", ["firstaid", "home"]], ["Giữ vệ sinh chung", "Không xả rác, giữ lớp học sạch.", ["env", "hygiene"]]],
    4: [["An toàn trên Internet", "Không chia sẻ thông tin cá nhân; gặp điều lạ báo bố mẹ.", ["internet"]], ["Làm chủ cảm xúc", "Hít thở, bình tĩnh, nói ra điều mình nghĩ.", ["emotion"]], ["Làm việc nhóm", "Lắng nghe, chia việc, tôn trọng bạn.", ["friends"]], ["Sơ cứu cơ bản", "Rửa sạch vết thương, báo người lớn, gọi 115 khi cần.", ["firstaid"]], ["Bảo vệ môi trường", "Phân loại rác, trồng cây, tiết kiệm điện.", ["env"]], ["Tự học hiệu quả", "Học ở nơi yên tĩnh, có kế hoạch, hỏi khi chưa hiểu.", ["study", "time"]]],
    5: [["Tự học và đặt mục tiêu", "Đặt mục tiêu nhỏ, làm từng bước, tự kiểm tra.", ["study", "time"]], ["Thoát hiểm khi có cháy", "Bình tĩnh, bò thấp, che mũi, gọi 114, không đi thang máy.", ["home", "firstaid"]], ["An toàn mạng xã hội", "Mật khẩu bí mật, không gặp người quen qua mạng.", ["internet"]], ["Quản lý tiền", "Ghi lại khoản chi, phân biệt muốn và cần.", ["money"]], ["Giải quyết mâu thuẫn", "Bình tĩnh nghe, nói bằng lời, tìm cách cùng có lợi.", ["friends", "emotion"]], ["Sống có trách nhiệm", "Giữ lời hứa, giúp đỡ gia đình và cộng đồng.", ["manners", "env"]]],
  };

  // ---------- Ngân hàng chung Tiếng Việt / Tiếng Anh ----------
  const VI_BANK = [
    ["Từ nào viết đúng chính tả?", "sạch sẽ", ["xạch sẽ", "sạch xẽ"]], ["Từ nào viết đúng chính tả?", "trong trẻo", ["chong chẻo", "trong chẻo"]],
    ["Từ nào viết đúng chính tả?", "lấp lánh", ["nấp lánh", "lấp nánh"]], ["Từ nào viết đúng chính tả?", "nghỉ ngơi", ["ngỉ ngơi", "nghĩ ngơi"]],
    ["Từ nào viết đúng chính tả?", "kiên nhẫn", ["kiêng nhẫn", "kiên nhẩn"]], ["Từ nào viết đúng chính tả?", "gọn gàng", ["ghọn gàng", "gọn ghàng"]],
    ["Từ nào chỉ hoạt động?", "chạy", ["bàn", "xanh", "đẹp"]], ["Từ nào chỉ sự vật?", "cây bút", ["viết", "nhanh", "vui vẻ"]],
    ["Từ nào chỉ đặc điểm?", "cao lớn", ["con mèo", "nhảy", "cái ghế"]], ["Từ trái nghĩa với “nóng”:", "lạnh", ["ấm", "nắng", "mát"]],
    ["Từ trái nghĩa với “nhanh”:", "chậm", ["vội", "lẹ", "gấp"]], ["Từ cùng nghĩa với “siêng năng”:", "chăm chỉ", ["lười biếng", "vui vẻ", "thông minh"]],
    ["Câu nào là câu hỏi?", "Hôm nay em học bài gì?", ["Em thích học Toán.", "Ôi, đẹp quá!", "Hãy ngồi ngay ngắn."]],
    ["Câu nào là câu cảm?", "Bông hoa đẹp quá!", ["Bông hoa màu đỏ.", "Hoa này tên gì?", "Hãy tưới hoa đi."]],
    ["“Mặt trời như quả bóng lửa.” dùng biện pháp gì?", "So sánh", ["Nhân hoá", "Điệp từ", "Không có"]],
    ["“Chị gió hát ru cây.” dùng biện pháp gì?", "Nhân hoá", ["So sánh", "Liệt kê", "Không có"]],
    ["Từ nào viết hoa đúng tên riêng?", "Hà Nội", ["hà Nội", "Hà nội", "hà nội"]], ["Tiếng nào có vần “oang”?", "khoang", ["khang", "khoan", "hoang hoải"]],
  ];
  const EN_BANK = [
    ["🐱 This is a …", "cat", ["dog", "fish", "bird"]], ["🐶 This is a …", "dog", ["cat", "cow", "pig"]], ["🍎 This is an …", "apple", ["banana", "orange", "grape"]],
    ["📚 This is a …", "book", ["pen", "bag", "ruler"]], ["☀️ It is …", "sunny", ["rainy", "windy", "snowy"]], ["👗 This is a …", "dress", ["shirt", "hat", "shoes"]],
    ["🚗 This is a …", "car", ["bus", "bike", "train"]], ["👀 These are my …", "eyes", ["ears", "nose", "hands"]], ["“đỏ” in English is:", "red", ["blue", "green", "yellow"]],
    ["“xin chào” in English is:", "hello", ["goodbye", "thank you", "sorry"]], ["How are you? – I'm …", "fine, thank you", ["six", "a cat", "red"]], ["What's your name? – My name …", "is Mai", ["are Mai", "am Mai", "be Mai"]],
    ["How old are you? – I'm …", "eight years old", ["eight colours", "fine", "a student old"]], ["“thứ Hai” in English is:", "Monday", ["Sunday", "Friday", "Tuesday"]],
  ];

  function langUnits(sub, g) {
    const seen = new Set();
    return (LESSON_DATA[sub][g] || []).filter((l) => !seen.has(l.t) && seen.add(l.t));
  }

  // ---------- API ----------
  const SUBJECTS = {
    math: { label: "Toán", icon: "🔢", color: "#fff1b8" },
    vietnamese: { label: "Tiếng Việt", icon: "📖", color: "#ffe4e7" },
    english: { label: "Tiếng Anh", icon: "🔤", color: "#e3f4ff" },
    life: { label: "Kỹ năng sống", icon: "🌱", color: "#e6f7dc" },
  };

  function units(sub, g) {
    if (sub === "math") return MATH[g].map(([t, tip], i) => ({ id: `math-${g}-${i}`, title: t, tip }));
    if (sub === "life") return LIFE[g].map(([t, tip], i) => ({ id: `life-${g}-${i}`, title: t, tip }));
    return langUnits(sub, g).map((l, i) => ({ id: `${sub}-${g}-${i}`, title: l.t, tip: l.s, visuals: l.v }));
  }

  // Bài học gồm: thẻ ghi nhớ + ví dụ, rồi 8 câu luyện tập.
  function lesson(sub, g, i, n = 8) {
    const u = units(sub, g)[i];
    let qs = [], example = null;
    if (sub === "math") {
      const gens = MATH[g][i][2];
      for (let k = 0; k < n; k++) { const [name, arg] = gens[k % gens.length]; qs.push(G[name](arg)); }
      const [n0, a0] = gens[0]; example = G[n0](a0);
    } else if (sub === "life") {
      const tags = LIFE[g][i][2];
      const pool = shuffle(tags.flatMap((t) => LIFE_Q[t]));
      const extra = shuffle(Object.values(LIFE_Q).flat()).filter((x) => !pool.includes(x));
      qs = [...pool, ...extra].slice(0, Math.min(n, 6)).map(([q, a, w]) => choiceQ(q, a, w, "Hãy nghĩ: cách nào an toàn và lịch sự nhất?"));
    } else {
      const l = langUnits(sub, g)[i];
      const own = l.q.map(([q, a, w]) => choiceQ(q, a, w));
      const bank = (sub === "english" ? EN_BANK : VI_BANK).map(([q, a, w]) => choiceQ(q.replace(/^(\S+) (This|These|It)/, '<span class="big-emoji">$1</span> $2'), a, w));
      qs = [...shuffle(own), ...shuffle(bank)].slice(0, Math.min(n, 6));
    }
    return { ...u, sub, grade: g, index: i, example, questions: qs };
  }

  return { SUBJECTS, units, lesson, readNum };
})();
