const subjects = {
  math: {
    label: "Toán",
    badge: "Tính nhanh",
    colors: ["#fff1b8", "#dff3ff", "#eafadf", "#ffe4e7"],
  },
  vietnamese: {
    label: "Tiếng Việt",
    badge: "Đọc vui",
    colors: ["#ffe4e7", "#fff1b8", "#e9f8ff", "#eafadf"],
  },
  english: {
    label: "Tiếng Anh",
    badge: "Say hello",
    colors: ["#eafadf", "#e9f8ff", "#fff1b8", "#ffe4e7"],
  },
};

const videoByGrade = {
  math: {
    1: { id: "BRbQqCTVtDc", title: "Toán 1: Làm quen số 6, 7, 8, 9" },
    2: { id: "QRDfZjDY8RI", title: "Toán 2: Phép cộng dạng 35 + 7" },
    3: { id: "f7399YSXn1E", title: "Toán 3: Bảng nhân 7" },
    4: { id: "4kHf8YHOFU8", title: "Toán 4: Phép chia phân số" },
    5: { id: "q3i_R9EjYBo", title: "Toán 5: Tỉ số phần trăm" },
  },
  vietnamese: {
    1: { id: "oyiLHbIvPNU", title: "Tiếng Việt 1: Bảng chữ cái" },
    2: { id: "XV1zBXPOS4c", title: "Tiếng Việt 2: Tôi là học sinh lớp 2" },
    3: { id: "I_yC68RUCgM", title: "Tiếng Việt 3: Biện pháp so sánh" },
    4: { id: "psKjn2-R36s", title: "Tiếng Việt 4: Văn miêu tả cây cối" },
    5: { id: "AdU4mUnIZAI", title: "Tiếng Việt 5: Từ đồng nghĩa" },
  },
  english: {
    1: { id: "uvE985PF_08", title: "English 1: Greetings" },
    2: { id: "2D4TiLslkCo", title: "English 2: Greetings in a day" },
    3: { id: "ZvnD7Yh8UsM", title: "English 3: What's your name?" },
    4: { id: "CNtJb__urDk", title: "English: Room words" },
    5: { id: "w_ysxZqQoXg", title: "English: Conversation practice" },
  },
};

const lessonBank = {
  math: {
    1: [
      lesson("Đếm và cộng nhỏ", "Đếm đồ vật, cộng trong phạm vi 10.", ["1", "2", "3 + 2", "5"], [
        q("Có 3 bút và thêm 2 bút. Có tất cả mấy bút?", ["4", "5", "6", "7"], "5"),
        q("Số nào đứng sau số 8?", ["7", "8", "9", "10"], "9"),
        q("4 + 1 bằng mấy?", ["3", "4", "5", "6"], "5"),
      ]),
      lesson("So sánh số", "Nhìn nhanh để biết số lớn hơn, bé hơn.", ["6", ">", "4", "Đúng"], [
        q("Số nào lớn hơn?", ["3", "5", "2", "1"], "5"),
        q("7 ___ 9. Chọn dấu đúng.", [">", "<", "=", "+"], "<"),
        q("Sắp xếp đúng từ bé đến lớn.", ["1, 2, 3", "3, 2, 1", "2, 1, 3", "1, 3, 2"], "1, 2, 3"),
      ]),
      lesson("Hình quanh em", "Nhận biết hình tròn, vuông, tam giác.", ["○", "□", "△", "☆"], [
        q("Bánh xe giống hình gì?", ["Hình tròn", "Hình vuông", "Hình tam giác", "Hình chữ nhật"], "Hình tròn"),
        q("Cánh diều thường giống hình gì?", ["Tam giác", "Tròn", "Số 8", "Dấu cộng"], "Tam giác"),
        q("Quyển sách giống hình gì nhất?", ["Hình chữ nhật", "Hình tròn", "Hình sao", "Hình bầu dục"], "Hình chữ nhật"),
      ]),
    ],
    2: [
      lesson("Cộng có nhớ", "Tách chục, tách đơn vị để cộng nhẹ nhàng.", ["35", "+", "7", "42"], [
        q("35 + 7 bằng mấy?", ["40", "41", "42", "43"], "42"),
        q("28 + 5 bằng mấy?", ["31", "32", "33", "34"], "33"),
        q("Số 46 gồm mấy chục và mấy đơn vị?", ["4 chục 6 đơn vị", "6 chục 4 đơn vị", "46 chục", "1 chục 46 đơn vị"], "4 chục 6 đơn vị"),
      ]),
      lesson("Bảng nhân 2", "Đếm theo cặp: 2, 4, 6, 8.", ["2", "4", "6", "8"], [
        q("2 x 4 bằng mấy?", ["6", "8", "10", "12"], "8"),
        q("Có 5 đôi tất. Có mấy chiếc tất?", ["5", "8", "10", "12"], "10"),
        q("Số tiếp theo: 2, 4, 6, ...", ["7", "8", "9", "10"], "8"),
      ]),
      lesson("Đo lường nhỏ", "Làm quen lít, ki-lô-gam và xăng-ti-mét.", ["1 lít", "1 kg", "10 cm", "Đo"], [
        q("Nước thường đo bằng gì?", ["Lít", "Ki-lô-gam", "Giờ", "Tuần"], "Lít"),
        q("Quả dưa hấu thường cân bằng gì?", ["Ki-lô-gam", "Lít", "Mét vuông", "Ngày"], "Ki-lô-gam"),
        q("Cái thước học sinh hay có đơn vị gì?", ["cm", "lít", "kg", "độ"], "cm"),
      ]),
    ],
    3: [
      lesson("Nhân chia vui", "Ôn bảng nhân, bảng chia qua tình huống gần gũi.", ["7 x 3", "21", "21 : 7", "3"], [
        q("7 x 3 bằng mấy?", ["18", "20", "21", "24"], "21"),
        q("24 : 6 bằng mấy?", ["3", "4", "5", "6"], "4"),
        q("Có 4 hộp, mỗi hộp 5 viên bi. Có mấy viên?", ["9", "16", "20", "25"], "20"),
      ]),
      lesson("Thời gian", "Xem đồng hồ, đọc giờ và phút.", ["7:00", "7:30", "8:15", "Giờ"], [
        q("7 giờ 30 phút còn gọi là gì?", ["7 rưỡi", "8 rưỡi", "7 giờ kém", "30 giờ"], "7 rưỡi"),
        q("Một giờ có bao nhiêu phút?", ["30", "45", "60", "100"], "60"),
        q("Kim ngắn chỉ số 3, kim dài chỉ số 12 là mấy giờ?", ["3 giờ", "12 giờ", "6 giờ", "9 giờ"], "3 giờ"),
      ]),
      lesson("Chu vi", "Đi một vòng quanh hình để tính chu vi.", ["Cạnh", "+", "Cạnh", "Chu vi"], [
        q("Hình vuông cạnh 4 cm có chu vi là bao nhiêu?", ["8 cm", "12 cm", "16 cm", "20 cm"], "16 cm"),
        q("Chu vi là độ dài của đâu?", ["Đường bao quanh hình", "Màu của hình", "Tên của hình", "Số góc"], "Đường bao quanh hình"),
        q("Tam giác có 3 cạnh: 2 cm, 3 cm, 4 cm. Chu vi là?", ["7 cm", "8 cm", "9 cm", "10 cm"], "9 cm"),
      ]),
    ],
    4: [
      lesson("Phân số", "Hiểu phần bằng nhau của một hình.", ["1/2", "1/3", "2/4", "Bằng nhau"], [
        q("Một chiếc bánh chia 2 phần bằng nhau, lấy 1 phần là phân số nào?", ["1/2", "2/1", "1/3", "2/3"], "1/2"),
        q("Phân số nào bằng 1/2?", ["2/4", "3/4", "1/4", "4/2"], "2/4"),
        q("Tử số của 3/5 là số nào?", ["3", "5", "8", "2"], "3"),
      ]),
      lesson("Góc và đường thẳng", "Nhìn hình để nhận ra góc vuông, góc nhọn.", ["90°", "Góc", "Đường", "Song song"], [
        q("Góc vuông có số đo bao nhiêu độ?", ["45°", "60°", "90°", "180°"], "90°"),
        q("Hai đường không gặp nhau gọi là gì?", ["Song song", "Cắt nhau", "Cong", "Gấp khúc"], "Song song"),
        q("Góc nhỏ hơn góc vuông là gì?", ["Góc nhọn", "Góc tù", "Góc bẹt", "Góc tròn"], "Góc nhọn"),
      ]),
      lesson("Bài toán có lời văn", "Đọc kỹ, gạch ý chính, chọn phép tính.", ["Đọc", "Tóm tắt", "Tính", "Đáp số"], [
        q("Bước đầu khi giải toán có lời văn là gì?", ["Đọc đề", "Viết đáp số ngay", "Vẽ hoa", "Bỏ qua số"], "Đọc đề"),
        q("Nếu bài hỏi 'nhiều hơn', thường nghĩ đến phép gì?", ["Cộng", "Chia", "Xóa", "Đo"], "Cộng"),
        q("Đáp số nên viết ở đâu?", ["Cuối bài", "Đầu bài", "Trong nháp", "Trên tiêu đề"], "Cuối bài"),
      ]),
    ],
    5: [
      lesson("Tỉ số phần trăm", "Hiểu 25% là 25 phần trong 100 phần.", ["25%", "50%", "75%", "100%"], [
        q("50% của 100 là bao nhiêu?", ["25", "50", "75", "100"], "50"),
        q("25% còn có thể viết là phân số nào?", ["1/4", "1/2", "3/4", "1/5"], "1/4"),
        q("100% nghĩa là gì?", ["Toàn bộ", "Một nửa", "Không có gì", "Một phần tư"], "Toàn bộ"),
      ]),
      lesson("Số thập phân", "Đọc, viết và so sánh số có dấu phẩy.", ["0,5", "1,25", "2,0", "So sánh"], [
        q("Số nào lớn hơn?", ["1,2", "1,5", "1,05", "1,02"], "1,5"),
        q("0,5 bằng phân số nào?", ["1/2", "1/3", "1/4", "2/5"], "1/2"),
        q("2,0 bằng số tự nhiên nào?", ["0", "1", "2", "20"], "2"),
      ]),
      lesson("Diện tích", "Tính phần mặt phẳng bên trong hình.", ["Dài", "Rộng", "S", "cm²"], [
        q("Hình chữ nhật dài 6 cm, rộng 3 cm. Diện tích là?", ["9 cm²", "12 cm²", "18 cm²", "36 cm²"], "18 cm²"),
        q("Đơn vị nào dùng cho diện tích?", ["cm²", "cm", "kg", "lít"], "cm²"),
        q("Diện tích hình vuông cạnh 5 cm là?", ["10 cm²", "20 cm²", "25 cm²", "30 cm²"], "25 cm²"),
      ]),
    ],
  },
  vietnamese: {
    1: [
      lesson("Âm và chữ", "Ghép âm thành tiếng thật vui.", ["a", "b", "ba", "bé"], [
        q("Chữ nào có trong tiếng 'bé'?", ["b", "n", "m", "t"], "b"),
        q("Tiếng 'ba' gồm những âm nào?", ["b và a", "c và a", "b và e", "m và a"], "b và a"),
        q("Dấu sắc có trong tiếng nào?", ["bé", "ba", "bo", "bu"], "bé"),
      ]),
      lesson("Đọc tiếng ngắn", "Đọc chậm, rõ tiếng, vui tai.", ["me", "mẹ", "bé", "bò"], [
        q("Tiếng nào có dấu nặng?", ["mẹ", "me", "bé", "bò"], "mẹ"),
        q("Tiếng nào đọc là con vật?", ["bò", "bé", "ba", "me"], "bò"),
        q("Từ nào chỉ người nhỏ tuổi?", ["bé", "bàn", "bút", "bò"], "bé"),
      ]),
      lesson("Câu đầu tiên", "Biết đọc câu ngắn và hiểu ý.", ["Bé", "đi", "học", "."], [
        q("Câu nào viết đúng?", ["Bé đi học.", "bé đi học", "Bé đi học", "bé Đi học."], "Bé đi học."),
        q("Dấu chấm đặt ở đâu?", ["Cuối câu", "Đầu câu", "Giữa chữ", "Trên dòng"], "Cuối câu"),
        q("Từ nào chỉ hành động?", ["đi", "bé", "học sinh", "bút"], "đi"),
      ]),
    ],
    2: [
      lesson("Từ chỉ sự vật", "Gọi tên người, đồ vật, con vật.", ["bạn", "sách", "mèo", "cây"], [
        q("Từ nào chỉ đồ vật?", ["quyển vở", "chạy", "đẹp", "nhanh"], "quyển vở"),
        q("Từ nào chỉ con vật?", ["chim", "bàn", "mưa", "đỏ"], "chim"),
        q("'Cô giáo' là từ chỉ gì?", ["Người", "Đồ vật", "Màu sắc", "Âm thanh"], "Người"),
      ]),
      lesson("Câu giới thiệu", "Nói rõ ai là ai, cái gì là gì.", ["Em", "là", "học sinh", "."], [
        q("Câu nào là câu giới thiệu?", ["Em là học sinh.", "Em chạy nhanh.", "Trời mưa.", "Con mèo ngủ."], "Em là học sinh."),
        q("Từ 'là' thường dùng để làm gì?", ["Giới thiệu", "Đếm số", "Tô màu", "Chia nhóm"], "Giới thiệu"),
        q("Câu cần bắt đầu bằng gì?", ["Chữ hoa", "Chữ thường", "Dấu phẩy", "Số"], "Chữ hoa"),
      ]),
      lesson("Đọc hiểu nhỏ", "Đọc đoạn ngắn và tìm ý chính.", ["Đọc", "Nghĩ", "Chọn", "Nói"], [
        q("Khi đọc xong, bé nên tìm gì?", ["Ý chính", "Màu bìa", "Số trang", "Tên bút"], "Ý chính"),
        q("Câu hỏi 'Ai?' thường hỏi về gì?", ["Người", "Nơi chốn", "Thời gian", "Màu sắc"], "Người"),
        q("Câu hỏi 'Ở đâu?' hỏi về gì?", ["Nơi chốn", "Con số", "Tên gọi", "Cảm xúc"], "Nơi chốn"),
      ]),
    ],
    3: [
      lesson("Từ chỉ đặc điểm", "Tìm từ tả màu sắc, hình dáng, tính nết.", ["xanh", "cao", "hiền", "sáng"], [
        q("Từ nào chỉ đặc điểm?", ["xinh", "bàn", "mèo", "sách"], "xinh"),
        q("Từ nào tả màu sắc?", ["đỏ", "chạy", "ghế", "ngủ"], "đỏ"),
        q("'Bạn Lan chăm chỉ.' Từ chỉ đặc điểm là gì?", ["chăm chỉ", "Bạn", "Lan", "là"], "chăm chỉ"),
      ]),
      lesson("So sánh", "Dùng hình ảnh gần gũi để câu văn hay hơn.", ["như", "là", "tựa", "giống"], [
        q("Từ nào hay dùng trong câu so sánh?", ["như", "và", "nhưng", "vì"], "như"),
        q("'Mặt trời như quả bóng lửa.' Sự vật được so sánh là gì?", ["Mặt trời", "Quả bóng lửa", "Lửa", "Trời"], "Mặt trời"),
        q("Câu nào có so sánh?", ["Mắt bé sáng như sao.", "Bé đọc sách.", "Cây xanh.", "Bạn đi học."], "Mắt bé sáng như sao."),
      ]),
      lesson("Viết đoạn văn", "Viết 4 đến 5 câu có mở, thân, kết.", ["Mở", "Kể", "Tả", "Kết"], [
        q("Đoạn văn thường gồm nhiều gì?", ["Câu", "Dấu cộng", "Số đo", "Hình vẽ"], "Câu"),
        q("Câu mở đoạn giúp làm gì?", ["Giới thiệu ý", "Kết thúc ngay", "Đổi bút", "Đếm chữ"], "Giới thiệu ý"),
        q("Viết xong nên làm gì?", ["Đọc lại", "Xóa hết", "Gấp vở", "Bỏ dấu chấm"], "Đọc lại"),
      ]),
    ],
    4: [
      lesson("Danh từ và động từ", "Phân biệt sự vật và hoạt động.", ["hoa", "chạy", "sách", "đọc"], [
        q("Từ nào là động từ?", ["nhảy", "bàn", "mây", "hoa"], "nhảy"),
        q("Từ nào là danh từ?", ["quyển sách", "đẹp", "bay", "nhanh"], "quyển sách"),
        q("'Em đọc truyện.' Động từ là gì?", ["đọc", "Em", "truyện", "câu"], "đọc"),
      ]),
      lesson("Miêu tả cây cối", "Quan sát thân, lá, hoa, quả rồi viết.", ["Thân", "Lá", "Hoa", "Quả"], [
        q("Khi tả cây, nên quan sát gì?", ["Thân, lá, hoa", "Bài toán", "Đồng hồ", "Dấu cộng"], "Thân, lá, hoa"),
        q("Từ nào tả màu lá?", ["xanh mướt", "chạy nhanh", "nói nhỏ", "rất xa"], "xanh mướt"),
        q("Bài văn tả cây thường có mấy phần?", ["3 phần", "1 phần", "5 phần", "10 phần"], "3 phần"),
      ]),
      lesson("Dấu câu", "Dùng dấu phẩy, dấu chấm, dấu hỏi đúng chỗ.", [",", ".", "?", "!"], [
        q("Câu hỏi kết thúc bằng dấu gì?", ["?", ".", ",", ":"], "?"),
        q("Dấu phẩy giúp làm gì?", ["Ngắt ý ngắn", "Kết thúc bài", "Đổi chữ hoa", "Tạo số"], "Ngắt ý ngắn"),
        q("Câu cảm thán thường có dấu gì?", ["!", ".", ",", "-"], "!"),
      ]),
    ],
    5: [
      lesson("Từ đồng nghĩa", "Nhiều từ khác nhau nhưng nghĩa gần nhau.", ["chăm", "siêng", "hiền", "tốt"], [
        q("'Siêng năng' gần nghĩa với từ nào?", ["chăm chỉ", "lười", "ồn ào", "xa lạ"], "chăm chỉ"),
        q("Cặp nào là đồng nghĩa?", ["to - lớn", "đen - trắng", "cao - thấp", "đi - đứng"], "to - lớn"),
        q("Dùng từ đồng nghĩa giúp câu văn thế nào?", ["Hay hơn", "Sai hơn", "Ngắn mất nghĩa", "Không cần dấu"], "Hay hơn"),
      ]),
      lesson("Liên kết câu", "Nối câu bằng từ ngữ lặp, thay thế, nối.", ["và", "nhưng", "em ấy", "vì vậy"], [
        q("Từ nào dùng để nối ý?", ["vì vậy", "bàn", "xanh", "bút"], "vì vậy"),
        q("Thay 'Lan' bằng 'bạn ấy' là cách gì?", ["Thay thế từ ngữ", "Đếm số", "Tả màu", "So sánh số"], "Thay thế từ ngữ"),
        q("Các câu trong đoạn cần điều gì?", ["Liên kết", "Rời rạc", "Viết hoa hết", "Không dấu"], "Liên kết"),
      ]),
      lesson("Lập dàn ý", "Sắp xếp ý trước khi viết bài.", ["Mở bài", "Thân bài", "Kết bài", "Ý hay"], [
        q("Dàn ý giúp làm gì?", ["Sắp xếp ý", "Tính diện tích", "Đọc giờ", "Đổi màu bút"], "Sắp xếp ý"),
        q("Phần thân bài thường làm gì?", ["Nêu ý chính chi tiết", "Chỉ chào hỏi", "Viết đáp số", "Ghi ngày tháng"], "Nêu ý chính chi tiết"),
        q("Sau khi lập dàn ý, bé có thể làm gì?", ["Viết bài", "Bỏ đề", "Xóa vở", "Ngừng đọc"], "Viết bài"),
      ]),
    ],
  },
  english: {
    1: [
      lesson("Hello!", "Chào hỏi bằng tiếng Anh thật tự tin.", ["Hello", "Hi", "Bye", "Thanks"], [
        q("Khi gặp bạn, bé nói gì?", ["Hello", "Red", "Book", "Seven"], "Hello"),
        q("'Bye' nghĩa là gì?", ["Tạm biệt", "Xin chào", "Cảm ơn", "Màu đỏ"], "Tạm biệt"),
        q("'Thank you' nghĩa là gì?", ["Cảm ơn", "Con mèo", "Số một", "Bút chì"], "Cảm ơn"),
      ]),
      lesson("Colors", "Gọi tên màu sắc quanh em.", ["red", "blue", "green", "yellow"], [
        q("'Red' là màu gì?", ["Đỏ", "Xanh lá", "Vàng", "Tím"], "Đỏ"),
        q("'Blue' là màu gì?", ["Xanh dương", "Đỏ", "Đen", "Trắng"], "Xanh dương"),
        q("'Yellow' là màu gì?", ["Vàng", "Xanh", "Nâu", "Hồng"], "Vàng"),
      ]),
      lesson("Numbers 1-10", "Đếm số nhỏ bằng tiếng Anh.", ["one", "two", "three", "ten"], [
        q("'Three' là số mấy?", ["1", "2", "3", "4"], "3"),
        q("Số 5 trong tiếng Anh là gì?", ["five", "four", "six", "seven"], "five"),
        q("'Ten' là số mấy?", ["8", "9", "10", "11"], "10"),
      ]),
    ],
    2: [
      lesson("My family", "Gọi tên người thân bằng tiếng Anh.", ["mom", "dad", "sister", "brother"], [
        q("'Mother' nghĩa là gì?", ["Mẹ", "Bố", "Anh", "Em"], "Mẹ"),
        q("'Brother' là ai?", ["Anh/em trai", "Chị gái", "Cô giáo", "Bạn"], "Anh/em trai"),
        q("'Family' nghĩa là gì?", ["Gia đình", "Màu sắc", "Trường học", "Bữa ăn"], "Gia đình"),
      ]),
      lesson("School things", "Nhận biết đồ dùng học tập.", ["book", "pen", "bag", "ruler"], [
        q("'Book' là gì?", ["Sách", "Bút", "Cặp", "Thước"], "Sách"),
        q("'Pen' là gì?", ["Bút", "Ghế", "Bàn", "Cửa"], "Bút"),
        q("'Ruler' là gì?", ["Thước", "Tẩy", "Bảng", "Cốc"], "Thước"),
      ]),
      lesson("Feelings", "Nói cảm xúc ngắn gọn.", ["happy", "sad", "fine", "tired"], [
        q("'Happy' nghĩa là gì?", ["Vui", "Buồn", "Mệt", "Đói"], "Vui"),
        q("Trả lời 'How are you?' bằng câu nào?", ["I'm fine.", "It's red.", "One book.", "Goodbye."], "I'm fine."),
        q("'Sad' nghĩa là gì?", ["Buồn", "Vui", "Nhanh", "Cao"], "Buồn"),
      ]),
    ],
    3: [
      lesson("Introduce yourself", "Nói tên và tuổi của mình.", ["My name is", "I am", "years old", "Nice"], [
        q("Câu nào nói tên?", ["My name is An.", "I like red.", "It is a bag.", "Open the door."], "My name is An."),
        q("'I am nine' nghĩa là gì?", ["Mình 9 tuổi", "Mình có 9 bút", "Mình màu xanh", "Mình đi ngủ"], "Mình 9 tuổi"),
        q("Khi gặp bạn mới, có thể nói gì?", ["Nice to meet you.", "Close your book.", "It is rainy.", "Ten pens."], "Nice to meet you."),
      ]),
      lesson("Animals", "Tên các con vật quen thuộc.", ["cat", "dog", "bird", "fish"], [
        q("'Cat' là con gì?", ["Mèo", "Chó", "Cá", "Chim"], "Mèo"),
        q("'Bird' là con gì?", ["Chim", "Cá", "Mèo", "Gà"], "Chim"),
        q("Con chó trong tiếng Anh là gì?", ["dog", "cat", "fish", "duck"], "dog"),
      ]),
      lesson("Actions", "Nói hành động đơn giản.", ["run", "jump", "read", "sing"], [
        q("'Read' nghĩa là gì?", ["Đọc", "Nhảy", "Chạy", "Hát"], "Đọc"),
        q("'Sing' nghĩa là gì?", ["Hát", "Viết", "Ngủ", "Ăn"], "Hát"),
        q("Câu nào đúng?", ["I can jump.", "I jump can.", "Can jump I.", "Jump I can."], "I can jump."),
      ]),
    ],
    4: [
      lesson("Daily routines", "Kể việc làm hằng ngày.", ["wake up", "eat", "study", "sleep"], [
        q("'Wake up' nghĩa là gì?", ["Thức dậy", "Đi ngủ", "Ăn trưa", "Đọc sách"], "Thức dậy"),
        q("'I go to school' nghĩa là gì?", ["Mình đi học", "Mình đi ngủ", "Mình nấu ăn", "Mình bơi"], "Mình đi học"),
        q("Từ nào là hoạt động?", ["study", "blue", "seven", "desk"], "study"),
      ]),
      lesson("Places", "Nơi chốn quanh bé.", ["school", "park", "home", "library"], [
        q("'Library' là đâu?", ["Thư viện", "Công viên", "Nhà bếp", "Sân chơi"], "Thư viện"),
        q("'Home' nghĩa là gì?", ["Nhà", "Trường", "Lớp", "Chợ"], "Nhà"),
        q("Câu nào hỏi nơi chốn?", ["Where is the park?", "What color is it?", "How old are you?", "Do you like milk?"], "Where is the park?"),
      ]),
      lesson("Food", "Nói món ăn và sở thích.", ["rice", "milk", "apple", "bread"], [
        q("'Apple' là gì?", ["Táo", "Sữa", "Bánh mì", "Cơm"], "Táo"),
        q("Câu nào nói sở thích?", ["I like milk.", "It is a pen.", "She is ten.", "Open it."], "I like milk."),
        q("'Bread' nghĩa là gì?", ["Bánh mì", "Nước", "Chuối", "Cá"], "Bánh mì"),
      ]),
    ],
    5: [
      lesson("Reading short stories", "Đọc đoạn ngắn và chọn ý chính.", ["title", "main idea", "who", "where"], [
        q("'Main idea' nghĩa là gì?", ["Ý chính", "Tên riêng", "Dấu chấm", "Màu sắc"], "Ý chính"),
        q("Câu hỏi 'Who?' hỏi về gì?", ["Người", "Nơi chốn", "Thời gian", "Màu sắc"], "Người"),
        q("Câu hỏi 'Where?' hỏi về gì?", ["Nơi chốn", "Con số", "Cảm xúc", "Tên món ăn"], "Nơi chốn"),
      ]),
      lesson("Past simple", "Làm quen kể việc đã xảy ra.", ["played", "visited", "went", "was"], [
        q("'Yesterday, I played football.' nói về khi nào?", ["Hôm qua", "Hôm nay", "Ngày mai", "Mỗi sáng"], "Hôm qua"),
        q("Quá khứ của 'go' là gì?", ["went", "goed", "goes", "going"], "went"),
        q("'Was' dùng cho câu nào?", ["She was happy.", "They was happy.", "I are happy.", "We is happy."], "She was happy."),
      ]),
      lesson("Helpful sentences", "Nói câu lịch sự và rõ ý.", ["May I", "Can you", "please", "because"], [
        q("Từ nào giúp câu lịch sự hơn?", ["please", "fast", "red", "five"], "please"),
        q("'Can you help me?' nghĩa là gì?", ["Bạn giúp mình nhé?", "Bạn màu gì?", "Bạn ở đâu?", "Bạn mấy tuổi?"], "Bạn giúp mình nhé?"),
        q("Từ 'because' dùng để làm gì?", ["Nêu lý do", "Đếm số", "Chào hỏi", "Tô màu"], "Nêu lý do"),
      ]),
    ],
  },
};

