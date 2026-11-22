<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::view('/admin/dashboard', 'admin.dashboard', [
    'statistics' => [
        ['label' => 'Tổng sinh viên', 'value' => '1.250', 'icon' => 'students'],
        ['label' => 'Tổng lớp học', 'value' => '42', 'icon' => 'classes'],
        ['label' => 'Tổng môn học', 'value' => '86', 'icon' => 'subjects'],
        ['label' => 'Tổng lượt đăng ký học', 'value' => '3.680', 'icon' => 'registrations'],
    ],
    'academicYears' => [
        ['label' => '2020-2021', 'students' => '820', 'height' => 66],
        ['label' => '2021-2022', 'students' => '960', 'height' => 77],
        ['label' => '2022-2023', 'students' => '1.040', 'height' => 83],
        ['label' => '2023-2024', 'students' => '1.180', 'height' => 94],
        ['label' => '2024-2025', 'students' => '1.250', 'height' => 100],
    ],
    'classes' => [
        ['name' => 'CNTT01', 'students' => 320, 'width' => 100],
        ['name' => 'CNTT02', 'students' => 280, 'width' => 87.5],
        ['name' => 'KT01', 'students' => 240, 'width' => 75],
        ['name' => 'NN01', 'students' => 210, 'width' => 65.625],
        ['name' => 'QT01', 'students' => 190, 'width' => 59.375],
    ],
    'recentStudents' => [
        ['id' => 'SV0001', 'name' => 'Nguyễn Văn 01', 'class' => 'CNTT01', 'email' => 'sv0001@example.com', 'status' => 'Đang học', 'statusStyle' => 'active'],
        ['id' => 'SV0002', 'name' => 'Trần Thị 02', 'class' => 'KT01', 'email' => 'sv0002@example.com', 'status' => 'Đang học', 'statusStyle' => 'active'],
        ['id' => 'SV0003', 'name' => 'Lê Văn 03', 'class' => 'NN01', 'email' => 'sv0003@example.com', 'status' => 'Bảo lưu', 'statusStyle' => 'paused'],
        ['id' => 'SV0004', 'name' => 'Phạm Thị 04', 'class' => 'QT01', 'email' => 'sv0004@example.com', 'status' => 'Đã tốt nghiệp', 'statusStyle' => 'graduated'],
    ],
])->name('admin.dashboard');

Route::view('/admin/students', 'admin.students', [
    'students' => [
        ['number' => 1, 'id' => 'SV0001', 'name' => 'Nguyễn Văn A', 'birthDate' => '01/01/2004', 'gender' => 'Nam', 'class' => 'CNTT01', 'email' => 'sv0001@example.com', 'status' => 'Đang học', 'statusStyle' => 'active'],
        ['number' => 2, 'id' => 'SV0002', 'name' => 'Trần Thị B', 'birthDate' => '15/03/2004', 'gender' => 'Nữ', 'class' => 'KT01', 'email' => 'sv0002@example.com', 'status' => 'Đang học', 'statusStyle' => 'active'],
        ['number' => 3, 'id' => 'SV0003', 'name' => 'Lê Văn C', 'birthDate' => '22/07/2003', 'gender' => 'Nam', 'class' => 'NN01', 'email' => 'sv0003@example.com', 'status' => 'Bảo lưu', 'statusStyle' => 'paused'],
        ['number' => 4, 'id' => 'SV0004', 'name' => 'Phạm Thị D', 'birthDate' => '09/11/2002', 'gender' => 'Nữ', 'class' => 'QT01', 'email' => 'sv0004@example.com', 'status' => 'Đã tốt nghiệp', 'statusStyle' => 'graduated'],
        ['number' => 5, 'id' => 'SV0005', 'name' => 'Hoàng Văn E', 'birthDate' => '30/05/2004', 'gender' => 'Nam', 'class' => 'CNTT02', 'email' => 'sv0005@example.com', 'status' => 'Đang học', 'statusStyle' => 'active'],
    ],
])->name('admin.students');

