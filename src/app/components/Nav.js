// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav class="sidebar close">
    <header>
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'/>

        <div class="image-text">
            <span class="image">
                <img src="/logo.png" className=" rounded-full" alt="logo"/>
            </span>

            <div class="text logo-text">
                <span class="name">Shade</span>
                <span class="profession">Be Social</span>
            </div>
        </div>

        <i class='bx bx-chevron-right toggle'></i>
    </header>

    <div class="menu-bar">
        <div class="menu">

            <li class="search-box">
                <i class='bx bx-search icon'></i>
                <input type="text" placeholder="Search..."/>
            </li>

            <ul class="menu-links">
                <li class="nav-link">
                    <Link href="/">
                        <i class='bx bx-home-alt icon'></i>
                        <span class="text nav-text">Home</span>
                    </Link>
                </li>

                <li class="nav-link">
                    <Link href="#">
                        <i class='bx bx-play-circle icon'></i>
                        <span class="text nav-text">Videos</span>
                    </Link>
                </li>

                <li class="nav-link">
                    <Link href="#">
                        <i class='bx bx-bell icon'></i>
                        <span class="text nav-text">Notifications</span>
                    </Link>
                </li>

                <li class="nav-link">
                    <Link href="#">
                        <i class='bx bx-pie-chart-alt icon'></i>
                        <span class="text nav-text">Analytics</span>
                    </Link>
                </li>

                <li class="nav-link">
                    <Link href="#">
                        <i class='bx bx-heart icon'></i>
                        <span class="text nav-text">Likes</span>
                    </Link>
                </li>

                <li class="nav-link">
                    <Link href="#">
                        <i class='bx bx-user-circle icon'></i>
                        <span class="text nav-text">Account</span>
                    </Link>
                </li>

            </ul>
        </div>

        <div class="bottom-content">
            <li class="">
                <Link href="#">
                    <i class='bx bx-log-out icon'></i>
                    <span class="text nav-text">Logout</span>
                </Link>
            </li>

            <li class="mode">
                <div class="sun-moon">
                    <i class='bx bx-moon icon moon'></i>
                    <i class='bx bx-sun icon sun'></i>
                </div>
                <span class="mode-text text">Dark mode</span>

                <div class="toggle-switch">
                    <span class="switch"></span>
                </div>
            </li>

        </div>
    </div>

</nav>
  );
};

export default Navbar;