const extraLessonBank = {
  math: {
    1: [
      lesson("Trừ trong phạm vi 10", "Bớt đi một phần và đếm số còn lại.", ["8 - 3", "5", "10 - 4", "6"], [
        q("Lan có 8 viên bi, cho bạn 3 viên. Lan còn mấy viên?", ["4", "5", "6", "7"], "5"),
        q("10 - 4 bằng mấy?", ["5", "6", "7", "8"], "6"),
        q("Phép tính nào có kết quả là 3?", ["5 - 2", "6 - 2", "7 - 3", "4 - 0"], "5 - 2"),
      ]),
      lesson("Số 11 đến 20", "Đếm, đọc và so sánh các số lớn hơn 10.", ["11", "15", "18", "20"], [
        q("Số nào đứng sau 14?", ["13", "14", "15", "16"], "15"),
        q("Số 19 gồm mấy chục và mấy đơn vị?", ["1 chục 9 đơn vị", "9 chục 1 đơn vị", "19 chục", "1 đơn vị 9 chục"], "1 chục 9 đơn vị"),
        q("Số nào lớn nhất?", ["12", "17", "20", "15"], "20"),
      ]),
    ],
    2: [
      lesson("Trừ có nhớ", "Mượn một chục để trừ các số hai chữ số.", ["42 - 8", "34", "51 - 6", "45"], [
        q("42 - 8 bằng mấy?", ["32", "34", "36", "38"], "34"),
        q("51 - 6 bằng mấy?", ["43", "44", "45", "46"], "45"),
        q("Có 63 quả cam, bán 9 quả. Còn lại bao nhiêu?", ["52", "53", "54", "55"], "54"),
      ]),
      lesson("Bảng nhân 5", "Đếm theo 5: 5, 10, 15, 20.", ["5", "10", "15", "20"], [
        q("5 x 4 bằng mấy?", ["15", "20", "25", "30"], "20"),
        q("Có 6 bàn, mỗi bàn 5 bạn. Có tất cả mấy bạn?", ["25", "30", "35", "40"], "30"),
        q("Số tiếp theo: 5, 10, 15, ...", ["16", "18", "20", "25"], "20"),
      ]),
    ],
    3: [
      lesson("Làm quen phân số", "Nhận biết một phần trong các phần bằng nhau.", ["1/2", "1/4", "3/4", "Phần"], [
        q("Một hình chia 4 phần bằng nhau, tô 1 phần là phân số nào?", ["1/2", "1/3", "1/4", "4/1"], "1/4"),
        q("Phân số 3/4 có mẫu số là số nào?", ["3", "4", "7", "1"], "4"),
        q("Phân số nào chỉ một nửa?", ["1/2", "1/3", "2/3", "3/4"], "1/2"),
      ]),
      lesson("Tiền Việt Nam", "Đọc giá tiền và cộng trừ số tiền đơn giản.", ["1.000đ", "2.000đ", "5.000đ", "10.000đ"], [
        q("2.000đ + 3.000đ bằng bao nhiêu?", ["4.000đ", "5.000đ", "6.000đ", "7.000đ"], "5.000đ"),
        q("Mua bút 7.000đ, đưa 10.000đ. Được trả lại bao nhiêu?", ["2.000đ", "3.000đ", "4.000đ", "5.000đ"], "3.000đ"),
        q("Tờ tiền nào có giá trị lớn nhất?", ["1.000đ", "2.000đ", "5.000đ", "10.000đ"], "10.000đ"),
      ]),
    ],
    4: [
      lesson("Cộng trừ phân số cùng mẫu", "Giữ nguyên mẫu số, cộng hoặc trừ tử số.", ["1/5", "+", "2/5", "3/5"], [
        q("1/5 + 2/5 bằng bao nhiêu?", ["2/5", "3/5", "3/10", "1/10"], "3/5"),
        q("4/7 - 1/7 bằng bao nhiêu?", ["3/7", "5/7", "3/14", "4/6"], "3/7"),
        q("Khi cộng hai phân số cùng mẫu, ta giữ nguyên gì?", ["Mẫu số", "Tử số", "Dấu phẩy", "Đơn vị đo"], "Mẫu số"),
      ]),
      lesson("Diện tích hình chữ nhật", "Lấy chiều dài nhân chiều rộng.", ["Dài", "Rộng", "S", "m²"], [
        q("Hình chữ nhật dài 8 cm, rộng 3 cm. Diện tích là?", ["11 cm²", "22 cm²", "24 cm²", "30 cm²"], "24 cm²"),
        q("Công thức diện tích hình chữ nhật là gì?", ["Dài x rộng", "Dài + rộng", "Dài - rộng", "Dài : rộng"], "Dài x rộng"),
        q("Đơn vị nào dùng để đo diện tích?", ["cm²", "cm", "kg", "lít"], "cm²"),
      ]),
    ],
    5: [
      lesson("Nhân chia số thập phân", "Tính cẩn thận với dấu phẩy.", ["1,2 x 3", "3,6", "4,8 : 2", "2,4"], [
        q("1,2 x 3 bằng bao nhiêu?", ["2,6", "3,2", "3,6", "4,2"], "3,6"),
        q("4,8 : 2 bằng bao nhiêu?", ["2,2", "2,4", "2,6", "3,4"], "2,4"),
        q("0,5 x 10 bằng bao nhiêu?", ["0,05", "0,5", "5", "50"], "5"),
      ]),
      lesson("Thể tích hình hộp", "Đếm phần không gian bên trong hình.", ["Dài", "Rộng", "Cao", "V"], [
        q("Hình hộp dài 4 cm, rộng 3 cm, cao 2 cm. Thể tích là?", ["9 cm³", "12 cm³", "24 cm³", "36 cm³"], "24 cm³"),
        q("Đơn vị nào dùng cho thể tích?", ["cm³", "cm²", "cm", "kg"], "cm³"),
        q("Công thức thể tích hình hộp chữ nhật là gì?", ["Dài x rộng x cao", "Dài + rộng + cao", "Dài x rộng", "Dài : rộng"], "Dài x rộng x cao"),
      ]),
    ],
  },
  vietnamese: {
    1: [
      lesson("Vần quen thuộc", "Ghép âm và vần để đọc tiếng mới.", ["an", "ang", "at", "am"], [
        q("Tiếng nào có vần 'an'?", ["bàn", "bút", "mèo", "sách"], "bàn"),
        q("Tiếng 'cam' có vần nào?", ["am", "an", "ang", "at"], "am"),
        q("Ghép 'b' với 'an' và dấu huyền được tiếng nào?", ["bàn", "ban", "bán", "bạn"], "bàn"),
      ]),
      lesson("Nghe và viết đúng", "Nghe tiếng ngắn rồi chọn chữ phù hợp.", ["cá", "lá", "má", "bé"], [
        q("Từ nào chỉ con vật?", ["cá", "lá", "má", "bé"], "cá"),
        q("Từ nào có dấu sắc?", ["lá", "la", "là", "lạ"], "lá"),
        q("Chữ đầu trong tiếng 'bé' là gì?", ["b", "e", "m", "c"], "b"),
      ]),
    ],
    2: [
      lesson("Từ chỉ hoạt động", "Nhận biết việc ai đó đang làm.", ["đọc", "viết", "chạy", "hát"], [
        q("Từ nào chỉ hoạt động?", ["viết", "bàn", "đỏ", "cao"], "viết"),
        q("Trong câu 'Bé đọc sách.', từ chỉ hoạt động là gì?", ["Bé", "đọc", "sách", "câu"], "đọc"),
        q("Từ nào không chỉ hoạt động?", ["nhảy", "ngủ", "cười", "cái ghế"], "cái ghế"),
      ]),
      lesson("Câu hỏi", "Biết dùng dấu hỏi và từ để hỏi.", ["Ai?", "Ở đâu?", "Khi nào?", "Vì sao?"], [
        q("Câu hỏi kết thúc bằng dấu gì?", ["?", ".", ",", "!"], "?"),
        q("Từ hỏi nào hỏi về người?", ["Ai", "Ở đâu", "Khi nào", "Bao nhiêu"], "Ai"),
        q("Câu nào là câu hỏi?", ["Bạn tên là gì?", "Em đi học.", "Trời nắng.", "Con mèo ngủ."], "Bạn tên là gì?"),
      ]),
    ],
    3: [
      lesson("Câu Ai làm gì?", "Tìm người hoặc vật và hoạt động trong câu.", ["Ai?", "làm gì?", "Bạn", "đọc"], [
        q("Câu nào thuộc kiểu Ai làm gì?", ["Lan tưới cây.", "Lan rất vui.", "Lan là học sinh.", "Cây xanh quá!"], "Lan tưới cây."),
        q("Trong câu 'Mẹ nấu cơm.', bộ phận trả lời 'Ai?' là gì?", ["Mẹ", "nấu", "cơm", "nấu cơm"], "Mẹ"),
        q("Bộ phận 'làm gì?' trong câu 'Chim hót líu lo.' là gì?", ["Chim", "hót líu lo", "líu lo", "câu"], "hót líu lo"),
      ]),
      lesson("Từ trái nghĩa", "Tìm cặp từ có nghĩa ngược nhau.", ["cao - thấp", "nóng - lạnh", "nhanh - chậm", "sáng - tối"], [
        q("Từ trái nghĩa với 'cao' là gì?", ["thấp", "to", "rộng", "dài"], "thấp"),
        q("Cặp nào là trái nghĩa?", ["nóng - lạnh", "đẹp - xinh", "to - lớn", "chăm - siêng"], "nóng - lạnh"),
        q("Từ trái nghĩa với 'nhanh' là gì?", ["chậm", "sáng", "vui", "gần"], "chậm"),
      ]),
    ],
    4: [
      lesson("Tính từ", "Tìm từ tả đặc điểm của sự vật.", ["đẹp", "cao", "dịu", "xanh"], [
        q("Từ nào là tính từ?", ["rực rỡ", "quyển vở", "đi học", "cái bàn"], "rực rỡ"),
        q("Trong câu 'Bông hoa thơm ngát.', tính từ là gì?", ["Bông hoa", "thơm ngát", "câu", "là"], "thơm ngát"),
        q("Tính từ thường dùng để làm gì?", ["Tả đặc điểm", "Đếm số", "Gọi tên người", "Chỉ thời gian"], "Tả đặc điểm"),
      ]),
      lesson("Kể chuyện theo tranh", "Sắp xếp sự việc theo đúng thứ tự.", ["Mở đầu", "Diễn biến", "Kết thúc", "Bài học"], [
        q("Khi kể chuyện, cần chú ý điều gì?", ["Thứ tự sự việc", "Chỉ màu tranh", "Số trang vở", "Tên cây bút"], "Thứ tự sự việc"),
        q("Phần đầu câu chuyện thường làm gì?", ["Giới thiệu nhân vật", "Nêu đáp số", "Viết bảng nhân", "Kết thúc luôn"], "Giới thiệu nhân vật"),
        q("Sau khi kể xong, bé có thể nêu gì?", ["Bài học", "Đơn vị đo", "Phép chia", "Số thập phân"], "Bài học"),
      ]),
    ],
    5: [
      lesson("Câu ghép", "Nối hai vế câu có quan hệ với nhau.", ["vì...nên", "nếu...thì", "tuy...nhưng", "và"], [
        q("Câu nào là câu ghép?", ["Trời mưa nên em mang áo mưa.", "Em học bài.", "Bông hoa đẹp.", "Bạn Lan chăm chỉ."], "Trời mưa nên em mang áo mưa."),
        q("Cặp quan hệ từ nào chỉ nguyên nhân - kết quả?", ["vì...nên", "nếu...thì", "tuy...nhưng", "không những...mà còn"], "vì...nên"),
        q("Trong câu ghép, mỗi vế câu thường có gì?", ["Chủ ngữ và vị ngữ", "Chỉ một dấu phẩy", "Một chữ cái", "Một số đo"], "Chủ ngữ và vị ngữ"),
      ]),
      lesson("Tả người", "Quan sát ngoại hình, hoạt động và tính cách.", ["Dáng", "Mắt", "Nụ cười", "Tính nết"], [
        q("Khi tả người, nên quan sát gì?", ["Ngoại hình và hoạt động", "Chỉ số nhà", "Chỉ màu bút", "Chỉ phép tính"], "Ngoại hình và hoạt động"),
        q("Từ nào tả tính cách?", ["hiền hậu", "cao lớn", "áo xanh", "mái tóc"], "hiền hậu"),
        q("Bài văn tả người thường có mấy phần?", ["3 phần", "2 phần", "4 phần", "1 phần"], "3 phần"),
      ]),
    ],
  },
  english: {
    1: [
      lesson("Classroom commands", "Nghe lệnh ngắn trong lớp học.", ["stand up", "sit down", "open", "close"], [
        q("'Stand up' nghĩa là gì?", ["Đứng lên", "Ngồi xuống", "Mở sách", "Đóng cửa"], "Đứng lên"),
        q("'Sit down' nghĩa là gì?", ["Ngồi xuống", "Đứng lên", "Chạy", "Hát"], "Ngồi xuống"),
        q("Câu nào nghĩa là mở sách?", ["Open your book.", "Close your book.", "Stand up.", "Goodbye."], "Open your book."),
      ]),
      lesson("Toys", "Gọi tên đồ chơi quen thuộc.", ["ball", "kite", "car", "doll"], [
        q("'Ball' là gì?", ["Quả bóng", "Cái diều", "Xe đồ chơi", "Búp bê"], "Quả bóng"),
        q("'Kite' là gì?", ["Cái diều", "Quả bóng", "Con mèo", "Cái bàn"], "Cái diều"),
        q("Búp bê trong tiếng Anh là gì?", ["doll", "ball", "car", "book"], "doll"),
      ]),
    ],
    2: [
      lesson("Body parts", "Gọi tên các bộ phận cơ thể.", ["head", "hand", "leg", "eye"], [
        q("'Head' nghĩa là gì?", ["Đầu", "Tay", "Chân", "Mắt"], "Đầu"),
        q("'Eye' là gì?", ["Mắt", "Mũi", "Miệng", "Tai"], "Mắt"),
        q("Tay trong tiếng Anh là gì?", ["hand", "leg", "head", "foot"], "hand"),
      ]),
      lesson("Weather", "Nói thời tiết hôm nay.", ["sunny", "rainy", "windy", "cloudy"], [
        q("'Sunny' nghĩa là gì?", ["Có nắng", "Có mưa", "Có gió", "Có tuyết"], "Có nắng"),
        q("'Rainy' nghĩa là gì?", ["Có mưa", "Có nắng", "Có mây", "Nóng"], "Có mưa"),
        q("Câu nào hỏi thời tiết?", ["How's the weather?", "What's your name?", "How old are you?", "Where is my pen?"], "How's the weather?"),
      ]),
    ],
    3: [
      lesson("Hobbies", "Nói sở thích của mình.", ["draw", "dance", "swim", "read"], [
        q("'I like drawing.' nghĩa là gì?", ["Mình thích vẽ", "Mình thích bơi", "Mình thích hát", "Mình thích chạy"], "Mình thích vẽ"),
        q("'Swim' nghĩa là gì?", ["Bơi", "Vẽ", "Đọc", "Nhảy"], "Bơi"),
        q("Câu nào nói sở thích?", ["I like reading.", "It is a desk.", "She is nine.", "Close the door."], "I like reading."),
      ]),
      lesson("Rooms", "Tên các phòng trong nhà.", ["bedroom", "kitchen", "bathroom", "living room"], [
        q("'Kitchen' là phòng nào?", ["Nhà bếp", "Phòng ngủ", "Phòng tắm", "Phòng khách"], "Nhà bếp"),
        q("'Bedroom' nghĩa là gì?", ["Phòng ngủ", "Nhà bếp", "Sân trường", "Thư viện"], "Phòng ngủ"),
        q("Câu nào hỏi vị trí?", ["Where is the bathroom?", "What color is it?", "Do you like rice?", "How old are you?"], "Where is the bathroom?"),
      ]),
    ],
    4: [
      lesson("Time", "Hỏi và nói giờ đơn giản.", ["o'clock", "half past", "time", "late"], [
        q("'What time is it?' nghĩa là gì?", ["Mấy giờ rồi?", "Bạn tên gì?", "Bạn ở đâu?", "Bạn thích gì?"], "Mấy giờ rồi?"),
        q("'Seven o'clock' là mấy giờ?", ["7 giờ", "6 giờ", "8 giờ", "7 rưỡi"], "7 giờ"),
        q("'Half past six' nghĩa là gì?", ["6 giờ rưỡi", "6 giờ đúng", "5 giờ rưỡi", "7 giờ"], "6 giờ rưỡi"),
      ]),
      lesson("Directions", "Làm quen chỉ đường ngắn.", ["left", "right", "straight", "turn"], [
        q("'Left' nghĩa là gì?", ["Bên trái", "Bên phải", "Đi thẳng", "Quay lại"], "Bên trái"),
        q("'Go straight' nghĩa là gì?", ["Đi thẳng", "Rẽ trái", "Rẽ phải", "Dừng lại"], "Đi thẳng"),
        q("'Turn right' nghĩa là gì?", ["Rẽ phải", "Rẽ trái", "Đi thẳng", "Ngồi xuống"], "Rẽ phải"),
      ]),
    ],
    5: [
      lesson("Future plans", "Nói dự định gần bằng 'going to'.", ["going to", "tomorrow", "visit", "play"], [
        q("'I am going to visit grandma.' nghĩa là gì?", ["Mình sẽ thăm bà", "Mình đang đọc sách", "Mình thích sữa", "Mình đã đi học"], "Mình sẽ thăm bà"),
        q("Từ nào chỉ ngày mai?", ["tomorrow", "yesterday", "now", "last week"], "tomorrow"),
        q("Câu nào nói dự định?", ["I am going to play football.", "I played football.", "I play every day.", "This is a ball."], "I am going to play football."),
      ]),
      lesson("Comparatives", "So sánh hơn bằng từ ngắn.", ["bigger", "smaller", "taller", "faster"], [
        q("'Taller' nghĩa là gì?", ["Cao hơn", "Thấp hơn", "Nhanh hơn", "Nhỏ hơn"], "Cao hơn"),
        q("Từ so sánh hơn của 'big' là gì?", ["bigger", "biggest", "bigly", "more big"], "bigger"),
        q("Câu nào đúng?", ["An elephant is bigger than a cat.", "A cat bigger an elephant.", "An elephant bigger than.", "Bigger cat elephant."], "An elephant is bigger than a cat."),
      ]),
    ],
  },
};