Route::view('/admin/classes', 'admin.classes', [
    'classList' => [
        ['number' => 1, 'code' => 'CNTT01', 'name' => 'Công nghệ thông tin 01', 'course' => 'Khóa 2023', 'advisor' => 'Nguyễn Văn M', 'status' => 'Đang hoạt động', 'statusStyle' => 'active'],
        ['number' => 2, 'code' => 'CNTT02', 'name' => 'Công nghệ thông tin 02', 'course' => 'Khóa 2023', 'advisor' => 'Trần Thị N', 'status' => 'Đang hoạt động', 'statusStyle' => 'active'],
        ['number' => 3, 'code' => 'KT01', 'name' => 'Kinh tế 01', 'course' => 'Khóa 2022', 'advisor' => 'Lê Văn P', 'status' => 'Đang hoạt động', 'statusStyle' => 'active'],
        ['number' => 4, 'code' => 'NN01', 'name' => 'Ngôn ngữ Anh 01', 'course' => 'Khóa 2024', 'advisor' => 'Phạm Thị Q', 'status' => 'Sắp mở', 'statusStyle' => 'paused'],
        ['number' => 5, 'code' => 'QT01', 'name' => 'Quản trị kinh doanh 01', 'course' => 'Khóa 2021', 'advisor' => 'Hoàng Văn R', 'status' => 'Đã kết thúc', 'statusStyle' => 'graduated'],
    ],
])->name('admin.classes');

Route::view('/admin/subjects', 'admin.subjects', [
    'subjects' => [
        ['number' => 1, 'code' => 'MH001', 'name' => 'Lập trình cơ bản', 'credits' => 3, 'description' => 'Kiến thức nền tảng về lập trình và tư duy thuật toán', 'status' => 'Đang mở', 'statusStyle' => 'active'],
        ['number' => 2, 'code' => 'MH002', 'name' => 'Cơ sở dữ liệu', 'credits' => 3, 'description' => 'Thiết kế, truy vấn và quản trị cơ sở dữ liệu quan hệ', 'status' => 'Đang mở', 'statusStyle' => 'active'],
        ['number' => 3, 'code' => 'MH003', 'name' => 'Kinh tế vĩ mô', 'credits' => 2, 'description' => 'Các nguyên lý cơ bản về cung, cầu và hành vi kinh tế', 'status' => 'Đang mở', 'statusStyle' => 'active'],
        ['number' => 4, 'code' => 'MH004', 'name' => 'Tiếng Anh chuyên ngành', 'credits' => 4, 'description' => 'Rèn luyện từ vựng và kỹ năng giao tiếp chuyên ngành', 'status' => 'Tạm dừng', 'statusStyle' => 'paused'],
        ['number' => 5, 'code' => 'MH005', 'name' => 'Nguyên lý marketing', 'credits' => 3, 'description' => 'Giới thiệu các khái niệm và chiến lược marketing', 'status' => 'Ngừng giảng dạy', 'statusStyle' => 'graduated'],
    ],
])->name('admin.subjects');

Route::view('/admin/schedules', 'admin.schedules', [
    'schedules' => [
        ['number' => 1, 'code' => 'LH001', 'subjectCode' => 'MH001', 'subjectName' => 'Lập trình cơ bản', 'class' => 'CNTT01', 'day' => 'Thứ 2', 'startPeriod' => 1, 'endPeriod' => 3, 'room' => 'A101', 'semester' => 'Học kỳ 1 năm học 2025-2026'],
        ['number' => 2, 'code' => 'LH002', 'subjectCode' => 'MH002', 'subjectName' => 'Cơ sở dữ liệu', 'class' => 'CNTT02', 'day' => 'Thứ 3', 'startPeriod' => 4, 'endPeriod' => 6, 'room' => 'B203', 'semester' => 'Học kỳ 1 năm học 2025-2026'],
        ['number' => 3, 'code' => 'LH003', 'subjectCode' => 'MH003', 'subjectName' => 'Kinh tế vĩ mô', 'class' => 'KT01', 'day' => 'Thứ 4', 'startPeriod' => 1, 'endPeriod' => 2, 'room' => 'C105', 'semester' => 'Học kỳ 1 năm học 2025-2026'],
        ['number' => 4, 'code' => 'LH004', 'subjectCode' => 'MH004', 'subjectName' => 'Tiếng Anh chuyên ngành', 'class' => 'NN01', 'day' => 'Thứ 5', 'startPeriod' => 7, 'endPeriod' => 10, 'room' => 'D302', 'semester' => 'Học kỳ 1 năm học 2025-2026'],
        ['number' => 5, 'code' => 'LH005', 'subjectCode' => 'MH005', 'subjectName' => 'Nguyên lý marketing', 'class' => 'QT01', 'day' => 'Thứ 6', 'startPeriod' => 4, 'endPeriod' => 6, 'room' => 'C201', 'semester' => 'Học kỳ 1 năm học 2025-2026'],
    ],
])->name('admin.schedules');
