import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () =>
    // Navbar
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container">
            <Link className="navbar-brand"
                  to="/">
                Econ<span>Studio</span>
            </Link>

            <input type="checkbox" id="no-jq-navbar-toggler" className="d-none" />

            <label
                // for="no-jq-navbar-toggler"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </label>

            <div class="navbar-menu collapse navbar-collapse"
                 id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link"
                              aria-current="page"
                              to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/">
                            Gallery
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active"
                              to="/courses/table">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/">
                            Log In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default Header