Object.entries(extraLessonBank).forEach(([subjectKey, gradeGroups]) => {
  Object.entries(gradeGroups).forEach(([grade, lessons]) => {
    lessonBank[subjectKey][Number(grade)].push(...lessons);
  });
});

const sgkRoadmapBank = {
  math: {
    1: {
      focus: "Số trong phạm vi 20, cộng trừ nhỏ, hình quen thuộc.",
      outcome: "Đếm đúng, tính bước đầu, nhận biết hình quanh em.",
      route: ["Làm quen số", "Cộng trừ trong 10", "Số 11-20", "Hình học trực quan", "Ôn luyện"],
    },
    2: {
      focus: "Số đến 100, cộng trừ có nhớ, bảng nhân chia đầu tiên.",
      outcome: "Tính nhẩm tốt hơn, đọc đo lường đơn giản.",
      route: ["Số đến 100", "Cộng trừ có nhớ", "Bảng nhân 2 và 5", "Đo lường", "Bài toán lời văn"],
    },
    3: {
      focus: "Nhân chia, thời gian, chu vi, tiền Việt Nam, phân số mở đầu.",
      outcome: "Giải bài toán nhiều bước ngắn và vận dụng đời sống.",
      route: ["Bảng nhân chia", "Thời gian", "Chu vi", "Tiền Việt Nam", "Phân số mở đầu"],
    },
    4: {
      focus: "Phân số, góc, đường thẳng, diện tích và giải toán có lời văn.",
      outcome: "Biết phân tích đề, tính toán với phân số cơ bản.",
      route: ["Phân số", "Góc và đường thẳng", "Cộng trừ phân số", "Diện tích", "Toán lời văn"],
    },
    5: {
      focus: "Số thập phân, phần trăm, diện tích, thể tích và ôn chuyển cấp.",
      outcome: "Tự tin tính toán, đọc dữ liệu và giải toán tổng hợp.",
      route: ["Số thập phân", "Tỉ số phần trăm", "Diện tích", "Thể tích", "Ôn tổng hợp"],
    },
  },
  vietnamese: {
    1: {
      focus: "Âm, vần, tiếng, câu ngắn và nghe viết đơn giản.",
      outcome: "Đọc rõ tiếng, hiểu câu ngắn, viết đúng chữ quen thuộc.",
      route: ["Âm và chữ", "Vần quen thuộc", "Đọc tiếng", "Câu ngắn", "Nghe viết"],
    },
    2: {
      focus: "Từ chỉ sự vật, hoạt động, câu hỏi và đọc hiểu đoạn ngắn.",
      outcome: "Đọc hiểu tốt hơn, đặt câu rõ ý.",
      route: ["Từ chỉ sự vật", "Câu giới thiệu", "Từ chỉ hoạt động", "Câu hỏi", "Đọc hiểu"],
    },
    3: {
      focus: "Từ chỉ đặc điểm, so sánh, câu Ai làm gì, viết đoạn văn.",
      outcome: "Viết đoạn 4-5 câu có ý chính và dùng từ sinh động.",
      route: ["Từ chỉ đặc điểm", "So sánh", "Câu Ai làm gì", "Từ trái nghĩa", "Viết đoạn"],
    },
    4: {
      focus: "Danh từ, động từ, tính từ, dấu câu, kể chuyện và miêu tả.",
      outcome: "Biết quan sát, kể và tả theo bố cục rõ ràng.",
      route: ["Danh từ động từ", "Tính từ", "Dấu câu", "Tả cây", "Kể chuyện"],
    },
    5: {
      focus: "Từ đồng nghĩa, câu ghép, liên kết câu, lập dàn ý, tả người.",
      outcome: "Viết bài có bố cục, câu văn liên kết và dùng từ chọn lọc.",
      route: ["Từ đồng nghĩa", "Liên kết câu", "Câu ghép", "Lập dàn ý", "Tả người"],
    },
  },
  english: {
    1: {
      focus: "Chào hỏi, màu sắc, số đếm, lệnh lớp học và đồ chơi.",
      outcome: "Nghe nói từ/câu rất ngắn về bản thân và lớp học.",
      route: ["Hello", "Colors", "Numbers", "Classroom commands", "Toys"],
    },
    2: {
      focus: "Gia đình, đồ dùng học tập, cơ thể, cảm xúc và thời tiết.",
      outcome: "Nói câu mẫu ngắn về người thân và đồ vật quen thuộc.",
      route: ["Family", "School things", "Feelings", "Body parts", "Weather"],
    },
    3: {
      focus: "Giới thiệu bản thân, động vật, hành động, sở thích và phòng trong nhà.",
      outcome: "Hỏi đáp ngắn, đọc hiểu câu đơn giản.",
      route: ["Introduce", "Animals", "Actions", "Hobbies", "Rooms"],
    },
    4: {
      focus: "Thói quen, nơi chốn, món ăn, thời gian và chỉ đường.",
      outcome: "Nói về lịch sinh hoạt, hỏi giờ và hỏi đường ngắn.",
      route: ["Daily routines", "Places", "Food", "Time", "Directions"],
    },
    5: {
      focus: "Đọc truyện ngắn, quá khứ đơn, câu lịch sự, dự định và so sánh.",
      outcome: "Đọc đoạn ngắn, nói dự định và so sánh đơn giản.",
      route: ["Reading", "Past simple", "Helpful sentences", "Future plans", "Comparatives"],
    },
  },
};

