# MGST – Hệ thống quản lý sinh viên

## 1. Giới thiệu
MGST là dự án xây dựng hệ thống quản lý sinh viên, hỗ trợ quản trị viên quản lý thông tin sinh viên và các hoạt động học tập. Sinh viên có thể đăng nhập để xem lịch học và kết quả học tập của mình.

## 2. Công nghệ sử dụng
- **Backend:** Laravel 13
- **Ngôn ngữ:** PHP
- **Cơ sở dữ liệu:** MySQL
- **Frontend:** HTML, CSS, JavaScript, Blade
- **Quản lý mã nguồn:** Git và GitHub

## 3. Chức năng dự kiến

### Quản trị viên
- Đăng nhập hệ thống.
- Quản lý sinh viên.
- Quản lý lớp học.
- Quản lý môn học.
- Quản lý lịch học.
- Quản lý điểm.
- Xem kết quả học tập.

### Sinh viên
- Đăng nhập hệ thống.
- Xem lịch học.
- Xem kết quả học tập cá nhân.

## 4. Cài đặt dự án
1. Clone repository về máy.
2. Cài đặt các thư viện PHP bằng `composer install`.
3. Sao chép `.env.example` thành `.env`.
4. Tạo khóa ứng dụng bằng `php artisan key:generate`.
5. Cấu hình kết nối MySQL trong `.env`.
6. Chạy migration sau khi cơ sở dữ liệu đã được chuẩn bị bằng `php artisan migrate`.
7. Khởi chạy dự án bằng `php artisan serve`.

## 5. Trạng thái dự án
Hiện tại dự án đã khởi tạo bộ khung Laravel. Các chức năng nghiệp vụ đang trong quá trình phát triển.