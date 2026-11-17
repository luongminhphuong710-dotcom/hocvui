# Học vui - Vui học

Web app học tương tác cho bé lớp 1 đến lớp 5.

## Cách mở

Mở file `index.html` bằng trình duyệt.

## Cấu trúc trang

- `index.html` (Hôm nay): 3 nhiệm vụ mỗi ngày (Toán, Tiếng Việt/Anh xen kẽ, Kỹ năng sống do bố mẹ xác nhận). Xong cả 3 thì mở Góc trò chơi, tích sao đổi quà.
- `bo-me.html` (Góc bố mẹ, khoá bằng phép tính): Tổng quan so với mục tiêu (thời gian học, số câu, tỉ lệ đúng, bài học), biểu đồ 14 ngày, Lịch sử học, Video đã xem (ẩn video không phù hợp), Mục tiêu & phần quà do bố mẹ tự điền, Hồ sơ & cài đặt.
- `common.js`: dữ liệu dùng chung (sao, nhật ký, hồ sơ) lưu trong trình duyệt.

- `hoc-bai.html` (Học bài): tự theo lớp của tài khoản. Phần **Lộ trình bài học** (4 môn: Toán, Tiếng Việt, Tiếng Anh, Kỹ năng sống) gồm các bài theo thứ tự, mỗi bài có ghi nhớ, ví dụ và 6–8 câu luyện tập; đúng từ 50% mới mở bài tiếp. Phần **Video kiến thức** tách riêng: mỗi môn ~24 video, đổi mới mỗi thứ Hai (`api/videos.js`). Nội dung bài: `curriculum.js`, `lesson-data.js`.
- `tro-choi.html`: Góc trò chơi có thanh điều khiển bên trái để chọn game (Công chúa nhỏ – thời trang, Đào vàng Tiếng Anh, Nông trại), chơi lại, toàn màn hình, mở tab mới và hẹn giờ nghỉ mắt 30 phút/ngày (ba mẹ có thể cho thêm 10 phút). Các game nằm trong thư mục `games/`.
- `giai-tri.html`: Trang Giải trí, có Giải đố, Mini game, Game khác và video truyện cổ tích.
- `chup-anh-vui.html`: Trang Chụp ảnh vui, có photobooth dùng camera trước, chọn bộ theme, ghép khung và tải ảnh PNG. Có bộ theme Con trai, Con gái, Gia đình, Nơ hồng; khi chụp thành công sẽ có âm báo và hiệu ứng trên màn hình.

Trang Chụp ảnh vui cần mở qua `localhost` hoặc HTTPS để trình duyệt cho phép dùng camera. Nếu dùng VS Code, có thể mở bằng Live Server.
Trên điện thoại, nếu nút bật camera trực tiếp bị trình duyệt chặn, dùng nút `Chụp từ điện thoại` để mở camera/chọn ảnh rồi ghép khung.

## Chỉnh nội dung

- Bài học và câu hỏi: sửa trong `script.js`, phần `lessonBank`.
- Video bài học: sửa trong `script.js`, phần `videoByGrade`.
- Giải đố, game, bản tin và mẹo học: sửa trong `script.js`.
- Giao diện: sửa trong `styles.css`.

Video đang dùng nguồn YouTube bên ngoài. Ba mẹ nên xem trước và có thể thay đường dẫn nếu muốn.
