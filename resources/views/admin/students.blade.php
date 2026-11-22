@extends('layouts.admin')

@section('title', 'Quản lý sinh viên - MGST')
@section('heading', 'Quản lý sinh viên')
@section('body-class', 'admin-dashboard admin-students')

@section('content')
    <section class="students-page-heading" aria-labelledby="student-list-title" data-students-page>
        <h2 id="student-list-title">Danh sách sinh viên</h2>
        <button class="students-add-button" type="button" data-student-add>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            <span>Thêm sinh viên</span>
        </button>
    </section>

    <section class="students-toolbar" aria-label="Tìm kiếm và lọc sinh viên">
        <label class="students-search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.5 4.5"/></svg>
            <span class="students-visually-hidden">Tìm kiếm sinh viên</span>
            <input type="search" placeholder="Tìm kiếm theo mã sinh viên hoặc họ tên" data-student-search>
        </label>
        <label class="students-visually-hidden" for="student-class-filter">Lọc theo lớp</label>
        <select class="students-filter" id="student-class-filter" data-student-class-filter>
            <option value="">Tất cả lớp</option>
            <option>CNTT01</option>
            <option>CNTT02</option>
            <option>KT01</option>
            <option>NN01</option>
            <option>QT01</option>
            <option>CNTT03</option>
            <option>KT02</option>
            <option>NN02</option>
        </select>
        <label class="students-visually-hidden" for="student-status-filter">Lọc theo trạng thái</label>
        <select class="students-filter" id="student-status-filter" data-student-status-filter>
            <option value="">Tất cả trạng thái</option>
            <option>Đang học</option>
            <option>Bảo lưu</option>
            <option>Đã tốt nghiệp</option>
        </select>
    </section>

    <section class="students-table-card" aria-label="Danh sách sinh viên">
        <div class="students-table-wrap">
            <table class="students-table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Lớp</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody data-student-rows>
                    @foreach ($students as $student)
                        <tr>
                            <td>{{ $student['number'] }}</td>
                            <td>{{ $student['id'] }}</td>
                            <td class="student-name">{{ $student['name'] }}</td>
                            <td>{{ $student['birthDate'] }}</td>
                            <td>{{ $student['gender'] }}</td>
                            <td>{{ $student['class'] }}</td>
                            <td>{{ $student['email'] }}</td>
                            <td><span class="status-badge status-{{ $student['statusStyle'] }}">{{ $student['status'] }}</span></td>
                            <td>
                                <div class="student-actions">
                                    <button class="student-action student-action-view" type="button" aria-label="Xem {{ $student['id'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/></svg>
                                    </button>
                                    <button class="student-action student-action-edit" type="button" aria-label="Chỉnh sửa {{ $student['id'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5zM13.8 6.7l3.5 3.5"/></svg>
                                    </button>
                                    <button class="student-action student-action-delete" type="button" aria-label="Xóa {{ $student['id'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <footer class="students-table-footer">
            <span class="students-count" data-student-count>Hiển thị 1 - 5 trong tổng số 1.250 sinh viên</span>
            <nav class="students-pagination" aria-label="Phân trang danh sách sinh viên" data-student-pagination>
                <button class="page-button page-previous" type="button" data-page-previous disabled>Trang trước</button>
                <button class="page-button is-current" type="button" aria-current="page" data-page-number="1">1</button>
                <button class="page-button" type="button" data-page-number="2">2</button>
                <button class="page-button" type="button" data-page-number="3">3</button>
                <button class="page-button" type="button" data-page-next>Trang sau</button>
            </nav>
        </footer>
    </section>

    <dialog class="student-dialog" aria-labelledby="student-dialog-title" data-student-dialog>
        <div class="student-dialog-heading">
            <h2 id="student-dialog-title" data-student-dialog-title>Thêm sinh viên</h2>
            <button class="student-dialog-close" type="button" aria-label="Đóng" data-student-dialog-close>&times;</button>
        </div>
        <form class="student-form" data-student-form>
            <div class="student-form-grid">
                <label>
                    <span>Mã sinh viên</span>
                    <input name="id" type="text" maxlength="20" placeholder="Ví dụ: SV0021" required>
                </label>
                <label>
                    <span>Họ và tên</span>
                    <input name="name" type="text" maxlength="120" required>
                </label>
                <label>
                    <span>Ngày sinh</span>
                    <input name="birthDate" type="date" required>
                </label>
                <label>
                    <span>Giới tính</span>
                    <select name="gender" required>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                    </select>
                </label>
                <label>
                    <span>Lớp</span>
                    <select name="class" data-student-form-class required></select>
                </label>
                <label>
                    <span>Email</span>
                    <input name="email" type="email" maxlength="160" required>
                </label>
                <label class="student-form-wide">
                    <span>Trạng thái</span>
                    <select name="status" required>
                        <option value="Đang học">Đang học</option>
                        <option value="Bảo lưu">Bảo lưu</option>
                        <option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
                    </select>
                </label>
            </div>
            <p class="student-form-error" data-student-form-error role="alert" hidden></p>
            <div class="student-form-actions">
                <button class="student-form-cancel" type="button" data-student-dialog-close>Đóng</button>
                <button class="student-form-save" type="submit" data-student-form-save>Lưu thông tin</button>
            </div>
        </form>
    </dialog>
@endsection
