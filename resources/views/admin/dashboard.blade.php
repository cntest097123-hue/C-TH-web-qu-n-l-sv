@extends('layouts.admin')

@section('title', 'Tổng quan - MGST')

@section('content')
    <section class="statistics-grid" aria-label="Thống kê tổng quan" data-dashboard-page>
        @foreach ($statistics as $statistic)
            <article class="stat-card">
                <span class="stat-icon" aria-hidden="true">
                    @switch($statistic['icon'])
                        @case('students')
                            <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 19v-1a6 6 0 0 1 12 0v1zM16 5.5a3 3 0 0 1 0 5.8M18 14a4 4 0 0 1 3 4v1"/></svg>
                            @break
                        @case('classes')
                            <svg viewBox="0 0 24 24"><path d="M4 20h16M6 20V9l6-5 6 5v11M10 20v-6h4v6"/></svg>
                            @break
                        @case('subjects')
                            <svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 17h8"/></svg>
                            @break
                        @case('registrations')
                            <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 12 3 3 6-7"/></svg>
                            @break
                    @endswitch
                </span>
                <div class="stat-copy">
                    <span class="stat-label">{{ $statistic['label'] }}</span>
                    <strong class="stat-value" data-dashboard-stat="{{ $statistic['icon'] }}">{{ $statistic['value'] }}</strong>
                </div>
            </article>
        @endforeach
    </section>

    <section class="charts-grid" aria-label="Biểu đồ thống kê">
        <article class="panel enrollment-panel">
            <h2>Thống kê sinh viên theo năm học</h2>
            <div class="year-chart" role="img" aria-label="Số sinh viên tăng từ 820 năm học 2020-2021 lên 1.250 năm học 2024-2025">
                @foreach ($academicYears as $year)
                    <div class="year-column">
                        <span class="bar-value">{{ $year['students'] }}</span>
                        <span class="year-bar{{ $loop->last ? ' is-highlighted' : '' }}" style="--bar-height: {{ $year['height'] }}%"></span>
                        <span class="year-label">{{ $year['label'] }}</span>
                    </div>
                @endforeach
            </div>
        </article>

        <article class="panel classes-panel">
            <h2>Phân bố sinh viên theo lớp</h2>
            <div class="class-chart" data-dashboard-class-chart>
                @foreach ($classes as $class)
                    <div class="class-row">
                        <span class="class-name">{{ $class['name'] }}</span>
                        <span class="class-track"><span class="class-bar" style="--bar-width: {{ $class['width'] }}%"></span></span>
                        <span class="class-value">{{ $class['students'] }}</span>
                    </div>
                @endforeach
            </div>
        </article>
    </section>

    <section class="panel students-panel" aria-labelledby="latest-students-title">
        <h2 id="latest-students-title">Sinh viên mới nhất</h2>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Lớp</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                    </tr>
                </thead>
                <tbody data-dashboard-latest-students>
                    @foreach ($recentStudents as $student)
                        <tr>
                            <td>{{ $student['id'] }}</td>
                            <td>{{ $student['name'] }}</td>
                            <td>{{ $student['class'] }}</td>
                            <td>{{ $student['email'] }}</td>
                            <td><span class="status-badge status-{{ $student['statusStyle'] }}">{{ $student['status'] }}</span></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
@endsection
