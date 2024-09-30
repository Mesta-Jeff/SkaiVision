<!DOCTYPE html>
<html lang="en">

<head>
    <title>@yield('title', 'Default Title')</title>
    @include('includes/ui-header')
</head>

<body>
    <!-- Pre-loader start -->

    @include('includes/ui-preloader')
    <!-- Pre-loader end -->

    <div id="pcoded" class="pcoded">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">


            @include('includes/ui-topbar')

            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">

                    @include('includes/ui-sidebar')

                    <div class="content">

                        @yield('content')

                       {{--  @include('includes/ui-footer') --}}

                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Required Jquery -->
    @include('includes/ui-script')

</body>

</html>
