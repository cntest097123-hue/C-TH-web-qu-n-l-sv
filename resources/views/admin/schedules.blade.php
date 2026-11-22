@extends('layouts.admin')

@section('title', 'Quản lý lịch học - MGST')
@section('heading', 'Quản lý lịch học')
@section('body-class', 'admin-dashboard admin-schedules')

@section('content')
    <section class="schedules-page-heading" aria-labelledby="schedule-list-title" data-schedules-page>
        <h2 id="schedule-list-title">Danh sách lịch học</h2>
        <button class="schedules-add-button" type="button" data-schedule-add>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            <span>Thêm lịch học</span>
        </button>
    </section>

    <section class="schedules-toolbar" aria-label="Tìm kiếm và lọc lịch học">
        <label class="schedules-search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.5 4.5"/></svg>
            <span class="schedules-visually-hidden">Tìm kiếm lịch học</span>
            <input type="search" placeholder="Tìm kiếm theo mã môn học hoặc tên môn học" data-schedule-search>
        </label>
        <label class="schedules-visually-hidden" for="schedule-class-filter">Lọc theo lớp</label>
        <select class="schedules-filter" id="schedule-class-filter" data-schedule-class-filter>
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
        <label class="schedules-visually-hidden" for="schedule-day-filter">Lọc theo thứ</label>
        <select class="schedules-filter" id="schedule-day-filter" data-schedule-day-filter>
            <option value="">Tất cả các thứ</option>
            <option>Thứ 2</option>
            <option>Thứ 3</option>
            <option>Thứ 4</option>
            <option>Thứ 5</option>
            <option>Thứ 6</option>
            <option>Thứ 7</option>
            <option>Chủ nhật</option>
        </select>
        <label class="schedules-visually-hidden" for="schedule-semester-filter">Lọc theo học kỳ</label>
        <select class="schedules-filter" id="schedule-semester-filter" data-schedule-semester-filter>
            <option value="">Tất cả học kỳ</option>
            <option>Học kỳ 1 năm học 2025-2026</option>
            <option>Học kỳ 2 năm học 2025-2026</option>
        </select>
    </section>

    <section class="schedules-table-card" aria-label="Danh sách lịch học">
        <div class="schedules-table-wrap">
            <table class="schedules-table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã lịch học</th>
                        <th scope="col">Tên môn học</th>
                        <th scope="col">Lớp</th>
                        <th scope="col">Thứ</th>
                        <th scope="col">Tiết bắt đầu</th>
                        <th scope="col">Tiết kết thúc</th>
                        <th scope="col">Phòng học</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody data-schedule-rows>
                    @foreach ($schedules as $schedule)
                        <tr>
                            <td>{{ $schedule['number'] }}</td>
                            <td>{{ $schedule['code'] }}</td>
                            <td class="schedule-subject-name">{{ $schedule['subjectName'] }}</td>
                            <td>{{ $schedule['class'] }}</td>
                            <td>{{ $schedule['day'] }}</td>
                            <td>Tiết {{ $schedule['startPeriod'] }}</td>
                            <td>Tiết {{ $schedule['endPeriod'] }}</td>
                            <td>{{ $schedule['room'] }}</td>
                            <td>
                                <div class="schedules-actions">
                                    <button class="schedule-action schedule-action-view" type="button" aria-label="Xem {{ $schedule['code'] }}" data-schedule-action="view" data-schedule-code="{{ $schedule['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/></svg>
                                    </button>
                                    <button class="schedule-action schedule-action-edit" type="button" aria-label="Chỉnh sửa {{ $schedule['code'] }}" data-schedule-action="edit" data-schedule-code="{{ $schedule['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5zM13.8 6.7l3.5 3.5"/></svg>
                                    </button>
                                    <button class="schedule-action schedule-action-delete" type="button" aria-label="Xóa {{ $schedule['code'] }}" data-schedule-action="delete" data-schedule-code="{{ $schedule['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <footer class="schedules-table-footer">
            <span class="schedules-count" data-schedule-count>Hiển thị 1 - 5 trong tổng số 64 lịch học</span>
            <nav class="schedules-pagination" aria-label="Phân trang danh sách lịch học" data-schedule-pagination>
                <button class="schedule-page-button schedule-page-previous" type="button" data-schedule-page-previous disabled>Trang trước</button>
                <button class="schedule-page-button is-current" type="button" aria-current="page" data-schedule-page-number="1">1</button>
                <button class="schedule-page-button" type="button" data-schedule-page-number="2">2</button>
                <button class="schedule-page-button" type="button" data-schedule-page-number="3">3</button>
                <button class="schedule-page-button" type="button" data-schedule-page-next>Trang sau</button>
            </nav>
        </footer>
    </section>

    <dialog class="schedule-dialog" aria-labelledby="schedule-dialog-title" data-schedule-dialog>
        <div class="schedule-dialog-heading">
            <h2 id="schedule-dialog-title" data-schedule-dialog-title>Thêm lịch học</h2>
            <button class="schedule-dialog-close" type="button" aria-label="Đóng" data-schedule-dialog-close>&times;</button>
        </div>
        <form class="schedule-form" data-schedule-form>
            <div class="schedule-form-grid">
                <label>
                    <span>Mã lịch học</span>
                    <input name="code" type="text" maxlength="30" placeholder="Ví dụ: LH065" required>
                </label>
                <label>
                    <span>Môn học</span>
                    <select name="subjectCode" data-schedule-form-subject required>
                        <option value="">Chọn môn học</option>
                        <option value="MH001">MH001 - Lập trình cơ bản</option>
                        <option value="MH002">MH002 - Cơ sở dữ liệu</option>
                        <option value="MH003">MH003 - Kinh tế vĩ mô</option>
                        <option value="MH004">MH004 - Tiếng Anh chuyên ngành</option>
                        <option value="MH005">MH005 - Nguyên lý marketing</option>
                    </select>
                </label>
                <label>
                    <span>Lớp</span>
                    <select name="classCode" data-schedule-form-class required>
                        <option value="">Chọn lớp</option>
                        <option>CNTT01</option>
                        <option>CNTT02</option>
                        <option>KT01</option>
                        <option>NN01</option>
                        <option>QT01</option>
                        <option>CNTT03</option>
                        <option>KT02</option>
                        <option>NN02</option>
                    </select>
                </label>
                <label>
                    <span>Thứ trong tuần</span>
                    <select name="day" data-schedule-form-day required>
                        <option>Thứ 2</option>
                        <option>Thứ 3</option>
                        <option>Thứ 4</option>
                        <option>Thứ 5</option>
                        <option>Thứ 6</option>
                        <option>Thứ 7</option>
                        <option>Chủ nhật</option>
                    </select>
                </label>
                <label>
                    <span>Tiết bắt đầu</span>
                    <input name="startPeriod" type="number" min="1" max="12" step="1" required>
                </label>
                <label>
                    <span>Tiết kết thúc</span>
                    <input name="endPeriod" type="number" min="1" max="12" step="1" required>
                </label>
                <label>
                    <span>Phòng học</span>
                    <input name="room" type="text" maxlength="40" placeholder="Ví dụ: A101" required>
                </label>
                <label class="schedule-form-wide">
                    <span>Học kỳ</span>
                    <select name="semester" data-schedule-form-semester required>
                        <option>Học kỳ 1 năm học 2025-2026</option>
                        <option>Học kỳ 2 năm học 2025-2026</option>
                    </select>
                </label>
            </div>
            <p class="schedule-form-error" data-schedule-form-error role="alert" hidden></p>
            <div class="schedule-form-actions">
                <button class="schedule-form-cancel" type="button" data-schedule-dialog-close>Đóng</button>
                <button class="schedule-form-save" type="submit" data-schedule-form-save>Lưu thông tin</button>
            </div>
        </form>
    </dialog>
@endsection
