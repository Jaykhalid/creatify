<nav class="navbar navbar-admin">

    <div class="container">

        {{-- bagian kiri navigasi --}}
        <div class="navbar-admin__left row">

            {{-- tombol toggle untuk sidebar --}}
            <a href="#" class="col col-md-1 navbar-admin__left--sidebar"><i class="fas fa-bars"></i></a>

            {{-- title --}}
            <span class="col col-md">@yield('title-nav')</span>
        </div>

            {{-- bagian kanan --}}
            <div class="navbar-admin__right dropdown">
                <a href="#" class="navbar-admin__right--menu" data-toggle="dropdown">
                <img src="{{ asset('img/user/default.jpg' ) }}" alt="">
                    <span>Admin</span>
                    <i class="fas fa-caret-down"></i>
                </a>
                
                {{-- dropdown link --}}
                <div class="dropdown-menu dropdown-menu-right">
                    {{-- <a class="dropdown-item" href="#">
                        <i class="fas fa-cog"></i>
                        <span class="ml-2">Profile</span>
                    </a> --}}
                    <a class="dropdown-item" href="{{ url('auth') }}">
                        <i class="fas fa-sign-out-alt"></i>
                        <span class="ml-2">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
        
</nav>