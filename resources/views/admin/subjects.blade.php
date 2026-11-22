@extends('layouts.admin')

@section('title', 'Quản lý môn học - MGST')
@section('heading', 'Quản lý môn học')
@section('body-class', 'admin-dashboard admin-subjects')

@section('content')
    <section class="subjects-page-heading" aria-labelledby="subject-list-title" data-subjects-page>
        <h2 id="subject-list-title">Danh sách môn học</h2>
        <button class="subjects-add-button" type="button" data-subject-add>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            <span>Thêm môn học</span>
        </button>
    </section>

    <section class="subjects-toolbar" aria-label="Tìm kiếm và lọc môn học">
        <label class="subjects-search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.5 4.5"/></svg>
            <span class="subjects-visually-hidden">Tìm kiếm môn học</span>
            <input type="search" placeholder="Tìm kiếm theo mã môn học hoặc tên môn học" data-subject-search>
        </label>
        <label class="subjects-visually-hidden" for="subject-credit-filter">Lọc theo số tín chỉ</label>
        <select class="subjects-filter" id="subject-credit-filter" data-subject-credit-filter>
            <option value="">Tất cả số tín chỉ</option>
            <option>2 tín chỉ</option>
            <option>3 tín chỉ</option>
            <option>4 tín chỉ</option>
        </select>
        <label class="subjects-visually-hidden" for="subject-status-filter">Lọc theo trạng thái</label>
        <select class="subjects-filter" id="subject-status-filter" data-subject-status-filter>
            <option value="">Tất cả trạng thái</option>
            <option>Đang mở</option>
            <option>Tạm dừng</option>
            <option>Ngừng giảng dạy</option>
        </select>
    </section>

    <section class="subjects-table-card" aria-label="Danh sách môn học">
        <div class="subjects-table-wrap">
            <table class="subjects-table">
                <colgroup>
                    <col class="subject-number-column">
                    <col class="subject-code-column">
                    <col class="subject-name-column">
                    <col class="subject-credits-column">
                    <col class="subject-description-column">
                    <col class="subject-status-column">
                    <col class="subject-actions-column">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã môn học</th>
                        <th scope="col">Tên môn học</th>
                        <th scope="col">Số tín chỉ</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody data-subject-rows>
                    @foreach ($subjects as $subject)
                        <tr>
                            <td>{{ $subject['number'] }}</td>
                            <td>{{ $subject['code'] }}</td>
                            <td class="subject-name">{{ $subject['name'] }}</td>
                            <td>{{ $subject['credits'] }}</td>
                            <td class="subject-description">{{ $subject['description'] }}</td>
                            <td><span class="status-badge status-{{ $subject['statusStyle'] }}">{{ $subject['status'] }}</span></td>
                            <td>
                                <div class="subjects-actions">
                                    <button class="subject-action subject-action-view" type="button" aria-label="Xem {{ $subject['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/></svg>
                                    </button>
                                    <button class="subject-action subject-action-edit" type="button" aria-label="Chỉnh sửa {{ $subject['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5zM13.8 6.7l3.5 3.5"/></svg>
                                    </button>
                                    <button class="subject-action subject-action-delete" type="button" aria-label="Xóa {{ $subject['code'] }}">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <footer class="subjects-table-footer">
            <span class="subjects-count" data-subject-count>Hiển thị 1 - {{ count($subjects) }} trong tổng số {{ count($subjects) }} môn học</span>
            <nav class="subjects-pagination" aria-label="Phân trang danh sách môn học" data-subject-pagination>
                <button class="subject-page-button subject-page-previous" type="button" data-subject-page-previous disabled>Trang trước</button>
                <button class="subject-page-button is-current" type="button" aria-current="page" data-subject-page-number="1">1</button>
                <button class="subject-page-button" type="button" data-subject-page-number="2">2</button>
                <button class="subject-page-button" type="button" data-subject-page-number="3">3</button>
                <button class="subject-page-button" type="button" data-subject-page-next>Trang sau</button>
            </nav>
        </footer>
    </section>

    <dialog class="subject-dialog" aria-labelledby="subject-dialog-title" data-subject-dialog>
        <div class="subject-dialog-heading">
            <h2 id="subject-dialog-title" data-subject-dialog-title>Thêm môn học</h2>
            <button class="subject-dialog-close" type="button" aria-label="Đóng" data-subject-dialog-close>&times;</button>
        </div>
        <form class="subject-form" data-subject-form>
            <div class="subject-form-grid">
                <label>
                    <span>Mã môn học</span>
                    <input name="code" type="text" maxlength="30" placeholder="Ví dụ: MH011" required>
                </label>
                <label>
                    <span>Tên môn học</span>
                    <input name="name" type="text" maxlength="120" required>
                </label>
                <label>
                    <span>Số tín chỉ</span>
                    <input name="credits" type="number" min="1" max="30" step="1" required>
                </label>
                <label>
                    <span>Trạng thái</span>
                    <select name="status" required>
                        <option value="Đang mở">Đang mở</option>
                        <option value="Tạm dừng">Tạm dừng</option>
                        <option value="Ngừng giảng dạy">Ngừng giảng dạy</option>
                    </select>
                </label>
                <label class="subject-form-wide">
                    <span>Mô tả</span>
                    <textarea name="description" rows="3" maxlength="500"></textarea>
                </label>
            </div>
            <p class="subject-form-error" data-subject-form-error role="alert" hidden></p>
            <div class="subject-form-actions">
                <button class="subject-form-cancel" type="button" data-subject-dialog-close>Đóng</button>
                <button class="subject-form-save" type="submit" data-subject-form-save>Lưu thông tin</button>
            </div>
        </form>
    </dialog>
@endsection
