<?php

namespace Tests\Feature;

use Tests\TestCase;

class AdminSchedulesTest extends TestCase
{
    public function test_admin_schedules_url_renders_the_schedule_list_and_marks_its_menu_active(): void
    {
        $this->withoutVite();

        $response = $this->get('/admin/schedules');

        $response->assertOk()
            ->assertSee('Danh sách lịch học')
            ->assertSee('Tìm kiếm theo mã môn học hoặc tên môn học')
            ->assertSee('Tất cả các thứ')
            ->assertSee('Tất cả học kỳ')
            ->assertSee('LH001')
            ->assertSee('Tiết bắt đầu')
            ->assertSee('Tiết kết thúc')
            ->assertSee('data-schedules-page', false)
            ->assertSee('data-schedule-dialog', false)
            ->assertSee('name="startPeriod"', false)
            ->assertSee('name="endPeriod"', false)
            ->assertSee('class="sidebar-link is-active"', false)
            ->assertSee('/admin/schedules', false);
    }
}
