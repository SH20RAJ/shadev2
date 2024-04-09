// components/Navbar.js

import Link from 'next/link';
import { getUser, user } from '../helpers/auth';

const Navbar = () => {
  return (
    <nav className="sidebar close">
    <header>
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'/>

        <div className="image-text">
            <span className="image">
                <img src="/logo.png" classNameName=" rounded-full" alt="logo"/>
            </span>

            <div className="text logo-text">
                <span className="name">Shade</span>
                <span className="profession">Be Social { (!user)? "Welcome":"Hii - "+user }</span>
            </div>
        </div>

        <i className='bx bx-chevron-right toggle'></i>
    </header>

    <div className="menu-bar">
        <div className="menu">

            <li className="search-box">
                <i className='bx bx-search icon'></i>
                <input type="text" placeholder="Search..."/>
            </li>

            <ul className="menu-links">
                <li className="nav-link">
                    <Link href="/">
                        <i className='bx bx-home-alt icon'></i>
                        <span className="text nav-text">Home</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link href="/videos">
                        <i className='bx bx-play-circle icon'></i>
                        <span className="text nav-text">Videos</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link href="/notifications">
                        <i className='bx bx-bell icon'></i>
                        <span className="text nav-text">Notifications</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link href="/explore">
                        <i className='bx bx-pie-chart-alt icon'></i>
                        <span className="text nav-text">Analytics</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link href="/likes">
                        <i className='bx bx-heart icon'></i>
                        <span className="text nav-text">Likes</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link href="/account">
                        <i className='bx bx-user-circle icon'></i>
                        <span className="text nav-text">Account</span>
                    </Link>
                </li>

            </ul>
        </div>

        <div className="bottom-content">
        <li className="">
                <Link href="/logout">
                    <i className='bx bx-log-out icon'></i>
                    <span className="text nav-text">Logout</span>
                </Link>
            </li>
            <li className="">
                <Link href="/create">
                <i className='bx bx-plus-circle icon'></i>
                    <span className="text nav-text">Create</span>
                </Link>
            </li>

            <li className="mode">
                <div className="sun-moon">
                    <i className='bx bx-moon icon moon'></i>
                    <i className='bx bx-sun icon sun'></i>
                </div>
                <span className="mode-text text">Dark mode</span>

                <div className="toggle-switch">
                    <span className="switch"></span>
                </div>
            </li>

        </div>
    </div>

</nav>
  );
};

export default Navbar;
