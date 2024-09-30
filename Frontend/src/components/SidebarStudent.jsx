
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Config from '../../helpers/config';

const SidebarStudent = () => {

  useEffect(() => {
    // jQuery to handle Bootstrap collapse behavior
    const handleCollapse = () => {
      const collapses = document.querySelectorAll('.collapse');

      collapses.forEach((collapse) => {
        collapse.addEventListener('show.bs.collapse', () => {
          collapses.forEach((el) => {
            if (el !== collapse && el.classList.contains('show')) {
              const bsCollapse = new bootstrap.Collapse(el, {
                toggle: false
              });
              bsCollapse.hide();
            }
          });
        });
      });
    };

    handleCollapse();
  }, []);

  return (
    <nav className="pcoded-navbar">
      <div className="sidebar_toggle">
        <a href="#"><i className="icon-close icons" /></a>
      </div>
      <div className="pcoded-inner-navbar main-menu">
        <div className>
          <div className="main-menu-header">
            <img className="img-80 img-radius" src="/temp/assets/images/sv-logo.png" alt="User" />
            <div className="user-details">
              <span id="more-details">{Config[0].SCHOOL_ALLIASE}</span>
            </div>
          </div>
        </div>
        <div className="p-15 p-b-0"> </div>
        {/* <div className="p-15 p-b-0"></div> */}

        <div className="pcoded-navigation-label">Navigation</div>
        <ul className="pcoded-item pcoded-left-item">
          <li className="active">
            <Link to="/student/dashboard" className="waves-effect waves-dark">
              <span className="pcoded-micon"><i className="ti-home" /><b>D</b></span>
              <span className="pcoded-mtext">Home</span>
              <span className="pcoded-mcaret" />
            </Link>
          </li>
        </ul>

        {/* Account Routes */}
        <div className="pcoded-navigation-label">Account</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#acs" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="acs" >
              <i className="ti-user" />
              <span>Account</span>
            </a>
            <div className="collapse" id="acs">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/profile">Profile</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/logs">Logs</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/tickets">Tickets</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/change-password">Change Password</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        {/* Settings Routes */}
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#gen" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="gen" >
              <i className="ti-menu-alt" />
              <span>General</span>
            </a>
            <div className="collapse" id="gen">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/settings">Settings</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/notifications">Notifications</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/support">Support</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/community-forum">Community Forum</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/private-forum">Private Forum</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/exeat">Exeat</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        {/* Academics Routes */}
        <div className="pcoded-navigation-label">Academic</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#aci" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="aci" >
              <i className="ti-book" />
              <span>Academic</span>
            </a>
            <div className="collapse" id="aci">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/result">Result</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/transcript">Transcript</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/child-transcript">Child Transcript</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/child-courses">Child Courses</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/child-information">Child Information</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        {/* Fees Routes */}
        <div className="pcoded-navigation-label">Fees Management</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#fs" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="fs" >
              <i className="ti-wallet" />
              <span>Fees Element</span>
            </a>
            <div className="collapse" id="fs">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/fees">Fees</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/payment-history">Payment History</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/account-statement">Account Statement</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/payment">Payment</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/student/child-fees">Child Fees</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        {/* <ul className="navbar-nav" role="tabpanel">
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
        </ul> */}

      </div>
    </nav>
  );
};

export default SidebarStudent;
