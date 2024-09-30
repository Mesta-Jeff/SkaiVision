
// import React from 'react'

import { Outlet } from "react-router-dom"
import Config from "../../helpers/config"

const SetUpLayout = () => {

    const currentYear = new Date().getFullYear();


    return (
        <>

            <div id="layout-wrapper">
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex text-center">
                            {/* LOGO */}
                            <div className="navbar-brand-box mt-4">
                                <a href="/" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="/temp/assets/images/sv-bar-white.png" alt height={22} />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="/temp/assets/images/sv-bar-white.png" alt height={35} />
                                    </span>
                                </a>
                            </div>
                            <div className="ms-5 mt-5">
                                <h2 className="header-item auth-setup-title">{Config[0].APP_NAME}</h2>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="d-lg-inline-block ms-1">
                                <span className="header-item noti-icon">Guest</span>
                            </div>
                        </div>
                    </div>
                </header>


                <div className="topnav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
                            <div className="collapse navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-muted" >
                                            <div className="marquee">
                                                <span>
                                                    Welcome to the ultimate school manager, we are glad to have you here, do you want to secure your school data in the cloud...? then worry not because we have your back, sign up today and you will not regret using this system to manage your school affairs. This is what we stand for  and who we are...
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>


                <div className="main-content">

                    <Outlet />



                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    &copy; {currentYear} {Config[0].APP_ALLIASE} &lt;&gt; {Config[0].APP_VERSION}
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-end d-none d-sm-block">
                                        Crafted with <i className="fas fa-heart text-danger"></i> by {Config[0].BRAND_NAME} Team
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>


        </>
    )
}

export default SetUpLayout
