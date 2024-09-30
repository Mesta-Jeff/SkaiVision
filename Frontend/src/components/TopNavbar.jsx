import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Config from '../../helpers/config';

const TopNavbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start animation when route changes
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <nav className={`navbar header-navbar pcoded-header ${isAnimating ? 'route-changing' : ''}`}>
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <a className="mobile-menu waves-effect waves-light" id="mobile-collapse" href="#!">
            <i className="ti-menu" />
          </a>
          <div className="mobile-search waves-effect waves-light">
            <div className="header-search">
              <div className="main-search morphsearch-search">
                <div className="input-group">
                  <span className="input-group-prepend search-close"><i className="ti-close input-group-text" /></span>
                  <input type="text" className="form-control" placeholder="Enter Keyword" />
                  <span className="input-group-append search-btn"><i className="ti-search input-group-text" /></span>
                </div>
              </div>
            </div>
          </div>
          <a href="index.html">
            <img className="img-fluid" src="/temp/assets/images/sv-bar-white.png" alt="Logo" width={150}/>
          </a>
          <a className="mobile-options waves-effect waves-light">
            <i className="ti-more" />
          </a>
        </div>
        <div className="navbar-container container-fluid">
          <ul className="nav-left">
            <li>
              <div className="sidebar_toggle"><a href="javascript:void(0)"><i className="ti-menu" /></a></div>
            </li>
            <li className="d-flex justify-content-center">
              <h5 className="m-b-30 school-title" >{Config[0].SCHOOL_NAME}</h5>
            </li>
          </ul>
          <ul className="nav-right">
            
            <li className="header-notification">
              <a href="#!" className="waves-effect waves-light">
                <i className="ti-bell" />
                <span className="badge bg-c-red" />
              </a>
              <ul className="show-notification">
                <li>
                  <h6>Notifications</h6>
                  <label className="label label-danger">New</label>
                </li>
                <li className="waves-effect waves-light">
                  <div className="media">
                    <img className="d-flex align-self-center img-radius" src="/temp/assets/images/avatar-2.jpg" alt="Generic placeholder image" />
                    <div className="media-body">
                      <h5 className="notification-user">John Doe</h5>
                      <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                      <span className="notification-time">30 minutes ago</span>
                    </div>
                  </div>
                </li>
                
              </ul>
            </li>        

            <li className="user-profile header-notification">
              <a href="#!" className="waves-effect waves-light">
                <img src="/temp/assets/images/user.png" className="img-radius" alt="User"/>
                <span>Username here</span>
                <i className="ti-angle-down" />
              </a>
              <ul className="show-notification profile-notification">
                <li className="waves-effect waves-light">
                  <a href="#!">
                    <i className="ti-settings" /> Settings
                  </a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="user-profile.html">
                    <i className="ti-user" /> Profile
                  </a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="email-inbox.html">
                    <i className="ti-email" /> My Messages
                  </a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="auth-lock-screen.html">
                    <i className="ti-lock" /> Lock Screen
                  </a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="auth-normal-sign-in.html">
                    <i className="ti-layout-sidebar-left" /> Logout
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default TopNavbar
