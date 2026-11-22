<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="color-scheme" content="light">

        <title>@yield('title', 'Dashboard Admin - MGST')</title>

        @fonts
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="@yield('body-class', 'admin-dashboard')">
        <div class="demo-notice" data-demo-notice role="status" aria-live="polite" hidden></div>
        <div class="dashboard-shell">
            @include('admin.partials.sidebar')

            <div class="dashboard-main">
                @include('admin.partials.header')

                <main class="dashboard-content">
                    @yield('content')
                </main>
            </div>
        </div>
    </body>
</html>