const DAILY_PRACTICE_GOAL = 20;
const WEEKLY_PRACTICE_DAYS = 5;
const WEEKLY_PRACTICE_GOAL = DAILY_PRACTICE_GOAL * WEEKLY_PRACTICE_DAYS;
const practiceSubjects = ["math", "vietnamese", "english"];

const stories = [
  {
    title: "Cây tre trăm đốt",
    desc: "Một chuyện cổ tích Việt Nam quen thuộc.",
    id: "YesGjcgVvbM",
  },
  {
    title: "Tấm Cám",
    desc: "Câu chuyện về lòng hiền lành và nghị lực.",
    id: "yk1no2SBQf4",
  },
  {
    title: "Sự tích cây vú sữa",
    desc: "Một câu chuyện ấm áp về tình mẹ.",
    id: "UyaH6vJfZJs",
  },
];

const riddles = [
  {
    text: "Cái gì càng lau càng sáng, bé dùng để soi mặt?",
    answers: ["Gương", "Bút", "Cốc", "Thước"],
    correct: "Gương",
  },
  {
    text: "Quả gì tên nghe như đang ngủ, ruột đỏ lấm tấm hạt đen?",
    answers: ["Dưa hấu", "Táo", "Cam", "Mít"],
    correct: "Dưa hấu",
  },
  {
    text: "Con gì gáy ò ó o mỗi sáng?",
    answers: ["Gà trống", "Mèo", "Cá", "Bướm"],
    correct: "Gà trống",
  },
  {
    text: "Cái gì có trang, có chữ, bé mở ra để đọc?",
    answers: ["Quyển sách", "Đôi dép", "Cái thìa", "Bóng bay"],
    correct: "Quyển sách",
  },
  {
    text: "Số nào đứng giữa 4 và 6?",
    answers: ["5", "3", "7", "9"],
    correct: "5",
  },
];

const missions = [
  "Đọc to 3 từ mới rồi tự khen mình một câu.",
  "Tìm quanh phòng 4 đồ vật có dạng hình chữ nhật.",
  "Nói 'hello' với một người trong nhà.",
  "Viết một câu ngắn về hôm nay.",
  "Đếm ngược từ 20 về 10 thật chậm.",
  "Kể tên 5 màu em nhìn thấy.",
];

const colorGames = [
  {
    prompt: "Chọn ô màu xanh dương.",
    answer: "Xanh dương",
    options: [
      { label: "Xanh dương", color: "#6bb8ff" },
      { label: "Vàng", color: "#ffd166" },
      { label: "Hồng", color: "#ffb3b3" },
      { label: "Xanh lá", color: "#83c45e" },
    ],
  },
  {
    prompt: "Chọn ô màu vàng.",
    answer: "Vàng",
    options: [
      { label: "Đỏ", color: "#ff7a7a" },
      { label: "Vàng", color: "#ffd166" },
      { label: "Tím", color: "#9a7bd8" },
      { label: "Xanh lá", color: "#83c45e" },
    ],
  },
  {
    prompt: "Chọn ô màu xanh lá.",
    answer: "Xanh lá",
    options: [
      { label: "Xanh lá", color: "#83c45e" },
      { label: "Cam", color: "#ffb15e" },
      { label: "Xanh dương", color: "#6bb8ff" },
      { label: "Hồng", color: "#ffb3b3" },
    ],
  },
];

const newsArticles = [
  {
    icon: "Đọc",
    tag: "Tin học tập",
    time: "3 phút đọc",
    title: "Đọc 10 phút mỗi ngày giúp bé nhớ từ tốt hơn",
    text: "Ba mẹ có thể chọn một đoạn ngắn, đọc cùng bé và hỏi một câu thật dễ sau khi đọc.",
  },
  {
    icon: "Toán",
    tag: "Hoạt động",
    time: "2 phút đọc",
    title: "Học toán bằng đồ vật quanh nhà",
    text: "Nắp chai, bút màu, hạt đậu có thể biến thành giáo cụ để bé đếm, cộng, trừ và so sánh.",
  },
  {
    icon: "Anh",
    tag: "Tiếng Anh",
    time: "2 phút đọc",
    title: "Mỗi ngày 3 từ tiếng Anh là vừa đủ",
    text: "Học ít nhưng đều giúp bé bớt áp lực. Hãy gắn từ mới với tranh, màu sắc hoặc đồ vật thật.",
  },
  {
    icon: "Vui",
    tag: "Thói quen",
    time: "4 phút đọc",
    title: "Nghỉ ngắn giúp giờ học vui hơn",
    text: "Sau 15 đến 20 phút tập trung, bé nên đứng dậy, uống nước hoặc chơi một mini game nhẹ.",
  },
];

const studyTips = [
  {
    title: "Học theo phiên ngắn",
    text: "15 phút học, 5 phút nghỉ. Nhịp này hợp với nhiều bé tiểu học.",
  },
  {
    title: "Khen đúng việc",
    text: "Thay vì chỉ nói giỏi quá, hãy khen: con đọc rõ, con thử lại rất tốt.",
  },
  {
    title: "Dùng câu hỏi nhỏ",
    text: "Một bài học chỉ cần 2 đến 3 câu hỏi vui để bé nhớ ý chính.",
  },
  {
    title: "Đổi vai giáo viên",
    text: "Cho bé giảng lại bằng lời của mình. Khi dạy lại, bé nhớ lâu hơn.",
  },
];

const boothThemePacks = [
  { key: "boys", label: "Con trai", note: "Mạnh mẽ, khám phá" },
  { key: "girls", label: "Con gái", note: "Dịu dàng, lấp lánh" },
  { key: "family", label: "Gia đình", note: "Ấm áp, yêu thương" },
  { key: "pink", label: "Nơ hồng", note: "Tim, nơ, kẹo ngọt" },
];

const boothFrames = [
  { key: "superhero", pack: "boys", label: "Siêu nhân", className: "frame-superhero", previewClass: "preview-superhero" },
  { key: "space", pack: "boys", label: "Phi hành gia", className: "frame-space", previewClass: "preview-space" },
  { key: "robot", pack: "boys", label: "Robot vui", className: "frame-robot", previewClass: "preview-robot" },
  { key: "racing", pack: "boys", label: "Xe đua", className: "frame-racing", previewClass: "preview-racing" },
  { key: "football", pack: "boys", label: "Bóng đá", className: "frame-football", previewClass: "preview-football" },
  { key: "dino", pack: "boys", label: "Khủng long", className: "frame-dino", previewClass: "preview-dino" },
  { key: "princess", pack: "girls", label: "Công chúa", className: "frame-princess", previewClass: "preview-princess" },
  { key: "kitty", pack: "girls", label: "Mèo nơ hồng", className: "frame-kitty", previewClass: "preview-kitty" },
  { key: "fairy", pack: "girls", label: "Nàng tiên", className: "frame-fairy", previewClass: "preview-fairy" },
  { key: "mermaid", pack: "girls", label: "Nàng tiên cá", className: "frame-mermaid", previewClass: "preview-mermaid" },
  { key: "rainbow", pack: "girls", label: "Cầu vồng", className: "frame-rainbow", previewClass: "preview-rainbow" },
  { key: "stars", pack: "girls", label: "Ngôi sao", className: "frame-stars", previewClass: "preview-stars" },
  { key: "family", pack: "family", label: "Gia đình vui nhất", className: "frame-family", previewClass: "preview-family" },
  { key: "love", pack: "family", label: "Yêu cả nhà", className: "frame-love", previewClass: "preview-love" },
  { key: "home", pack: "family", label: "Mái nhà yêu", className: "frame-home", previewClass: "preview-home" },
  { key: "birthday", pack: "family", label: "Sinh nhật vui", className: "frame-birthday", previewClass: "preview-birthday" },
  { key: "picnic", pack: "family", label: "Dã ngoại", className: "frame-picnic", previewClass: "preview-picnic" },
  { key: "garden", pack: "family", label: "Vườn xanh", className: "frame-garden", previewClass: "preview-garden" },
  { key: "notebook", pack: "family", label: "Vở ô ly", className: "frame-notebook", previewClass: "preview-notebook" },
  { key: "clean", pack: "family", label: "Khung trắng", className: "frame-clean", previewClass: "preview-clean" },
  { key: "pinkBow", pack: "pink", label: "Nơ chấm bi", className: "frame-pink-bow", previewClass: "preview-pink-bow" },
  { key: "pinkPlaid", pack: "pink", label: "Caro hồng", className: "frame-pink-plaid", previewClass: "preview-pink-plaid" },
  { key: "pinkRibbon", pack: "pink", label: "Ruy băng ngọt", className: "frame-pink-ribbon", previewClass: "preview-pink-ribbon" },
  { key: "pinkLove", pack: "pink", label: "Love cupcake", className: "frame-pink-love", previewClass: "preview-pink-love" },
];

const state = {
  grade: 1,
  subject: "math",
  lessonIndex: 0,
  quizIndex: 0,
  stars: Number(localStorage.getItem("vh-stars") || 0),
  done: Number(localStorage.getItem("vh-done") || 0),
  memoryOpen: [],
  memoryDone: new Set(),
  memoryBusy: false,
  riddleIndex: 0,
  colorIndex: 0,
  practiceMode: "daily",
  practiceSubject: "math",
  boothThemeKey: "boys",
  boothFrameKey: "superhero",
};

