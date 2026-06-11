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
  quizBadge: document.querySelector("#quizBadge"),
  quizProgress: document.querySelector("#quizProgress"),
  quizQuestion: document.querySelector("#quizQuestion"),
  answerGrid: document.querySelector("#answerGrid"),
  feedback: document.querySelector("#feedback"),
  lessonVideo: document.querySelector("#lessonVideo"),
  videoTitle: document.querySelector("#videoTitle"),
  videoLink: document.querySelector("#videoLink"),
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
  storyGrid: document.querySelector("#storyGrid"),
  toast: document.querySelector("#toast"),
};

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
  dom.videoTitle.textContent = video.title;
  dom.videoLink.href = youtubeWatch(video.id);
  renderQuiz();
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
  }, 1200);
}

function saveProgress() {
  localStorage.setItem("vh-stars", String(state.stars));
  localStorage.setItem("vh-done", String(state.done));
  dom.starCount.textContent = state.stars;
  dom.doneCount.textContent = state.done;
}

function renderLearning() {
  renderGradePicker();
  renderSubjectPicker();
  renderLessonList();
  renderLesson();
}

function setupNextLesson() {
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
  dom.newRiddleBtn.addEventListener("click", () => {
    state.riddleIndex = (state.riddleIndex + 1) % riddles.length;
    renderRiddle();
  });
}

function setupMissions() {
  dom.missionText.textContent = missions[0];
  dom.missionBtn.addEventListener("click", () => {
    const mission = missions[Math.floor(Math.random() * missions.length)];
    dom.missionText.textContent = mission;
    showToast("Nhiệm vụ mới đã mở.");
  });
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

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("is-showing");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    dom.toast.classList.remove("is-showing");
  }, 1800);
}

function init() {
  saveProgress();
  renderLearning();
  setupNextLesson();
  setupMemoryGame();
  setupRiddles();
  renderRiddle();
  setupMissions();
  renderStories();
  dom.resetMemoryBtn.addEventListener("click", setupMemoryGame);
}

init();
