@extends('layouts.admin')

@section('title', 'Quản lý lớp học - MGST')
@section('heading', 'Quản lý lớp học')
@section('body-class', 'admin-dashboard admin-classes')

@section('content')
    <section class="classes-page-heading" aria-labelledby="class-list-title" data-classes-page>
        <h2 id="class-list-title">Danh sách lớp học</h2>
        <button class="classes-add-button" type="button" data-class-add>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            <span>Thêm lớp học</span>
        </button>
    </section>

    <section class="classes-toolbar" aria-label="Tìm kiếm và lọc lớp học">
        <label class="classes-search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.5 4.5"/></svg>
            <span class="classes-visually-hidden">Tìm kiếm lớp học</span>
            <input type="search" placeholder="Tìm kiếm theo mã lớp hoặc tên lớp" data-class-search>
        </label>
        <label class="classes-visually-hidden" for="class-course-filter">Lọc theo khóa học</label>
        <select class="classes-filter" id="class-course-filter" data-class-course-filter>
            <option value="">Tất cả khóa học</option>
            <option>Khóa 2021</option>
            <option>Khóa 2022</option>
            <option>Khóa 2023</option>
            <option>Khóa 2024</option>
        </select>
        <label class="classes-visually-hidden" for="class-status-filter">Lọc theo trạng thái</label>
        <select class="classes-filter" id="class-status-filter" data-class-status-filter>
            <option value="">Tất cả trạng thái</option>
            <option>Đang hoạt động</option>
            <option>Sắp mở</option>
            <option>Đã kết thúc</option>
        </select>
    </section>

    <section class="classes-table-card" aria-label="Danh sách lớp học">
        <div class="classes-table-wrap">
            <table class="classes-table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã lớp</th>
                        <th scope="col">Tên lớp</th>
                        <th scope="col">Khóa học</th>
                        <th scope="col">Số lượng sinh viên</th>
                        <th scope="col">Giáo viên chủ nhiệm</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody data-class-rows>
                    @foreach ($classList as $class)
                        <tr>
                            <td>{{ $class['number'] }}</td>
                            <td>{{ $class['code'] }}</td>
                            <td class="class-name">{{ $class['name'] }}</td>
                            <td>{{ $class['course'] }}</td>
                            <td>—</td>
                            <td>{{ $class['advisor'] }}</td>
                            <td><span class="status-badge status-{{ $class['statusStyle'] }}">{{ $class['status'] }}</span></td>
                            <td>
                                <div class="classes-actions">
                                    <button class="class-action class-action-view" type="button" aria-label="Xem {{ $class['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/></svg>
                                    </button>
                                    <button class="class-action class-action-edit" type="button" aria-label="Chỉnh sửa {{ $class['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5zM13.8 6.7l3.5 3.5"/></svg>
                                    </button>
                                    <button class="class-action class-action-delete" type="button" aria-label="Xóa {{ $class['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <footer class="classes-table-footer">
            <span class="classes-count" data-class-count>Hiển thị 1 - 5 trong tổng số 42 lớp học</span>
            <nav class="classes-pagination" aria-label="Phân trang danh sách lớp học" data-class-pagination>
                <button class="class-page-button class-page-previous" type="button" data-class-page-previous disabled>Trang trước</button>
                <button class="class-page-button is-current" type="button" aria-current="page" data-class-page-number="1">1</button>
                <button class="class-page-button" type="button" data-class-page-number="2">2</button>
                <button class="class-page-button" type="button" data-class-page-number="3">3</button>
                <button class="class-page-button" type="button" data-class-page-next>Trang sau</button>
            </nav>
        </footer>
    </section>

    <dialog class="class-dialog" aria-labelledby="class-dialog-title" data-class-dialog>
        <div class="class-dialog-heading">
            <h2 id="class-dialog-title" data-class-dialog-title>Thêm lớp học</h2>
            <button class="class-dialog-close" type="button" aria-label="Đóng" data-class-dialog-close>&times;</button>
        </div>
        <form class="class-form" data-class-form>
            <div class="class-form-grid">
                <label>
                    <span>Mã lớp</span>
                    <input name="code" type="text" maxlength="30" placeholder="Ví dụ: CNTT04" required>
                </label>
                <label>
                    <span>Tên lớp</span>
                    <input name="name" type="text" maxlength="120" required>
                </label>
                <label>
                    <span>Khóa học</span>
                    <input name="course" type="text" maxlength="60" placeholder="Ví dụ: Khóa 2025" required>
                </label>
                <label>
                    <span>Giáo viên chủ nhiệm</span>
                    <input name="advisor" type="text" maxlength="120" required>
                </label>
                <label>
                    <span>Số lượng sinh viên</span>
                    <input name="studentCount" type="number" min="0" value="0" disabled>
                </label>
                <label class="class-form-wide">
                    <span>Trạng thái</span>
                    <select name="status" required>
                        <option value="Đang hoạt động">Đang hoạt động</option>
                        <option value="Sắp mở">Sắp mở</option>
                        <option value="Đã kết thúc">Đã kết thúc</option>
                    </select>
                </label>
            </div>
            <p class="class-form-error" data-class-form-error role="alert" hidden></p>
            <div class="class-form-actions">
                <button class="class-form-cancel" type="button" data-class-dialog-close>Đóng</button>
                <button class="class-form-save" type="submit" data-class-form-save>Lưu thông tin</button>
            </div>
        </form>
    </dialog>
@endsection
