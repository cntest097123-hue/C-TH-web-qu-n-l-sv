<?php

namespace Tests\Feature;

use Tests\TestCase;

class AdminClassesTest extends TestCase
{
    public function test_admin_classes_url_renders_the_class_list_and_marks_its_menu_active(): void
    {
        $this->withoutVite();

        $response = $this->get('/admin/classes');

        $response->assertOk()
            ->assertSee('Danh sách lớp học')
            ->assertSee('Tìm kiếm theo mã lớp hoặc tên lớp')
            ->assertSee('CNTT01')
            ->assertSee('Sắp mở')
            ->assertSee('Đã kết thúc')
            ->assertSee('data-classes-page', false)
            ->assertSee('data-class-search', false)
            ->assertSee('data-class-dialog', false)
            ->assertSee('name="studentCount"', false)
            ->assertSee('class="sidebar-link is-active"', false)
            ->assertSee('/admin/classes', false);
    }
}