const dom = {
  gradePicker: document.querySelector("#gradePicker"),
  subjectPicker: document.querySelector("#subjectPicker"),
  lessonList: document.querySelector("#lessonList"),
  levelLabel: document.querySelector("#levelLabel"),
  subjectTitle: document.querySelector("#subjectTitle"),
  lessonKind: document.querySelector("#lessonKind"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonSummary: document.querySelector("#lessonSummary"),
  visualStrip: document.querySelector("#visualStrip"),
  sgkRoadmap: document.querySelector("#sgkRoadmap"),
  gradeRoute: document.querySelector("#gradeRoute"),
  quizBadge: document.querySelector("#quizBadge"),
  quizProgress: document.querySelector("#quizProgress"),
  quizQuestion: document.querySelector("#quizQuestion"),
  answerGrid: document.querySelector("#answerGrid"),
  feedback: document.querySelector("#feedback"),
  lessonVideo: document.querySelector("#lessonVideo"),
  videoTitle: document.querySelector("#videoTitle"),
  videoLink: document.querySelector("#videoLink"),
  videoLessonList: document.querySelector("#videoLessonList"),
  exerciseTitle: document.querySelector("#exerciseTitle"),
  exerciseList: document.querySelector("#exerciseList"),
  practicePlanTabs: document.querySelector("#practicePlanTabs"),
  practiceSubjectCards: document.querySelector("#practiceSubjectCards"),
  weeklyPlanBoard: document.querySelector("#weeklyPlanBoard"),
  practiceModeLabel: document.querySelector("#practiceModeLabel"),
  practiceProgressText: document.querySelector("#practiceProgressText"),
  practiceQuestion: document.querySelector("#practiceQuestion"),
  practiceAnswerGrid: document.querySelector("#practiceAnswerGrid"),
  practiceFeedback: document.querySelector("#practiceFeedback"),
  certificateArea: document.querySelector("#certificateArea"),
  printCertificateBtn: document.querySelector("#printCertificateBtn"),
  nextLessonBtn: document.querySelector("#nextLessonBtn"),
  starCount: document.querySelector("#starCount"),
  doneCount: document.querySelector("#doneCount"),
  memoryGrid: document.querySelector("#memoryGrid"),
  memoryFeedback: document.querySelector("#memoryFeedback"),
  resetMemoryBtn: document.querySelector("#resetMemoryBtn"),
  riddleText: document.querySelector("#riddleText"),
  riddleAnswers: document.querySelector("#riddleAnswers"),
  riddleFeedback: document.querySelector("#riddleFeedback"),
  newRiddleBtn: document.querySelector("#newRiddleBtn"),
  missionText: document.querySelector("#missionText"),
  missionBtn: document.querySelector("#missionBtn"),
  playTabs: document.querySelector("#playTabs"),
  colorPrompt: document.querySelector("#colorPrompt"),
  colorOptions: document.querySelector("#colorOptions"),
  colorFeedback: document.querySelector("#colorFeedback"),
  newColorBtn: document.querySelector("#newColorBtn"),
  boothThemeTabs: document.querySelector("#boothThemeTabs"),
  boothFrameList: document.querySelector("#boothFrameList"),
  boothFrameOverlay: document.querySelector("#boothFrameOverlay"),
  boothFrameName: document.querySelector("#boothFrameName"),
  captureSuccess: document.querySelector("#captureSuccess"),
  boothVideo: document.querySelector("#boothVideo"),
  boothStillPreview: document.querySelector("#boothStillPreview"),
  boothCanvas: document.querySelector("#boothCanvas"),
  cameraPlaceholder: document.querySelector("#cameraPlaceholder"),
  photoPreview: document.querySelector("#photoPreview"),
  emptyPhoto: document.querySelector("#emptyPhoto"),
  startCameraBtn: document.querySelector("#startCameraBtn"),
  capturePhotoBtn: document.querySelector("#capturePhotoBtn"),
  retakePhotoBtn: document.querySelector("#retakePhotoBtn"),
  mobilePhotoInput: document.querySelector("#mobilePhotoInput"),
  downloadPhotoLink: document.querySelector("#downloadPhotoLink"),
  boothStatus: document.querySelector("#boothStatus"),
  storyGrid: document.querySelector("#storyGrid"),
  newsGrid: document.querySelector("#newsGrid"),
  tipsGrid: document.querySelector("#tipsGrid"),
  toast: document.querySelector("#toast"),
};

let boothStream = null;

function lesson(title, summary, visuals, quiz) {
  return { title, summary, visuals, quiz };
}

function q(question, answers, correct) {
  return { question, answers, correct };
}

function youtubeEmbed(id) {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

function youtubeWatch(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}

function youtubeSearch(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function renderGradePicker() {
  dom.gradePicker.innerHTML = "";
  [1, 2, 3, 4, 5].forEach((grade) => {
    const button = document.createElement("button");
    button.className = `grade-btn${state.grade === grade ? " is-active" : ""}`;
    button.type = "button";
    button.textContent = `Lớp ${grade}`;
    button.addEventListener("click", () => {
      state.grade = grade;
      state.lessonIndex = 0;
      state.quizIndex = 0;
      renderLearning();
      showToast(`Đã chọn lớp ${grade}.`);
    });
    dom.gradePicker.append(button);
  });
}

function renderSubjectPicker() {
  dom.subjectPicker.innerHTML = "";
  Object.entries(subjects).forEach(([key, subject]) => {
    const button = document.createElement("button");
    button.className = `subject-btn${state.subject === key ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.subject = key;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", state.subject === key ? "true" : "false");
    button.textContent = subject.label;
    button.addEventListener("click", () => {
      state.subject = key;
      state.practiceSubject = key;
      state.lessonIndex = 0;
      state.quizIndex = 0;
      renderLearning();
      showToast(`Môn ${subject.label} đã sẵn sàng.`);
    });
    dom.subjectPicker.append(button);
  });
}

function currentLessons() {
  return lessonBank[state.subject][state.grade];
}

function currentLesson() {
  return currentLessons()[state.lessonIndex];
}

function renderLessonList() {
  dom.lessonList.innerHTML = "";
  currentLessons().forEach((item, index) => {
    const button = document.createElement("button");
    button.className = `lesson-item${index === state.lessonIndex ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${item.title}</strong><span>${item.summary}</span>`;
    button.addEventListener("click", () => {
      state.lessonIndex = index;
      state.quizIndex = 0;
      renderLearning();
    });
    dom.lessonList.append(button);
  });
}

function renderLesson() {
  const lessonData = currentLesson();
  const subject = subjects[state.subject];
  const video = videoByGrade[state.subject][state.grade];

  dom.levelLabel.textContent = `Lớp ${state.grade}`;
  dom.subjectTitle.textContent = subject.label;
  dom.lessonKind.textContent = subject.badge;
  dom.lessonTitle.textContent = lessonData.title;
  dom.lessonSummary.textContent = lessonData.summary;
  dom.quizBadge.textContent = subject.badge;

  dom.visualStrip.innerHTML = "";
  lessonData.visuals.forEach((item, index) => {
    const tile = document.createElement("div");
    tile.className = "visual-tile";
    tile.style.background = subject.colors[index % subject.colors.length];
    tile.textContent = item;
    dom.visualStrip.append(tile);
  });

  dom.lessonVideo.src = youtubeEmbed(video.id);
  dom.videoTitle.textContent = `${lessonData.title} - ${video.title}`;
  dom.videoLink.href = youtubeWatch(video.id);
  renderQuiz();
}

function renderSgkRoadmap() {
  if (!dom.sgkRoadmap || !dom.gradeRoute) return;

  const subject = subjects[state.subject];
  dom.sgkRoadmap.innerHTML = "";
  Object.entries(sgkRoadmapBank[state.subject]).forEach(([grade, item]) => {
    const gradeNumber = Number(grade);
    const button = document.createElement("button");
    button.className = `roadmap-card${gradeNumber === state.grade ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span>Lớp ${gradeNumber}</span>
      <strong>${item.focus}</strong>
      <em>${item.outcome}</em>
    `;
    button.addEventListener("click", () => {
      state.grade = gradeNumber;
      state.lessonIndex = 0;
      state.quizIndex = 0;
      renderLearning();
    });
    dom.sgkRoadmap.append(button);
  });

  const current = sgkRoadmapBank[state.subject][state.grade];
  dom.gradeRoute.innerHTML = `
    <div class="route-head">
      <div>
        <p class="eyebrow">${subject.label} lớp ${state.grade}</p>
        <h3>Lộ trình trong năm</h3>
      </div>
      <span>${current.route.length} chặng</span>
    </div>
    <div class="route-steps">
      ${current.route
        .map((step, index) => `<span class="${index === state.lessonIndex ? "is-current" : ""}">${index + 1}. ${step}</span>`)
        .join("")}
    </div>
  `;
}

function renderVideoLessonList() {
  if (!dom.videoLessonList) return;

  const subject = subjects[state.subject];
  const baseVideo = videoByGrade[state.subject][state.grade];
  dom.videoLessonList.innerHTML = "";
  currentLessons().forEach((lessonData, index) => {
    const item = document.createElement("article");
    item.className = `video-lesson-item${index === state.lessonIndex ? " is-active" : ""}`;
    const query = `${subject.label} lớp ${state.grade} ${lessonData.title} bài giảng`;
    item.innerHTML = `
      <button type="button">
        <span>Video ${index + 1}</span>
        <strong>${lessonData.title}</strong>
        <em>${baseVideo.title}</em>
      </button>
      <a href="${youtubeSearch(query)}" target="_blank" rel="noreferrer">Tìm thêm</a>
    `;
    item.querySelector("button").addEventListener("click", () => {
      state.lessonIndex = index;
      state.quizIndex = 0;
      renderLearning();
    });
    dom.videoLessonList.append(item);
  });
}

function renderExerciseList() {
  if (!dom.exerciseList) return;

  const lessonData = currentLesson();
  if (dom.exerciseTitle) dom.exerciseTitle.textContent = lessonData.title;
  dom.exerciseList.innerHTML = "";
  lessonData.quiz.forEach((quiz, index) => {
    const item = document.createElement("article");
    item.className = `exercise-item${index === state.quizIndex ? " is-current" : ""}`;
    item.setAttribute("role", "button");
    item.tabIndex = 0;
    item.innerHTML = `
      <span>Câu ${index + 1}</span>
      <strong>${quiz.question}</strong>
      <em>${quiz.answers.length} lựa chọn</em>
    `;
    const chooseExercise = () => {
      state.quizIndex = index;
      renderQuiz();
      renderExerciseList();
    };
    item.addEventListener("click", chooseExercise);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        chooseExercise();
      }
    });
    dom.exerciseList.append(item);
  });
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function weekKey(date = new Date()) {
  const monday = new Date(date);
  const dayIndex = (monday.getDay() + 6) % 7;
  monday.setDate(monday.getDate() - dayIndex);
  return localDateKey(monday);
}

function practiceStorageKey(mode = state.practiceMode) {
  const gradePart = `grade-${state.grade}`;
  return mode === "weekly"
    ? `vh-practice-week-${weekKey()}-${gradePart}`
    : `vh-practice-day-${localDateKey()}-${gradePart}`;
}

function emptyPracticeRecord(mode = state.practiceMode) {
  const subjects = {};
  practiceSubjects.forEach((subjectKey) => {
    subjects[subjectKey] = {
      answered: 0,
      correct: 0,
      certificateAt: "",
    };
  });

  return {
    mode,
    grade: state.grade,
    key: mode === "weekly" ? weekKey() : localDateKey(),
    subjects,
  };
}

function getPracticeRecord(mode = state.practiceMode) {
  const key = practiceStorageKey(mode);
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "null");
    if (parsed?.subjects) {
      practiceSubjects.forEach((subjectKey) => {
        if (!parsed.subjects[subjectKey]) {
          parsed.subjects[subjectKey] = { answered: 0, correct: 0, certificateAt: "" };
        }
      });
      return parsed;
    }
  } catch (error) {
    // If storage is corrupted, start a fresh record.
  }
  return emptyPracticeRecord(mode);
}

function savePracticeRecord(record, mode = state.practiceMode) {
  localStorage.setItem(practiceStorageKey(mode), JSON.stringify(record));
}

function practiceGoal(mode = state.practiceMode) {
  return mode === "weekly" ? WEEKLY_PRACTICE_GOAL : DAILY_PRACTICE_GOAL;
}

function practiceTitle(mode = state.practiceMode) {
  return mode === "weekly" ? "Bài tập tuần" : "Bài tập ngày";
}

function buildPracticeQuestions(subjectKey, grade, count) {
  const source = [];
  lessonBank[subjectKey][grade].forEach((lessonData) => {
    lessonData.quiz.forEach((quiz) => {
      source.push({
        ...quiz,
        lessonTitle: lessonData.title,
      });
    });
  });

  return Array.from({ length: count }, (_, index) => ({
    ...source[index % source.length],
    round: index + 1,
  }));
}

function renderPracticePlanTabs() {
  if (!dom.practicePlanTabs) return;

  [...dom.practicePlanTabs.querySelectorAll("[data-practice-mode]")].forEach((button) => {
    button.classList.toggle("is-active", button.dataset.practiceMode === state.practiceMode);
  });
}

function renderPracticeSubjectCards() {
  if (!dom.practiceSubjectCards) return;

  const record = getPracticeRecord(state.practiceMode);
  const goal = practiceGoal();
  dom.practiceSubjectCards.innerHTML = "";

  practiceSubjects.forEach((subjectKey) => {
    const subject = subjects[subjectKey];
    const progress = record.subjects[subjectKey];
    const answered = Math.min(progress.answered, goal);
    const done = answered >= goal;
    const percent = Math.round((answered / goal) * 100);
    const button = document.createElement("button");
    button.className = `practice-subject-card${subjectKey === state.practiceSubject ? " is-active" : ""}${done ? " is-done" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span>${subject.label}</span>
      <strong>${answered}/${goal} câu</strong>
      <em>${progress.correct} câu đúng</em>
      <i><b style="width: ${percent}%"></b></i>
    `;
    button.addEventListener("click", () => {
      state.practiceSubject = subjectKey;
      state.subject = subjectKey;
      state.lessonIndex = 0;
      state.quizIndex = 0;
      renderLearning();
    });
    dom.practiceSubjectCards.append(button);
  });
}

function renderWeeklyPlanBoard() {
  if (!dom.weeklyPlanBoard) return;

  const subject = subjects[state.practiceSubject];

  if (state.practiceMode === "daily") {
    const record = getPracticeRecord("daily");
    const progress = record.subjects[state.practiceSubject];
    dom.weeklyPlanBoard.innerHTML = `
      <div class="weekly-plan-head">
        <div>
          <p class="eyebrow">${subject.label} lớp ${state.grade}</p>
          <h3>Mục tiêu hôm nay</h3>
        </div>
        <span>${Math.min(progress.answered, DAILY_PRACTICE_GOAL)}/${DAILY_PRACTICE_GOAL} câu</span>
      </div>
      <div class="weekly-day-grid daily-goal-grid">
        ${practiceSubjects.map((subjectKey) => {
          const item = record.subjects[subjectKey];
          const answered = Math.min(item.answered, DAILY_PRACTICE_GOAL);
          const done = answered >= DAILY_PRACTICE_GOAL;
          const current = subjectKey === state.practiceSubject;
          return `<span class="${done ? "is-done" : current ? "is-current" : ""}">${subjects[subjectKey].label}<strong>${answered}/${DAILY_PRACTICE_GOAL} câu</strong></span>`;
        }).join("")}
      </div>
    `;
    return;
  }

  const record = getPracticeRecord("weekly");
  const progress = record.subjects[state.practiceSubject];
  const completedDays = Math.min(WEEKLY_PRACTICE_DAYS, Math.floor(progress.answered / DAILY_PRACTICE_GOAL));
  dom.weeklyPlanBoard.innerHTML = `
    <div class="weekly-plan-head">
      <div>
        <p class="eyebrow">${subject.label} lớp ${state.grade}</p>
        <h3>Lộ trình tuần này</h3>
      </div>
      <span>${Math.min(progress.answered, WEEKLY_PRACTICE_GOAL)}/${WEEKLY_PRACTICE_GOAL} câu</span>
    </div>
    <div class="weekly-day-grid">
      ${Array.from({ length: WEEKLY_PRACTICE_DAYS }, (_, index) => {
        const dayDone = index < completedDays;
        const current = index === completedDays && progress.answered < WEEKLY_PRACTICE_GOAL;
        return `<span class="${dayDone ? "is-done" : current ? "is-current" : ""}">Buổi ${index + 1}<strong>${dayDone ? "Đã xong" : "20 câu"}</strong></span>`;
      }).join("")}
    </div>
  `;
}

function renderPracticeQuestion() {
  if (!dom.practiceQuestion || !dom.practiceAnswerGrid) return;

  const mode = state.practiceMode;
  const record = getPracticeRecord(mode);
  const subjectProgress = record.subjects[state.practiceSubject];
  const goal = practiceGoal(mode);
  const answered = Math.min(subjectProgress.answered, goal);
  const subject = subjects[state.practiceSubject];

  if (dom.practiceModeLabel) dom.practiceModeLabel.textContent = `${practiceTitle(mode)} - ${subject.label}`;
  if (dom.practiceProgressText) dom.practiceProgressText.textContent = `${answered}/${goal}`;
  dom.practiceFeedback.textContent = "";
  dom.practiceAnswerGrid.innerHTML = "";

  if (answered >= goal) {
    dom.practiceQuestion.textContent = `${subject.label} đã hoàn thành mục tiêu ${goal} câu. Nhận bằng khen nhé!`;
    renderCertificate();
    return;
  }

  const questions = buildPracticeQuestions(state.practiceSubject, state.grade, goal);
  const current = questions[answered];
  dom.practiceQuestion.textContent = `Câu ${answered + 1}: ${current.question}`;

  current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkPracticeAnswer(button, answer, current.correct));
    dom.practiceAnswerGrid.append(button);
  });

  renderCertificate();
}

function checkPracticeAnswer(button, answer, correct) {
  const buttons = [...dom.practiceAnswerGrid.querySelectorAll("button")];
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === correct) item.classList.add("is-correct");
  });

  const mode = state.practiceMode;
  const record = getPracticeRecord(mode);
  const subjectProgress = record.subjects[state.practiceSubject];
  const isCorrect = answer === correct;
  subjectProgress.answered += 1;
  if (isCorrect) {
    subjectProgress.correct += 1;
    button.classList.add("is-correct");
    dom.practiceFeedback.textContent = "Đúng rồi, thêm một bước tiến!";
  } else {
    button.classList.add("is-wrong");
    dom.practiceFeedback.textContent = `Chưa đúng. Đáp án là: ${correct}`;
  }

  if (subjectProgress.answered >= practiceGoal(mode) && !subjectProgress.certificateAt) {
    subjectProgress.certificateAt = new Date().toLocaleString("vi-VN");
    state.stars += mode === "weekly" ? 10 : 3;
    state.done += 1;
    saveProgress();
    showToast("Bằng khen online đã mở!");
  }
  savePracticeRecord(record, mode);

  if (mode === "daily") updateWeeklyFromDailyAnswer(isCorrect);

  window.setTimeout(() => {
    renderPracticeDashboard();
  }, 850);
}

function updateWeeklyFromDailyAnswer(isCorrect) {
  const weeklyRecord = getPracticeRecord("weekly");
  const weeklySubject = weeklyRecord.subjects[state.practiceSubject];
  if (weeklySubject.answered < WEEKLY_PRACTICE_GOAL) {
    weeklySubject.answered += 1;
    if (isCorrect) weeklySubject.correct += 1;
    if (weeklySubject.answered >= WEEKLY_PRACTICE_GOAL && !weeklySubject.certificateAt) {
      weeklySubject.certificateAt = new Date().toLocaleString("vi-VN");
    }
    savePracticeRecord(weeklyRecord, "weekly");
  }
}

function renderCertificate() {
  if (!dom.certificateArea) return;

  const record = getPracticeRecord(state.practiceMode);
  const progress = record.subjects[state.practiceSubject];
  const goal = practiceGoal();
  const subject = subjects[state.practiceSubject];
  const completed = progress.answered >= goal;

  if (!completed) {
    dom.certificateArea.className = "certificate-card";
    dom.certificateArea.innerHTML = `
      <p class="eyebrow">Bằng khen online</p>
      <h3>Còn ${goal - progress.answered} câu nữa.</h3>
      <p>Hoàn thành ${goal} câu ${subject.label} để nhận bằng khen.</p>
    `;
    if (dom.printCertificateBtn) dom.printCertificateBtn.disabled = true;
    return;
  }

  dom.certificateArea.className = "certificate-card is-earned";
  dom.certificateArea.innerHTML = `
    <p class="eyebrow">Bằng khen online</p>
    <h3>Trao tặng bé chăm học</h3>
    <p>Đã hoàn thành ${goal} câu ${subject.label} lớp ${state.grade}.</p>
    <strong>${progress.correct}/${progress.answered} câu đúng</strong>
    <span>${state.practiceMode === "weekly" ? "Tuần" : "Ngày"}: ${record.key}</span>
  `;
  if (dom.printCertificateBtn) dom.printCertificateBtn.disabled = false;
}

function renderPracticeDashboard() {
  if (!dom.practiceSubjectCards) return;

  renderPracticePlanTabs();
  renderPracticeSubjectCards();
  renderWeeklyPlanBoard();
  renderPracticeQuestion();
}

function setupPracticeDashboard() {
  if (!dom.practicePlanTabs) return;

  [...dom.practicePlanTabs.querySelectorAll("[data-practice-mode]")].forEach((button) => {
    button.addEventListener("click", () => {
      state.practiceMode = button.dataset.practiceMode;
      renderPracticeDashboard();
    });
  });

  dom.printCertificateBtn?.addEventListener("click", () => window.print());
}

function renderQuiz() {
  const lessonData = currentLesson();
  const quiz = lessonData.quiz[state.quizIndex];
  dom.quizProgress.textContent = `${state.quizIndex + 1}/${lessonData.quiz.length}`;
  dom.quizQuestion.textContent = quiz.question;
  dom.feedback.textContent = "";
  dom.answerGrid.innerHTML = "";

  quiz.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(button, answer, quiz.correct));
    dom.answerGrid.append(button);
  });
}

function checkAnswer(button, answer, correct) {
  const buttons = [...dom.answerGrid.querySelectorAll("button")];
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === correct) item.classList.add("is-correct");
  });

  if (answer === correct) {
    button.classList.add("is-correct");
    dom.feedback.textContent = "Đúng rồi, nhận 1 sao nhé!";
    state.stars += 1;
    state.done += 1;
    saveProgress();
  } else {
    button.classList.add("is-wrong");
    dom.feedback.textContent = `Gần đúng rồi. Đáp án là: ${correct}`;
  }

  setTimeout(() => {
    const quizLength = currentLesson().quiz.length;
    state.quizIndex = (state.quizIndex + 1) % quizLength;
    renderQuiz();
    renderExerciseList();
  }, 1200);
}

function saveProgress() {
  localStorage.setItem("vh-stars", String(state.stars));
  localStorage.setItem("vh-done", String(state.done));
  if (dom.starCount) dom.starCount.textContent = state.stars;
  if (dom.doneCount) dom.doneCount.textContent = state.done;
}

function renderLearning() {
  renderGradePicker();
  renderSubjectPicker();
  renderSgkRoadmap();
  renderLessonList();
  renderLesson();
  renderVideoLessonList();
  renderExerciseList();
  renderPracticeDashboard();
}

function setupNextLesson() {
  if (!dom.nextLessonBtn) return;

  dom.nextLessonBtn.addEventListener("click", () => {
    state.lessonIndex = (state.lessonIndex + 1) % currentLessons().length;
    state.quizIndex = 0;
    renderLearning();
  });
}

function setupMemoryGame() {
  const pairs = ["A", "A", "7", "7", "ăn", "ăn", "cat", "cat"];
  const shuffled = pairs
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item, index) => ({ id: index, value: item.value }));

  state.memoryOpen = [];
  state.memoryDone = new Set();
  state.memoryBusy = false;
  dom.memoryFeedback.textContent = "";
  dom.memoryGrid.innerHTML = "";

  shuffled.forEach((card) => {
    const button = document.createElement("button");
    button.className = "memory-card";
    button.type = "button";
    button.dataset.id = String(card.id);
    button.dataset.value = card.value;
    button.textContent = "?";
    button.addEventListener("click", () => flipMemoryCard(button));
    dom.memoryGrid.append(button);
  });
}

function flipMemoryCard(button) {
  if (state.memoryBusy) return;

  const id = Number(button.dataset.id);
  if (state.memoryDone.has(id) || state.memoryOpen.some((item) => item.id === id)) return;

  button.textContent = button.dataset.value;
  button.classList.add("is-open");
  state.memoryOpen.push({ id, value: button.dataset.value, button });

  if (state.memoryOpen.length < 2) return;

  const [first, second] = state.memoryOpen;
  if (first.value === second.value) {
    first.button.classList.add("is-done");
    second.button.classList.add("is-done");
    state.memoryDone.add(first.id);
    state.memoryDone.add(second.id);
    state.memoryOpen = [];
    dom.memoryFeedback.textContent = "Tìm được một cặp rồi!";

    if (state.memoryDone.size === 8) {
      dom.memoryFeedback.textContent = "Hoàn thành! Thêm 2 sao vui.";
      state.stars += 2;
      state.done += 1;
      saveProgress();
    }
    return;
  }

  dom.memoryFeedback.textContent = "Thử cặp khác nhé.";
  state.memoryBusy = true;
  setTimeout(() => {
    first.button.textContent = "?";
    second.button.textContent = "?";
    first.button.classList.remove("is-open");
    second.button.classList.remove("is-open");
    state.memoryOpen = [];
    state.memoryBusy = false;
  }, 800);
}

function renderRiddle() {
  const riddle = riddles[state.riddleIndex];
  dom.riddleText.textContent = riddle.text;
  dom.riddleFeedback.textContent = "";
  dom.riddleAnswers.innerHTML = "";

  riddle.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      if (answer === riddle.correct) {
        button.classList.add("is-correct");
        dom.riddleFeedback.textContent = "Chuẩn luôn!";
        state.stars += 1;
        state.done += 1;
        saveProgress();
      } else {
        button.classList.add("is-wrong");
        dom.riddleFeedback.textContent = `Đáp án là: ${riddle.correct}`;
      }
      [...dom.riddleAnswers.querySelectorAll("button")].forEach((item) => {
        item.disabled = true;
        if (item.textContent === riddle.correct) item.classList.add("is-correct");
      });
    });
    dom.riddleAnswers.append(button);
  });
}

function setupRiddles() {
  if (!dom.newRiddleBtn) return;

  dom.newRiddleBtn.addEventListener("click", () => {
    state.riddleIndex = (state.riddleIndex + 1) % riddles.length;
    renderRiddle();
  });
}

function setupMissions() {
  if (!dom.missionText || !dom.missionBtn) return;

  dom.missionText.textContent = missions[0];
  dom.missionBtn.addEventListener("click", () => {
    const mission = missions[Math.floor(Math.random() * missions.length)];
    dom.missionText.textContent = mission;
    showToast("Nhiệm vụ mới đã mở.");
  });
}

function setupPlayTabs() {
  if (!dom.playTabs) return;

  const tabs = [...dom.playTabs.querySelectorAll("[data-play-filter]")];
  const panels = [...document.querySelectorAll("[data-play-panel]")];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.playFilter;
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.playPanel === target));
    });
  });
}

function renderColorGame() {
  if (!dom.colorPrompt || !dom.colorOptions) return;

  const game = colorGames[state.colorIndex];
  dom.colorPrompt.textContent = game.prompt;
  dom.colorFeedback.textContent = "";
  dom.colorOptions.innerHTML = "";

  game.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "color-choice";
    button.type = "button";
    button.textContent = option.label;
    button.style.background = option.color;
    button.addEventListener("click", () => {
      const isCorrect = option.label === game.answer;
      button.classList.add(isCorrect ? "is-correct" : "is-wrong");
      dom.colorFeedback.textContent = isCorrect ? "Đúng màu rồi!" : `Màu đúng là: ${game.answer}`;

      [...dom.colorOptions.querySelectorAll("button")].forEach((item) => {
        item.disabled = true;
        if (item.textContent === game.answer) item.classList.add("is-correct");
      });

      if (isCorrect) {
        state.stars += 1;
        state.done += 1;
        saveProgress();
      }
    });
    dom.colorOptions.append(button);
  });
}

function setupColorGame() {
  if (!dom.colorPrompt || !dom.colorOptions) return;

  renderColorGame();
  if (!dom.newColorBtn) return;

  dom.newColorBtn.addEventListener("click", () => {
    state.colorIndex = (state.colorIndex + 1) % colorGames.length;
    renderColorGame();
  });
}

function currentBoothFrame() {
  return boothFrames.find((frame) => frame.key === state.boothFrameKey) || boothFrames[0];
}

function currentThemeFrames() {
  return boothFrames.filter((frame) => frame.pack === state.boothThemeKey);
}

function renderBoothThemeTabs() {
  if (!dom.boothThemeTabs) return;

  dom.boothThemeTabs.innerHTML = "";
  boothThemePacks.forEach((pack) => {
    const button = document.createElement("button");
    button.className = `theme-tab${pack.key === state.boothThemeKey ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${pack.label}</strong><span>${pack.note}</span>`;
    button.addEventListener("click", () => {
      state.boothThemeKey = pack.key;
      const frames = currentThemeFrames();
      if (!frames.some((frame) => frame.key === state.boothFrameKey)) {
        state.boothFrameKey = frames[0].key;
      }
      renderBoothThemeTabs();
      renderBoothFrames();
      applyBoothFrame();
      updateBoothStatus(`Đã mở bộ theme ${pack.label}.`);
    });
    dom.boothThemeTabs.append(button);
  });
}

function renderBoothFrames() {
  if (!dom.boothFrameList) return;

  dom.boothFrameList.innerHTML = "";
  currentThemeFrames().forEach((frame) => {
    const button = document.createElement("button");
    button.className = `frame-option${frame.key === state.boothFrameKey ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span class="frame-preview ${frame.previewClass}" aria-hidden="true"></span><span>${frame.label}</span>`;
    button.addEventListener("click", () => {
      state.boothFrameKey = frame.key;
      renderBoothFrames();
      applyBoothFrame();
      updateBoothStatus(`Đã chọn khung ${frame.label}.`);
    });
    dom.boothFrameList.append(button);
  });
}

function applyBoothFrame() {
  if (!dom.boothFrameOverlay) return;

  const frame = currentBoothFrame();
  dom.boothFrameOverlay.className = `booth-frame ${frame.className}`;
  if (dom.boothFrameName) dom.boothFrameName.textContent = frame.label;
}

async function startBoothCamera() {
  if (!dom.boothVideo) return;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    updateBoothStatus("Trình duyệt cần localhost hoặc HTTPS để mở camera.");
    return;
  }

  try {
    stopBoothCamera();
    updateBoothStatus("Đang mở camera...");
    boothStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: "user",
        width: { ideal: 1280 },
        height: { ideal: 960 },
      },
    });
    dom.boothVideo.srcObject = boothStream;
    await dom.boothVideo.play();
    clearBoothStillPreview();
    dom.cameraPlaceholder?.classList.add("is-hidden");
    if (dom.capturePhotoBtn) dom.capturePhotoBtn.disabled = false;
    if (dom.startCameraBtn) dom.startCameraBtn.textContent = "Camera bật";
    updateBoothStatus("Sẵn sàng chụp.");
  } catch (error) {
    updateBoothStatus("Chưa mở được camera. Hãy cho phép camera hoặc mở bằng localhost/HTTPS.");
  }
}

function stopBoothCamera() {
  if (!boothStream) return;

  boothStream.getTracks().forEach((track) => track.stop());
  boothStream = null;
}

function captureBoothPhoto() {
  if (!dom.boothVideo || !dom.boothCanvas || !dom.photoPreview || !dom.downloadPhotoLink) return;

  const video = dom.boothVideo;
  const width = video.videoWidth || 1280;
  const height = video.videoHeight || 960;
  if (!video.videoWidth || !video.videoHeight) {
    updateBoothStatus("Camera chưa sẵn sàng.");
    return;
  }

  const canvas = dom.boothCanvas;
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");

  context.save();
  context.translate(width, 0);
  context.scale(-1, 1);
  context.drawImage(video, 0, 0, width, height);
  context.restore();
  finishBoothCanvas(context, width, height, "Ảnh đã chụp xong.");
}

function handleMobilePhotoInput(event) {
  const file = event.target.files?.[0];
  if (!file || !dom.boothCanvas) return;

  const image = new Image();
  const imageUrl = URL.createObjectURL(file);
  image.onload = () => {
    const canvas = dom.boothCanvas;
    const width = 1280;
    const height = 960;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    drawImageCover(context, image, width, height);
    finishBoothCanvas(context, width, height, "Ảnh từ điện thoại đã ghép khung.");
    URL.revokeObjectURL(imageUrl);
    event.target.value = "";
  };
  image.onerror = () => {
    URL.revokeObjectURL(imageUrl);
    updateBoothStatus("Chưa đọc được ảnh. Thử chụp lại nhé.");
  };
  image.src = imageUrl;
}

function drawImageCover(context, image, width, height) {
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const canvasRatio = width / height;
  let sourceWidth = image.naturalWidth;
  let sourceHeight = image.naturalHeight;
  let sourceX = 0;
  let sourceY = 0;

  if (imageRatio > canvasRatio) {
    sourceWidth = image.naturalHeight * canvasRatio;
    sourceX = (image.naturalWidth - sourceWidth) / 2;
  } else {
    sourceHeight = image.naturalWidth / canvasRatio;
    sourceY = (image.naturalHeight - sourceHeight) / 2;
  }

  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height);
}

function finishBoothCanvas(context, width, height, message) {
  if (!dom.boothCanvas || !dom.photoPreview || !dom.downloadPhotoLink) return;

  drawBoothFrame(context, width, height, currentBoothFrame());
  const imageUrl = dom.boothCanvas.toDataURL("image/png");
  showBoothStillPreview(imageUrl);
  dom.photoPreview.src = imageUrl;
  dom.photoPreview.classList.add("has-photo");
  dom.emptyPhoto?.classList.add("is-hidden");
  dom.downloadPhotoLink.href = imageUrl;
  dom.downloadPhotoLink.classList.remove("disabled-link");
  if (dom.retakePhotoBtn) dom.retakePhotoBtn.disabled = false;
  updateBoothStatus(message);
  playCaptureSuccessSound();
  showCaptureSuccessEffect();
}

function showBoothStillPreview(imageUrl) {
  if (!dom.boothStillPreview) return;

  dom.boothStillPreview.src = imageUrl;
  dom.boothStillPreview.classList.add("is-visible");
  dom.cameraPlaceholder?.classList.add("is-hidden");
}

function clearBoothStillPreview() {
  if (!dom.boothStillPreview) return;

  dom.boothStillPreview.removeAttribute("src");
  dom.boothStillPreview.classList.remove("is-visible");
}

function playCaptureSuccessSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  try {
    const audioContext = new AudioContext();
    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.18, audioContext.currentTime + 0.02);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.58);
    masterGain.connect(audioContext.destination);

    [660, 880, 1180].forEach((frequency, index) => {
      const start = audioContext.currentTime + index * 0.12;
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.42, start + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.11);
      oscillator.connect(gain);
      gain.connect(masterGain);
      oscillator.start(start);
      oscillator.stop(start + 0.14);
    });

    window.setTimeout(() => audioContext.close(), 750);
  } catch (error) {
    // Some mobile browsers allow vibration but block Web Audio until a user gesture.
  }

  if (navigator.vibrate) navigator.vibrate([45, 35, 45]);
}

function showCaptureSuccessEffect() {
  const viewfinder = dom.boothVideo?.closest(".camera-viewfinder");
  if (!viewfinder || !dom.captureSuccess) return;

  viewfinder.classList.remove("is-shot-success");
  dom.captureSuccess.classList.remove("is-showing");
  window.clearTimeout(showCaptureSuccessEffect.timer);

  requestAnimationFrame(() => {
    viewfinder.classList.add("is-shot-success");
    dom.captureSuccess.classList.add("is-showing");
  });

  showCaptureSuccessEffect.timer = window.setTimeout(() => {
    viewfinder.classList.remove("is-shot-success");
    dom.captureSuccess.classList.remove("is-showing");
  }, 1200);
}

function clearBoothPhoto() {
  if (dom.photoPreview) {
    dom.photoPreview.removeAttribute("src");
    dom.photoPreview.classList.remove("has-photo");
  }
  clearBoothStillPreview();
  dom.emptyPhoto?.classList.remove("is-hidden");
  if (!boothStream) dom.cameraPlaceholder?.classList.remove("is-hidden");
  if (dom.downloadPhotoLink) {
    dom.downloadPhotoLink.removeAttribute("href");
    dom.downloadPhotoLink.classList.add("disabled-link");
  }
  if (dom.retakePhotoBtn) dom.retakePhotoBtn.disabled = true;
  updateBoothStatus("Sẵn sàng chụp ảnh mới.");
}

function drawBoothFrame(context, width, height, frame) {
  switch (frame.key) {
    case "princess":
      drawPrincessFrame(context, width, height);
      break;
    case "kitty":
      drawKittyFrame(context, width, height);
      break;
    case "superhero":
      drawSuperheroFrame(context, width, height);
      break;
    case "space":
      drawSpaceFrame(context, width, height);
      break;
    case "robot":
      drawRobotFrame(context, width, height);
      break;
    case "racing":
      drawRacingFrame(context, width, height);
      break;
    case "football":
      drawFootballFrame(context, width, height);
      break;
    case "dino":
      drawDinoFrame(context, width, height);
      break;
    case "family":
      drawFamilyFrame(context, width, height);
      break;
    case "love":
      drawLoveFrame(context, width, height);
      break;
    case "fairy":
      drawFairyFrame(context, width, height);
      break;
    case "mermaid":
      drawMermaidFrame(context, width, height);
      break;
    case "home":
      drawHomeFrame(context, width, height);
      break;
    case "birthday":
      drawBirthdayFrame(context, width, height);
      break;
    case "picnic":
      drawPicnicFrame(context, width, height);
      break;
    case "pinkBow":
      drawPinkBowFrame(context, width, height);
      break;
    case "pinkPlaid":
      drawPinkPlaidFrame(context, width, height);
      break;
    case "pinkRibbon":
      drawPinkRibbonFrame(context, width, height);
      break;
    case "pinkLove":
      drawPinkLoveFrame(context, width, height);
      break;
    case "rainbow":
      drawRainbowFrame(context, width, height);
      break;
    case "stars":
      fillFrameBorder(context, width, height, 68, "#fff1b8");
      drawStar(context, 82, 82, 42, 18, "#ff7a7a");
      drawStar(context, width - 82, height - 82, 42, 18, "#6bb8ff");
      drawStar(context, width - 88, 88, 30, 13, "#78d6b6");
      drawStar(context, 88, height - 88, 30, 13, "#ffd166");
      break;
    case "notebook":
      fillFrameBorder(context, width, height, 58, "#ffffff");
      context.strokeStyle = "rgba(107, 184, 255, 0.64)";
      context.lineWidth = Math.max(2, width * 0.002);
      for (let y = 100; y < height - 40; y += 58) {
        context.beginPath();
        context.moveTo(48, y);
        context.lineTo(width - 48, y);
        context.stroke();
      }
      context.strokeStyle = "rgba(255, 122, 122, 0.72)";
      context.lineWidth = Math.max(4, width * 0.004);
      context.beginPath();
      context.moveTo(108, 50);
      context.lineTo(108, height - 50);
      context.stroke();
      break;
    case "garden":
      fillFrameBorder(context, width, height, 62, "#eafadf");
      context.fillStyle = "#83c45e";
      context.fillRect(0, 0, width, 30);
      context.fillRect(0, height - 30, width, 30);
      context.fillStyle = "#ffd166";
      context.fillRect(0, 0, 30, height);
      context.fillStyle = "#ffb3b3";
      context.fillRect(width - 30, 0, 30, height);
      drawLeaf(context, 88, 78, "#78d6b6");
      drawLeaf(context, width - 88, 78, "#83c45e");
      drawLeaf(context, 88, height - 78, "#83c45e");
      drawLeaf(context, width - 88, height - 78, "#78d6b6");
      break;
    case "clean":
    default:
      fillFrameBorder(context, width, height, 42, "#ffffff");
      context.strokeStyle = "#263238";
      context.lineWidth = 12;
      context.strokeRect(22, 22, width - 44, height - 44);
      break;
  }
}

function drawRainbowFrame(context, width, height) {
  const colors = ["#ff7a7a", "#ffd166", "#78d6b6", "#6bb8ff"];
  colors.forEach((color, index) => {
    const inset = index * 24 + 12;
    context.strokeStyle = color;
    context.lineWidth = 24;
    context.strokeRect(inset, inset, width - inset * 2, height - inset * 2);
  });
}

function fillFrameBorder(context, width, height, size, color) {
  context.fillStyle = color;
  context.fillRect(0, 0, width, size);
  context.fillRect(0, height - size, width, size);
  context.fillRect(0, 0, size, height);
  context.fillRect(width - size, 0, size, height);
}

function drawPrincessFrame(context, width, height) {
  fillFrameBorder(context, width, height, 72, "#f6d9ff");
  fillFrameBorder(context, width, height, 54, "#ffd166");
  fillFrameBorder(context, width, height, 34, "#ffd7ef");
  drawCrown(context, width / 2, 82, 150, 82);
  drawStar(context, width - 86, height - 86, 42, 18, "#ff7a7a");
  drawStar(context, 92, height - 92, 32, 14, "#ffd166");
}

function drawKittyFrame(context, width, height) {
  fillFrameBorder(context, width, height, 72, "#ffd7ef");
  fillFrameBorder(context, width, height, 54, "#ffb3d1");
  fillFrameBorder(context, width, height, 32, "#ffffff");
  drawCatEar(context, 86, 38, 96, "left");
  drawCatEar(context, width - 86, 38, 96, "right");
  drawBow(context, width - 112, 76, 72, "#ff7a7a");
  drawHeart(context, 92, height - 82, 30, "#ffb3d1");
}

function drawSuperheroFrame(context, width, height) {
  fillFrameBorder(context, width, height, 80, "#6bb8ff");
  fillFrameBorder(context, width, height, 58, "#ff7a7a");
  fillFrameBorder(context, width, height, 34, "#263238");
  drawBolt(context, 84, 92, 94, "#ffd166");
  drawStar(context, width - 86, 86, 36, 15, "#ffd166");
  drawFrameLabel(context, width - 142, height - 74, "Bé siêu nhân", 260, "#ffd166");
}

function drawSpaceFrame(context, width, height) {
  fillFrameBorder(context, width, height, 74, "#253047");
  fillFrameBorder(context, width, height, 48, "#6bb8ff");
  drawPlanet(context, 96, 86, 42, "#ffd166");
  drawPlanet(context, width - 102, height - 90, 48, "#9a7bd8");
  drawStar(context, width - 92, 86, 26, 11, "#ffffff");
  drawStar(context, 92, height - 86, 24, 10, "#ffffff");
}

function drawRobotFrame(context, width, height) {
  fillFrameBorder(context, width, height, 68, "#dff3ff");
  fillFrameBorder(context, width, height, 42, "#9a7bd8");
  drawRobotHead(context, 98, 84, 84, 62);
  drawRobotHead(context, width - 98, height - 84, 84, 62);
  drawFrameLabel(context, width / 2, height - 72, "Robot vui", 260, "#ffffff");
}

function drawRacingFrame(context, width, height) {
  fillFrameBorder(context, width, height, 70, "#ff7a7a");
  drawCheckerStrip(context, 0, 0, width, 34);
  drawCheckerStrip(context, 0, height - 34, width, 34);
  drawBolt(context, 92, 92, 78, "#ffd166");
  drawFrameLabel(context, width - 130, height - 72, "Xe đua", 220, "#ffd166");
}

function drawFootballFrame(context, width, height) {
  fillFrameBorder(context, width, height, 70, "#83c45e");
  fillFrameBorder(context, width, height, 42, "#eafadf");
  drawFootball(context, 94, 86, 42);
  drawFootball(context, width - 94, height - 86, 42);
  drawFrameLabel(context, width / 2, height - 72, "Bóng đá", 230, "#ffffff");
}

function drawDinoFrame(context, width, height) {
  fillFrameBorder(context, width, height, 72, "#eafadf");
  fillFrameBorder(context, width, height, 46, "#83c45e");
  drawDino(context, 108, height - 92, "#78d6b6");
  drawDino(context, width - 108, 92, "#ffd166");
  drawFrameLabel(context, width / 2, 72, "Khủng long", 260, "#ffffff");
}

function drawFamilyFrame(context, width, height) {
  fillFrameBorder(context, width, height, 74, "#ffd166");
  fillFrameBorder(context, width, height, 54, "#78d6b6");
  fillFrameBorder(context, width, height, 34, "#fff8dd");
  drawFamilyHeads(context, 122, 86);
  drawHeart(context, width - 92, 82, 32, "#ff7a7a");
  drawFrameLabel(context, width / 2, height - 72, "Gia đình mình vui nhất", Math.min(width - 170, 520), "#ffffff");
}

function drawLoveFrame(context, width, height) {
  fillFrameBorder(context, width, height, 76, "#fff1b8");
  fillFrameBorder(context, width, height, 56, "#ff7a7a");
  fillFrameBorder(context, width, height, 34, "#ffe4e7");
  drawHeart(context, 92, 86, 38, "#ff7a7a");
  drawHeart(context, width - 92, 86, 38, "#ff7a7a");
  drawHeart(context, 90, height - 86, 28, "#ffb3d1");
  drawFrameLabel(context, width / 2, height - 72, "Yêu cả nhà", Math.min(width - 190, 360), "#ffffff");
}

function drawFairyFrame(context, width, height) {
  fillFrameBorder(context, width, height, 74, "#f6d9ff");
  fillFrameBorder(context, width, height, 48, "#ffd7ef");
  drawWing(context, 96, 92, "#ffffff");
  drawWing(context, width - 96, 92, "#ffffff", true);
  drawStar(context, 96, height - 88, 36, 15, "#ffd166");
  drawStar(context, width - 96, height - 88, 36, 15, "#78d6b6");
  drawFrameLabel(context, width / 2, height - 72, "Nàng tiên", 260, "#ffffff");
}

function drawMermaidFrame(context, width, height) {
  fillFrameBorder(context, width, height, 74, "#6bb8ff");
  drawWaveStrip(context, width, height, 42, "#78d6b6");
  drawShell(context, 96, 88, 42, "#ffd7ef");
  drawShell(context, width - 96, 88, 42, "#ffd166");
  drawFrameLabel(context, width / 2, height - 72, "Nàng tiên cá", 310, "#ffffff");
}

function drawHomeFrame(context, width, height) {
  fillFrameBorder(context, width, height, 74, "#fff8dd");
  fillFrameBorder(context, width, height, 48, "#ffd166");
  drawHouse(context, 108, 92, 86);
  drawHeart(context, width - 96, 86, 32, "#ff7a7a");
  drawFrameLabel(context, width / 2, height - 72, "Mái nhà yêu", 300, "#ffffff");
}

function drawBirthdayFrame(context, width, height) {
  fillFrameBorder(context, width, height, 74, "#fff1b8");
  fillFrameBorder(context, width, height, 48, "#ffb3d1");
  drawBalloon(context, 90, 100, "#6bb8ff");
  drawBalloon(context, width - 90, 100, "#ff7a7a");
  drawCake(context, width / 2, height - 84, 130, 72);
}

function drawPicnicFrame(context, width, height) {
  fillFrameBorder(context, width, height, 74, "#eafadf");
  fillFrameBorder(context, width, height, 48, "#78d6b6");
  drawSun(context, width - 92, 86, 36);
  drawPicnicBasket(context, 112, height - 86, 110, 64);
  drawFrameLabel(context, width / 2, height - 72, "Dã ngoại vui", 300, "#ffffff");
}

function drawPinkBowFrame(context, width, height) {
  fillFrameBorder(context, width, height, 78, "#ffd7ef");
  fillFrameBorder(context, width, height, 54, "#ffb3d1");
  drawWavyInnerFrame(context, width, height, 94, "#ff5d9b");
  drawBow(context, 120, 92, 110, "#ff8fbd");
  drawSpeechBubble(context, width - 150, 90, "Cute!", "#ffffff");
  drawHeart(context, 96, height - 96, 34, "#ff5d9b");
  drawHeart(context, width - 98, height - 90, 42, "#ff8fbd");
}

function drawPinkPlaidFrame(context, width, height) {
  drawPlaidBorder(context, width, height, 86);
  drawBow(context, width - 126, 94, 104, "#ff8fbd");
  drawSpeechBubble(context, 144, 88, "So cute!", "#ffffff");
  drawTinyCamera(context, width - 104, height - 108);
  drawHeart(context, 96, height - 90, 28, "#ff5d9b");
}

function drawPinkRibbonFrame(context, width, height) {
  fillFrameBorder(context, width, height, 82, "#ffd7ef");
  drawWavyInnerFrame(context, width, height, 98, "#ff5d9b");
  drawRibbonBanner(context, width / 2, 98, Math.min(width - 220, 430), "Nơ hồng");
  drawBow(context, width / 2, 44, 96, "#ff8fbd");
  drawCupcake(context, width - 100, height - 104, 68);
  drawHeart(context, 98, height - 90, 30, "#ff5d9b");
}

function drawPinkLoveFrame(context, width, height) {
  fillFrameBorder(context, width, height, 78, "#ffb3d1");
  fillFrameBorder(context, width, height, 52, "#ffd7ef");
  drawDashedInnerFrame(context, width, height, 96, "#ff5d9b");
  drawBow(context, width / 2, 62, 106, "#ff8fbd");
  drawSpeechBubble(context, width - 130, 138, "LOVE", "#ffffff");
  drawCupcake(context, width - 104, height - 104, 66);
  drawHeart(context, 94, height - 96, 34, "#ff5d9b");
}

function drawCrown(context, x, y, width, height) {
  const left = x - width / 2;
  const top = y - height / 2;
  context.save();
  context.beginPath();
  context.moveTo(left, top + height);
  context.lineTo(left + width * 0.16, top + height * 0.3);
  context.lineTo(left + width * 0.34, top + height * 0.68);
  context.lineTo(left + width * 0.5, top);
  context.lineTo(left + width * 0.66, top + height * 0.68);
  context.lineTo(left + width * 0.84, top + height * 0.3);
  context.lineTo(left + width, top + height);
  context.closePath();
  context.fillStyle = "#ffd166";
  context.fill();
  context.lineWidth = 7;
  context.strokeStyle = "#263238";
  context.stroke();
  ["#ff7a7a", "#6bb8ff", "#78d6b6"].forEach((color, index) => {
    context.beginPath();
    context.arc(left + width * (0.3 + index * 0.2), top + height * 0.72, 8, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    context.stroke();
  });
  context.restore();
}

function drawCatEar(context, x, y, size, side) {
  const direction = side === "left" ? -1 : 1;
  context.save();
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + direction * size * 0.74, y + size * 0.72);
  context.lineTo(x - direction * size * 0.16, y + size * 0.78);
  context.closePath();
  context.fillStyle = "#ffffff";
  context.fill();
  context.lineWidth = 6;
  context.strokeStyle = "#263238";
  context.stroke();
  context.restore();
}

function drawBow(context, x, y, size, color) {
  context.save();
  context.fillStyle = color;
  context.strokeStyle = "#263238";
  context.lineWidth = 5;
  context.beginPath();
  context.ellipse(x - size * 0.34, y, size * 0.32, size * 0.22, 0, 0, Math.PI * 2);
  context.ellipse(x + size * 0.34, y, size * 0.32, size * 0.22, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(x, y, size * 0.16, 0, Math.PI * 2);
  context.fillStyle = "#ffd7ef";
  context.fill();
  context.stroke();
  context.restore();
}

function drawBolt(context, x, y, size, color) {
  context.save();
  context.translate(x, y);
  context.beginPath();
  context.moveTo(size * 0.18, -size * 0.55);
  context.lineTo(-size * 0.3, size * 0.05);
  context.lineTo(size * 0.02, size * 0.05);
  context.lineTo(-size * 0.18, size * 0.58);
  context.lineTo(size * 0.42, -size * 0.16);
  context.lineTo(size * 0.08, -size * 0.16);
  context.closePath();
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 7;
  context.strokeStyle = "#263238";
  context.stroke();
  context.restore();
}

function drawFamilyHeads(context, x, y) {
  const people = [
    { x: x - 42, y: y + 8, color: "#ffd166", radius: 24 },
    { x, y: y - 2, color: "#ff7a7a", radius: 28 },
    { x: x + 44, y: y + 8, color: "#6bb8ff", radius: 24 },
  ];
  people.forEach((person) => {
    context.beginPath();
    context.arc(person.x, person.y, person.radius, 0, Math.PI * 2);
    context.fillStyle = person.color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#263238";
    context.stroke();
    context.beginPath();
    context.arc(person.x, person.y + person.radius + 24, person.radius * 1.2, Math.PI, 0);
    context.fill();
    context.stroke();
  });
}

function drawHeart(context, x, y, size, color) {
  context.save();
  context.beginPath();
  context.moveTo(x, y + size * 0.36);
  context.bezierCurveTo(x - size, y - size * 0.24, x - size * 0.5, y - size * 0.82, x, y - size * 0.35);
  context.bezierCurveTo(x + size * 0.5, y - size * 0.82, x + size, y - size * 0.24, x, y + size * 0.36);
  context.closePath();
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#263238";
  context.stroke();
  context.restore();
}

function drawFrameLabel(context, x, y, text, maxWidth, background) {
  context.save();
  const paddingX = 24;
  const boxHeight = 62;
  let fontSize = 36;
  do {
    context.font = `900 ${fontSize}px Segoe UI, Arial, sans-serif`;
    fontSize -= 2;
  } while (context.measureText(text).width > maxWidth - paddingX * 2 && fontSize > 22);

  const textWidth = Math.min(context.measureText(text).width + paddingX * 2, maxWidth);
  const left = x - textWidth / 2;
  const top = y - boxHeight / 2;
  drawRoundedRect(context, left, top, textWidth, boxHeight, 12, background, "#263238", 6);
  context.fillStyle = "#263238";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, x, y + 1, maxWidth - paddingX * 2);
  context.restore();
}

function drawRoundedRect(context, x, y, width, height, radius, fill, stroke, lineWidth) {
  context.save();
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
  context.fillStyle = fill;
  context.fill();
  context.lineWidth = lineWidth;
  context.strokeStyle = stroke;
  context.stroke();
  context.restore();
}

function drawWavyInnerFrame(context, width, height, inset, color) {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 6;
  context.beginPath();
  const wave = 12;
  const left = inset;
  const right = width - inset;
  const top = inset;
  const bottom = height - inset;
  for (let x = left; x <= right; x += wave) {
    const y = top + Math.sin((x - left) / wave) * 5;
    if (x === left) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  for (let y = top; y <= bottom; y += wave) {
    context.lineTo(right + Math.sin((y - top) / wave) * 5, y);
  }
  for (let x = right; x >= left; x -= wave) {
    context.lineTo(x, bottom + Math.sin((right - x) / wave) * 5);
  }
  for (let y = bottom; y >= top; y -= wave) {
    context.lineTo(left + Math.sin((bottom - y) / wave) * 5, y);
  }
  context.closePath();
  context.stroke();
  context.restore();
}

function drawDashedInnerFrame(context, width, height, inset, color) {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 5;
  context.setLineDash([18, 13]);
  drawRoundedRect(context, inset, inset, width - inset * 2, height - inset * 2, 42, "rgba(255,255,255,0)", color, 5);
  context.restore();
}

function drawPlaidBorder(context, width, height, size) {
  fillFrameBorder(context, width, height, size, "#ffd7ef");
  context.save();
  context.globalAlpha = 0.52;
  context.fillStyle = "#ffffff";
  for (let x = 0; x < width; x += 42) context.fillRect(x, 0, 20, height);
  for (let y = 0; y < height; y += 42) context.fillRect(0, y, width, 20);
  context.restore();
  drawRoundedRect(context, size, size, width - size * 2, height - size * 2, 40, "rgba(255,255,255,0)", "#ff5d9b", 6);
}

function drawSpeechBubble(context, x, y, text, fill) {
  context.save();
  const width = Math.max(130, text.length * 24);
  const height = 64;
  drawRoundedRect(context, x - width / 2, y - height / 2, width, height, 24, fill, "#263238", 5);
  context.beginPath();
  context.moveTo(x + width * 0.18, y + height / 2 - 4);
  context.lineTo(x + width * 0.32, y + height / 2 + 22);
  context.lineTo(x + width * 0.02, y + height / 2 - 2);
  context.closePath();
  context.fillStyle = fill;
  context.fill();
  context.strokeStyle = "#263238";
  context.lineWidth = 5;
  context.stroke();
  context.fillStyle = "#ff5d9b";
  context.font = "900 32px Segoe UI, Arial, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, x, y + 1, width - 24);
  context.restore();
}

function drawRibbonBanner(context, x, y, width, text) {
  context.save();
  const height = 66;
  context.fillStyle = "#ffb3d1";
  context.strokeStyle = "#263238";
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(x - width / 2, y - height / 2);
  context.lineTo(x + width / 2, y - height / 2);
  context.lineTo(x + width / 2 + 34, y);
  context.lineTo(x + width / 2, y + height / 2);
  context.lineTo(x - width / 2, y + height / 2);
  context.lineTo(x - width / 2 - 34, y);
  context.closePath();
  context.fill();
  context.stroke();
  context.fillStyle = "#ff5d9b";
  context.font = "900 34px Segoe UI, Arial, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, x, y + 1, width - 20);
  context.restore();
}

function drawCupcake(context, x, y, size) {
  context.save();
  context.translate(x, y);
  context.beginPath();
  context.arc(0, -size * 0.24, size * 0.38, Math.PI, 0);
  context.lineTo(size * 0.38, size * 0.02);
  context.lineTo(-size * 0.38, size * 0.02);
  context.closePath();
  context.fillStyle = "#ffffff";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#263238";
  context.stroke();
  drawRoundedRect(context, -size * 0.34, size * 0.02, size * 0.68, size * 0.42, 8, "#ffd166", "#263238", 5);
  context.beginPath();
  context.arc(0, -size * 0.56, size * 0.11, 0, Math.PI * 2);
  context.fillStyle = "#ff5d9b";
  context.fill();
  context.stroke();
  context.restore();
}

function drawTinyCamera(context, x, y) {
  context.save();
  drawRoundedRect(context, x - 42, y - 30, 84, 60, 8, "#ffb3d1", "#263238", 5);
  context.fillStyle = "#ffd7ef";
  context.fillRect(x - 22, y - 42, 44, 16);
  context.strokeStyle = "#263238";
  context.lineWidth = 5;
  context.strokeRect(x - 22, y - 42, 44, 16);
  context.beginPath();
  context.arc(x, y, 16, 0, Math.PI * 2);
  context.fillStyle = "#ffffff";
  context.fill();
  context.stroke();
  context.restore();
}

function drawPlanet(context, x, y, radius, color) {
  context.save();
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#263238";
  context.stroke();
  context.beginPath();
  context.ellipse(x, y, radius * 1.45, radius * 0.38, -0.28, 0, Math.PI * 2);
  context.strokeStyle = "#ffffff";
  context.lineWidth = 8;
  context.stroke();
  context.restore();
}

function drawRobotHead(context, x, y, width, height) {
  context.save();
  drawRoundedRect(context, x - width / 2, y - height / 2, width, height, 10, "#d9e2e7", "#263238", 5);
  context.fillStyle = "#263238";
  context.beginPath();
  context.arc(x - width * 0.2, y - 5, 6, 0, Math.PI * 2);
  context.arc(x + width * 0.2, y - 5, 6, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#263238";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(x - 18, y + 16);
  context.lineTo(x + 18, y + 16);
  context.stroke();
  context.restore();
}

function drawCheckerStrip(context, x, y, width, height) {
  const size = height / 2;
  for (let row = 0; row < 2; row += 1) {
    for (let col = 0; col < Math.ceil(width / size); col += 1) {
      context.fillStyle = (row + col) % 2 === 0 ? "#ffffff" : "#263238";
      context.fillRect(x + col * size, y + row * size, size, size);
    }
  }
}

function drawFootball(context, x, y, radius) {
  context.save();
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = "#ffffff";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#263238";
  context.stroke();
  context.beginPath();
  context.moveTo(x - radius * 0.65, y);
  context.lineTo(x + radius * 0.65, y);
  context.moveTo(x, y - radius * 0.65);
  context.lineTo(x, y + radius * 0.65);
  context.stroke();
  context.restore();
}

function drawDino(context, x, y, color) {
  context.save();
  context.translate(x, y);
  context.fillStyle = color;
  context.strokeStyle = "#263238";
  context.lineWidth = 5;
  context.beginPath();
  context.ellipse(0, 0, 54, 32, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(50, -24, 26, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.beginPath();
  context.moveTo(-42, -28);
  context.lineTo(-28, -58);
  context.lineTo(-14, -28);
  context.lineTo(0, -58);
  context.lineTo(14, -28);
  context.fill();
  context.stroke();
  context.fillStyle = "#263238";
  context.beginPath();
  context.arc(58, -30, 4, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawWing(context, x, y, color, flip = false) {
  context.save();
  context.translate(x, y);
  if (flip) context.scale(-1, 1);
  context.beginPath();
  context.ellipse(-16, -8, 34, 54, -0.45, 0, Math.PI * 2);
  context.ellipse(28, 20, 28, 42, 0.55, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#263238";
  context.stroke();
  context.restore();
}

function drawWaveStrip(context, width, height, size, color) {
  context.fillStyle = color;
  context.fillRect(0, height - size * 1.8, width, size * 1.8);
  context.strokeStyle = "#ffffff";
  context.lineWidth = 8;
  for (let x = -size; x < width + size; x += size * 2) {
    context.beginPath();
    context.arc(x, height - size * 1.8, size, 0, Math.PI);
    context.stroke();
  }
}

function drawShell(context, x, y, radius, color) {
  context.save();
  context.translate(x, y);
  context.fillStyle = color;
  context.strokeStyle = "#263238";
  context.lineWidth = 5;
  context.beginPath();
  context.arc(0, 0, radius, Math.PI, 0);
  context.lineTo(radius, radius * 0.72);
  context.lineTo(-radius, radius * 0.72);
  context.closePath();
  context.fill();
  context.stroke();
  for (let index = -2; index <= 2; index += 1) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(index * radius * 0.3, radius * 0.7);
    context.stroke();
  }
  context.restore();
}

function drawHouse(context, x, y, size) {
  context.save();
  context.fillStyle = "#ffffff";
  context.strokeStyle = "#263238";
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(x, y - size * 0.55);
  context.lineTo(x - size * 0.55, y);
  context.lineTo(x + size * 0.55, y);
  context.closePath();
  context.fillStyle = "#ff7a7a";
  context.fill();
  context.stroke();
  drawRoundedRect(context, x - size * 0.4, y, size * 0.8, size * 0.56, 6, "#ffffff", "#263238", 5);
  context.restore();
}

function drawBalloon(context, x, y, color) {
  context.save();
  context.beginPath();
  context.ellipse(x, y, 28, 38, 0, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#263238";
  context.stroke();
  context.beginPath();
  context.moveTo(x, y + 38);
  context.lineTo(x - 14, y + 86);
  context.stroke();
  context.restore();
}

function drawCake(context, x, y, width, height) {
  context.save();
  drawRoundedRect(context, x - width / 2, y - height / 2, width, height, 8, "#ffffff", "#263238", 5);
  context.fillStyle = "#ffb3d1";
  context.fillRect(x - width / 2, y - height / 2, width, height * 0.35);
  context.strokeStyle = "#263238";
  context.lineWidth = 4;
  context.strokeRect(x - width / 2, y - height / 2, width, height * 0.35);
  [x - 28, x, x + 28].forEach((candleX) => {
    context.fillStyle = "#6bb8ff";
    context.fillRect(candleX - 4, y - height / 2 - 28, 8, 28);
    context.beginPath();
    context.arc(candleX, y - height / 2 - 34, 7, 0, Math.PI * 2);
    context.fillStyle = "#ffd166";
    context.fill();
  });
  context.restore();
}

function drawSun(context, x, y, radius) {
  context.save();
  context.translate(x, y);
  context.strokeStyle = "#ffd166";
  context.lineWidth = 6;
  for (let index = 0; index < 12; index += 1) {
    const angle = (Math.PI * 2 * index) / 12;
    context.beginPath();
    context.moveTo(Math.cos(angle) * (radius + 8), Math.sin(angle) * (radius + 8));
    context.lineTo(Math.cos(angle) * (radius + 24), Math.sin(angle) * (radius + 24));
    context.stroke();
  }
  context.beginPath();
  context.arc(0, 0, radius, 0, Math.PI * 2);
  context.fillStyle = "#ffd166";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#263238";
  context.stroke();
  context.restore();
}

function drawPicnicBasket(context, x, y, width, height) {
  context.save();
  drawRoundedRect(context, x - width / 2, y - height / 2, width, height, 10, "#ffd166", "#263238", 5);
  context.beginPath();
  context.arc(x, y - height / 2, width * 0.34, Math.PI, 0);
  context.strokeStyle = "#263238";
  context.lineWidth = 6;
  context.stroke();
  context.fillStyle = "#ff7a7a";
  context.fillRect(x - width / 2 + 12, y - 4, width - 24, 12);
  context.restore();
}

function drawStar(context, x, y, outerRadius, innerRadius, color) {
  context.save();
  context.beginPath();
  for (let index = 0; index < 10; index += 1) {
    const angle = -Math.PI / 2 + (index * Math.PI) / 5;
    const radius = index % 2 === 0 ? outerRadius : innerRadius;
    const pointX = x + Math.cos(angle) * radius;
    const pointY = y + Math.sin(angle) * radius;
    if (index === 0) context.moveTo(pointX, pointY);
    else context.lineTo(pointX, pointY);
  }
  context.closePath();
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 6;
  context.strokeStyle = "#263238";
  context.stroke();
  context.restore();
}

function drawLeaf(context, x, y, color) {
  context.save();
  context.translate(x, y);
  context.rotate(-Math.PI / 4);
  context.beginPath();
  context.ellipse(0, 0, 36, 18, 0, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#263238";
  context.stroke();
  context.restore();
}

function updateBoothStatus(message) {
  if (dom.boothStatus) dom.boothStatus.textContent = message;
}

function setupPhotoBooth() {
  if (!dom.boothFrameList) return;

  renderBoothThemeTabs();
  renderBoothFrames();
  applyBoothFrame();
  dom.startCameraBtn?.addEventListener("click", startBoothCamera);
  dom.capturePhotoBtn?.addEventListener("click", captureBoothPhoto);
  dom.retakePhotoBtn?.addEventListener("click", clearBoothPhoto);
  dom.mobilePhotoInput?.addEventListener("change", handleMobilePhotoInput);
  window.addEventListener("beforeunload", stopBoothCamera);
}

function renderStories() {
  dom.storyGrid.innerHTML = "";
  stories.forEach((story) => {
    const article = document.createElement("article");
    article.className = "story-card";
    article.innerHTML = `
      <div class="video-frame">
        <iframe
          title="${story.title}"
          loading="lazy"
          src="${youtubeEmbed(story.id)}"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <p class="eyebrow">Truyện</p>
        <h3>${story.title}</h3>
      </div>
      <p>${story.desc}</p>
      <a class="text-link" href="${youtubeWatch(story.id)}" target="_blank" rel="noreferrer">Mở YouTube</a>
    `;
    dom.storyGrid.append(article);
  });
}

function renderNews() {
  if (!dom.newsGrid) return;

  dom.newsGrid.innerHTML = "";
  newsArticles.forEach((item) => {
    const article = document.createElement("article");
    article.className = "news-card";

    const icon = document.createElement("div");
    icon.className = "news-icon";
    icon.textContent = item.icon;

    const content = document.createElement("div");
    const tag = document.createElement("p");
    tag.className = "eyebrow";
    tag.textContent = item.tag;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    const meta = document.createElement("div");
    meta.className = "news-meta";
    [item.time, "Dành cho ba mẹ"].forEach((label) => {
      const span = document.createElement("span");
      span.textContent = label;
      meta.append(span);
    });

    content.append(tag, title, text, meta);
    article.append(icon, content);
    dom.newsGrid.append(article);
  });
}

function renderTips() {
  if (!dom.tipsGrid) return;

  dom.tipsGrid.innerHTML = "";
  studyTips.forEach((tip, index) => {
    const article = document.createElement("article");
    article.className = "tip-card";

    const number = document.createElement("strong");
    number.textContent = String(index + 1);

    const title = document.createElement("h3");
    title.textContent = tip.title;

    const text = document.createElement("p");
    text.textContent = tip.text;

    article.append(number, title, text);
    dom.tipsGrid.append(article);
  });
}

function showToast(message) {
  if (!dom.toast) return;

  dom.toast.textContent = message;
  dom.toast.classList.add("is-showing");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    dom.toast.classList.remove("is-showing");
  }, 1800);
}

function init() {
  saveProgress();
  if (dom.gradePicker && dom.subjectPicker && dom.lessonList) {
    renderLearning();
    setupNextLesson();
    setupPracticeDashboard();
  }

  setupPlayTabs();

  if (dom.memoryGrid) {
    setupMemoryGame();
    if (dom.resetMemoryBtn) dom.resetMemoryBtn.addEventListener("click", setupMemoryGame);
  }

  if (dom.riddleText && dom.riddleAnswers) {
    setupRiddles();
    renderRiddle();
  }

  setupColorGame();
  setupPhotoBooth();
  setupMissions();
  if (dom.storyGrid) renderStories();
  renderNews();
  renderTips();
}

init();
