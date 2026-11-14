// Thư viện video theo lớp và môn (Toán, Tiếng Việt, Tiếng Anh, Kỹ năng sống).
// Mỗi chủ đề mở trang tìm kiếm YouTube kèm tên kênh/bộ sách uy tín,
// để luôn ra video bài giảng còn hoạt động. Ba mẹ nên xem trước cùng bé.
const libSubjects = {
  math: { label: "Toán", icon: "🔢", color: "#fff1b8", hint: "Kết nối tri thức bài giảng" },
  vietnamese: { label: "Tiếng Việt", icon: "📖", color: "#ffe4e7", hint: "Kết nối tri thức bài giảng" },
  english: { label: "Tiếng Anh", icon: "🔤", color: "#e3f4ff", hint: "Global Success" },
  life: { label: "Kỹ năng sống", icon: "🌱", color: "#e6f7dc", hint: "kỹ năng sống cho học sinh tiểu học" },
};

const libChannels = {
  math: ["VTV7 (Truyền hình Giáo dục Quốc gia)", "VioEdu", "HOCMAI Tiểu học", "Kênh NXB Giáo dục Việt Nam"],
  vietnamese: ["VTV7 (Truyền hình Giáo dục Quốc gia)", "VioEdu", "HOCMAI Tiểu học", "Kênh NXB Giáo dục Việt Nam"],
  english: ["Global Success (NXB Giáo dục Việt Nam)", "Super Simple Songs", "British Council LearnEnglish Kids", "Cocomelon"],
  life: ["VTV7 – Kỹ năng sống", "Sesame Street", "Thời sự VTV – An toàn cho trẻ", "Hội Chữ thập đỏ – Sơ cứu"],
};

const libTopics = {
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

const lib = { subject: "math", lastGrade: null };

function libGrade() {
  try {
    if (typeof state !== "undefined" && state.grade) return state.grade;
  } catch (e) {}
  return 1;
}

function libSearchUrl(subjectKey, grade, topic) {
  const s = libSubjects[subjectKey];
  const prefix = subjectKey === "life" ? "Kỹ năng sống" : `${s.label} lớp ${grade}`;
  const q = `${prefix} ${topic} ${s.hint}`;
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
}

function renderVideoLibrary() {
  const root = document.querySelector("#videoLibrary");
  if (!root) return;
  const grade = libGrade();
  lib.lastGrade = grade;

  const tabs = Object.entries(libSubjects)
    .map(
      ([key, s]) =>
        `<button type="button" class="lib-tab${key === lib.subject ? " is-active" : ""}" data-lib="${key}" style="--tab:${s.color}">
          <span aria-hidden="true">${s.icon}</span>${s.label}
        </button>`
    )
    .join("");

  const s = libSubjects[lib.subject];
  const cards = libTopics[lib.subject][grade]
    .map(
      (topic, i) =>
        `<a class="lib-card" href="${libSearchUrl(lib.subject, grade, topic)}" target="_blank" rel="noopener">
          <span class="lib-num" style="background:${s.color}">${i + 1}</span>
          <span class="lib-text"><strong>${topic}</strong><small>Xem video bài giảng ▶</small></span>
        </a>`
    )
    .join("");

  root.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow">Thư viện video · Lớp ${grade}</p>
        <h2>Video kiến thức theo môn</h2>
      </div>
      <p class="section-note">Chọn lớp ở phía trên, rồi chọn môn bên dưới. Video mở trên YouTube.</p>
    </div>
    <div class="lib-tabs" role="tablist">${tabs}</div>
    <div class="lib-grid">${cards}</div>
    <p class="lib-channels"><strong>Kênh uy tín nên xem:</strong> ${libChannels[lib.subject].join(" · ")}.
      Ba mẹ nên xem trước và ngồi cùng bé khi xem video.</p>`;

  root.querySelectorAll(".lib-tab").forEach((b) =>
    b.addEventListener("click", () => {
      lib.subject = b.dataset.lib;
      renderVideoLibrary();
    })
  );
}

document.addEventListener("click", (e) => {
  if (e.target.closest("#gradePicker")) setTimeout(() => libGrade() !== lib.lastGrade && renderVideoLibrary(), 0);
});
renderVideoLibrary();
