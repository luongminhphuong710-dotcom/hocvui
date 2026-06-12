# Vui Học Tiểu Học

Web app học tương tác cho bé lớp 1 đến lớp 5.

## Cách mở

Mở file `index.html` bằng trình duyệt.

## Cấu trúc trang

- `index.html`: Trang Học, có bộ lọc chọn lớp 1-5. Sau khi chọn lớp, bé chọn môn Toán, Tiếng Việt hoặc Tiếng Anh. Phần Học tách riêng lộ trình SGK, danh sách bài học, video bài giảng, bài tập, nhiệm vụ ngày/tuần. Mỗi môn có mục tiêu ngày ít nhất 20 câu; hoàn thành sẽ nhận bằng khen online.
- `giai-tri.html`: Trang Giải trí, có Giải đố, Mini game, Game khác và video truyện cổ tích.
- `chup-anh-vui.html`: Trang Chụp ảnh vui, có photobooth dùng camera trước, chọn bộ theme, ghép khung và tải ảnh PNG. Có bộ theme Con trai, Con gái, Gia đình, Nơ hồng; khi chụp thành công sẽ có âm báo và hiệu ứng trên màn hình.
- `ban-tin.html`: Trang Bản tin, có bài tin ngắn và mẹo học tập hay.

Trang Chụp ảnh vui cần mở qua `localhost` hoặc HTTPS để trình duyệt cho phép dùng camera. Nếu dùng VS Code, có thể mở bằng Live Server.
Trên điện thoại, nếu nút bật camera trực tiếp bị trình duyệt chặn, dùng nút `Chụp từ điện thoại` để mở camera/chọn ảnh rồi ghép khung.

## Chỉnh nội dung

- Bài học và câu hỏi: sửa trong `script.js`, phần `lessonBank`.
- Video bài học: sửa trong `script.js`, phần `videoByGrade`.
- Giải đố, game, bản tin và mẹo học: sửa trong `script.js`.
- Giao diện: sửa trong `styles.css`.

Video đang dùng nguồn YouTube bên ngoài. Ba mẹ nên xem trước và có thể thay đường dẫn nếu muốn.
