import React from 'react'
import './header.css'

const Header = () =>
    // Navbar
    <nav class="navbar sticky-top navbar-expand-lg navbar-light">
        <div class="container">
            {/* Navbar Brand*/}
            <a class="navbar-brand"
               href="index.html">
                Econ<span>Studio</span>
            </a>

            {/* collapse without jquery*/}
            <input type="checkbox" id="no-jq-navbar-toggler" class="d-none" />

            <label for="no-jq-navbar-toggler"
                   class="navbar-toggler"
                   data-toggle="collapse"
                   data-target="#navbarSupportedContent"
                   aria-controls="navbarSupportedContent"
                   aria-expanded="false"
                   aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </label>

            <div class="navbar-menu collapse navbar-collapse"
                 id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link"
                           aria-current="page"
                           href="#">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">
                            Courses
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active"
                           href="/courses/table">
                            Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">
                            Log In
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">
                            Register
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default Header