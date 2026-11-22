<?php

namespace Tests\Feature;

use Tests\TestCase;

class AdminDashboardTest extends TestCase
{
    public function test_admin_dashboard_url_renders_the_dashboard_with_sample_data(): void
    {
        $this->withoutVite();

        $response = $this->get('/admin/dashboard');

        $response->assertOk()
            ->assertSee('Tổng quan')
            ->assertSee('3.680')
            ->assertSee('SV0004')
            ->assertSee('Đã tốt nghiệp')
            ->assertSee('data-dashboard-page', false)
            ->assertSee('data-dashboard-stat="students"', false)
            ->assertSee('data-dashboard-stat="classes"', false)
            ->assertSee('data-dashboard-stat="subjects"', false)
            ->assertSee('data-dashboard-stat="registrations"', false)
            ->assertSee('data-dashboard-class-chart', false)
            ->assertSee('data-dashboard-latest-students', false);
    }
}
