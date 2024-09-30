// import React from 'react'
import { Link } from 'react-router-dom'

const SidebarAdmin = () => {
  
  return (
    <nav className="pcoded-navbar">
      <div className="sidebar_toggle"><a href="#"><i className="icon-close icons" /></a></div>
      <div className="pcoded-inner-navbar main-menu">
        <div className>
          <div className="main-menu-header">
            <img className="img-80 img-radius" src="/temp/assets/images/avatar-4.jpg" alt="User" />
            <div className="user-details">
              <span id="more-details">Username here<i className="fa fa-caret-down" /></span>
            </div>
          </div>
          <div className="main-menu-content">
            <ul>
              <li className="more-details">
                <a href="user-profile.html"><i className="ti-user" />View Profile</a>
                <a href="#!"><i className="ti-settings" />Settings</a>
                <a href="auth-normal-sign-in.html"><i className="ti-layout-sidebar-left" />Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-15 p-b-0">

        </div>
        <div className="pcoded-navigation-label">Navigation</div>
        <ul className="pcoded-item pcoded-left-item">
          <li className="active">
            <Link to="/ad/dashboard" className="waves-effect waves-dark">
              <span className="pcoded-micon"><i className="ti-home" /><b>D</b></span>
              <span className="pcoded-mtext">Dashboard</span>
              <span className="pcoded-mcaret" />
            </Link>
          </li>
          <li className>
            <Link to="/ad/logs" className="waves-effect waves-dark">
              <span className="pcoded-micon"><i className="ti-layers" /><b>FC</b></span>
              <span className="pcoded-mtext">Logs</span>
              <span className="pcoded-mcaret" />
            </Link>
          </li>
        </ul>
        <div className="pcoded-navigation-label">UI Element</div>
        <ul className="pcoded-item pcoded-left-item">
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon"><i className="ti-layout-grid2-alt" /><b>BC</b></span>
              <span className="pcoded-mtext">Basic</span>
              <span className="pcoded-mcaret" />
            </a>
            <ul className="pcoded-submenu">
              <li className=" ">
                <a href="breadcrumb.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Breadcrumbs</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
              <li className=" ">
                <a href="button.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Button</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
              <li className>
                <a href="accordion.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Accordion</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
              <li className=" ">
                <a href="tabs.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Tabs</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
              <li className=" ">
                <a href="color.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Color</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
              <li className=" ">
                <a href="label-badge.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Label Badge</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
              <li className=" ">
                <a href="tooltip.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Tooltip And Popover</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
              <li className=" ">
                <a href="typography.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Typography</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
              <li className=" ">
                <a href="notification.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                  <span className="pcoded-mtext">Notifications</span>
                  <span className="pcoded-mcaret" />
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#drip" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="drip" >
              <i className="ti-layout-accordion-list" />
              <span>Analytics</span>
            </a>
            <div className="collapse" id="drip">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link to="/hm/house-dues" className="nav-link inner-text">Customers</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#drip1" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="drip1" >
              <i className="ti-layout-accordion-list" />
              <span>Analytics</span>
            </a>
            <div className="collapse" id="drip1">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link to="/hm/house-dues" className="nav-link inner-text">Customers</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>
        
      </div>
    </nav>
  )
}

export default SidebarAdmin
