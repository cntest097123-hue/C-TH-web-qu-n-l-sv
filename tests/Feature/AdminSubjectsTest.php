<?php

namespace Tests\Feature;

use Tests\TestCase;

class AdminSubjectsTest extends TestCase
{
    public function test_admin_subjects_url_renders_the_subject_list_and_marks_its_menu_active(): void
    {
        $this->withoutVite();

        $response = $this->get('/admin/subjects');

        $response->assertOk()
            ->assertSee('Danh sách môn học')
            ->assertSee('Tìm kiếm theo mã môn học hoặc tên môn học')
            ->assertSee('MH005')
            ->assertSee('Ngừng giảng dạy')
            ->assertSee('data-subjects-page', false)
            ->assertSee('data-subject-search', false)
            ->assertSee('data-subject-credit-filter', false)
            ->assertSee('data-subject-status-filter', false)
            ->assertSee('data-subject-dialog', false)
            ->assertSee('name="code"', false)
            ->assertSee('class="sidebar-link is-active"', false)
            ->assertSee('/admin/subjects', false);
    }
}
