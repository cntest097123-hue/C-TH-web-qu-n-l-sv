<?php

namespace Tests\Feature;

use Tests\TestCase;

class AdminStudentsTest extends TestCase
{
    public function test_admin_students_url_renders_the_student_list_and_marks_its_menu_active(): void
    {
        $this->withoutVite();

        $response = $this->get('/admin/students');

        $response->assertOk()
            ->assertSee('Danh sách sinh viên')
            ->assertSee('Tìm kiếm theo mã sinh viên hoặc họ tên')
            ->assertSee('SV0005')
            ->assertSee('Đã tốt nghiệp')
            ->assertSee('data-students-page', false)
            ->assertSee('data-student-search', false)
            ->assertSee('data-student-dialog', false)
            ->assertSee('data-student-form', false)
            ->assertSee('class="sidebar-link is-active"', false)
            ->assertSee('/admin/students', false);
    }
}
