<aside class="sidebar" aria-label="Điều hướng chính">
    <a class="brand" href="{{ route('admin.dashboard') }}" aria-label="MGST - Tổng quan">
        <span class="brand-mark">MG</span>
        <span class="brand-name">MGST</span>
    </a>

    <nav class="sidebar-nav">
        <a class="sidebar-link{{ request()->routeIs('admin.dashboard') ? ' is-active' : '' }}" href="{{ route('admin.dashboard') }}" @if (request()->routeIs('admin.dashboard')) aria-current="page" @endif>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>
            <span>Tổng quan</span>
        </a>
        <a class="sidebar-link{{ request()->routeIs('admin.students') ? ' is-active' : '' }}" href="{{ route('admin.students') }}" @if (request()->routeIs('admin.students')) aria-current="page" @endif>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19v-1.5a5.5 5.5 0 0 1 11 0V19zM16 5.5a3 3 0 0 1 0 5.8M18 14a4.5 4.5 0 0 1 2.5 4v1"/></svg>
            <span>Quản lý sinh viên</span>
        </a>
        <a class="sidebar-link{{ request()->routeIs('admin.classes') ? ' is-active' : '' }}" href="{{ route('admin.classes') }}" @if (request()->routeIs('admin.classes')) aria-current="page" @endif>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16M6 20V9l6-5 6 5v11M10 20v-6h4v6"/></svg>
            <span>Quản lý lớp học</span>
        </a>
        <a class="sidebar-link{{ request()->routeIs('admin.subjects') ? ' is-active' : '' }}" href="{{ route('admin.subjects') }}" @if (request()->routeIs('admin.subjects')) aria-current="page" @endif>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>
            <span>Quản lý môn học</span>
        </a>
        <a class="sidebar-link" href="#" aria-disabled="true">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>
            <span>Quản lý điểm</span>
        </a>
        <a class="sidebar-link{{ request()->routeIs('admin.schedules') ? ' is-active' : '' }}" href="{{ route('admin.schedules') }}" @if (request()->routeIs('admin.schedules')) aria-current="page" @endif>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>
            <span>Quản lý lịch học</span>
        </a>
        <a class="sidebar-link sidebar-link-results" href="#" aria-disabled="true">
            <span class="results-mark" aria-hidden="true"></span>
            <span>Kết Quả Học Tập</span>
        </a>
    </nav>

    <a class="logout-link" href="#" aria-disabled="true">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17l5-5-5-5M15 12H3M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/></svg>
        <span>Đăng xuất</span>
    </a>
</aside>
