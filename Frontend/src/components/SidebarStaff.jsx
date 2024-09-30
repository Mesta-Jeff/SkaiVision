
// import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Config from '../../helpers/config';

const SidebarStaff = () => {

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
      <div className="sidebar_toggle"><a href="#"><i className="icon-close icons" /></a></div>
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


        <div className="pcoded-navigation-label">Navigation</div>
        <ul className="pcoded-item pcoded-left-item">
          <li className="active">
            <Link to="/admin/dashboard" className="waves-effect waves-dark">
              <span className="pcoded-micon"><i className="ti-home" /><b>D</b></span>
              <span className="pcoded-mtext">Dashboard</span>
              <span className="pcoded-mcaret" />
            </Link>
          </li>
          {/* <li className>
            <Link to="/admin/logs" className="waves-effect waves-dark">
              <span className="pcoded-micon"><i className="ti-layers" /><b>FC</b></span>
              <span className="pcoded-mtext">Logs</span>
              <span className="pcoded-mcaret" />
            </Link>
          </li> */}
        </ul>

        <div className="pcoded-navigation-label">Basic Configuration</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#conf" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="conf" >
              <i className="ti-layout-grid2" />
              <span>Control Panel</span>
            </a>
            <div className="collapse" id="conf">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/profile">Profile</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/notifications">Notifications</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/messaging">Messaging</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/settings">Settings</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/logs">Logs</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/support">Support</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/tickets">Tickets</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/community-forum">Community Forum</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/private-forum">Private Forum</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shared/events">Events</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Staff Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#stf" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="stf" >
              <i className="ti-layout-accordion-list" />
              <span>Staff Control</span>
            </a>
            <div className="collapse" id="stf">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/staff/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/staff/course-manager">Course Manager</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/staff/result-entry">Result Entry</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/staff/result-overview">Result Overview</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/staff/student-transcript">Student Transcript</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/staff/attendance">Attendance</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/staff/report-generation">Report Generation</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">House Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#hm" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="hm" >
              <i className="ti-layout-accordion-list" />
              <span>House Master</span>
            </a>
            <div className="collapse" id="hm">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/students">Students</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/house-dues">House Dues</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/disciplinary-records">Disciplinary Records</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/activity">Activity</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/house-reports">House Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/exeat">Exeat</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hm/request">Request</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">House Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#shm" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="shm" >
              <i className="ti-layout-accordion-list" />
              <span>S House Master</span>
            </a>
            <div className="collapse" id="shm">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shm/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shm/house-overview">House Overview</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shm/house-reports">House Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shm/disciplinary-records">Disciplinary Records</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shm/house-members">House Members</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shm/exeat">Exeat</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shm/request">Request</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/shm/dues">Dues</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Head Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#hod" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="hod" >
              <i className="ti-layout-accordion-list" />
              <span>HOD Panel</span>
            </a>
            <div className="collapse" id="hod">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/staff">Staff</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/result-approval">Result Approval</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/department-reports">Department Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/curriculum">Curriculum</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/resources">Resources</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/students">Students</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/course">Course</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/staff-courses">Staff Courses</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/reports-analytics">Reports & Analytics</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/request">Request</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hod/overview">Overview</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Academic Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#hac" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="hac" >
              <i className="ti-layout-accordion-list" />
              <span>Head Acada</span>
            </a>
            <div className="collapse" id="hac">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/academic-reports">Academic Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/result-approval">Result Approval</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/semester">Semester</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/curriculum">Curriculum</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/attendance">Attendance</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/examination">Examination</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/reports-analytics">Reports & Analytics</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/announcement">Announcement</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/result-overview">Result Overview</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/student-transcript">Student Transcript</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/timetable">Timetable</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/course">Courses</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/programme">Programmes</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/hod">Heads of Department</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/hac/request">Requests</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Administrative Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#had" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="had" >
              <i className="ti-layout-accordion-list" />
              <span>Head Admin</span>
            </a>
            <div className="collapse" id="had">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/staff">Staff</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/student">Student</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/events">Events</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/schedules">Schedules</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/admission">Admission</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/admin-reports">Admin Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/announcement">Announcement</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/exeat">Exeat</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/had/request">Request</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Domestic Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#doms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="doms" >
              <i className="ti-layout-accordion-list" />
              <span>Domestic</span>
            </a>
            <div className="collapse" id="doms">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/facilities">Facilities</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/request">Request</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/inventory">Inventory</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/inventory-stock-tracking">Inventory Stock Tracking</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/procurement">Procurement</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/inventory-requests">Inventory Requests</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/inventory-reports">Inventory Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/menu">Menu</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/vendors">Vendors</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/canteen">Canteen</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/vendors-report">Vendors Report</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/maintenance">Maintenance</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/maintenance-requests">Maintenance Requests</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/maintenance-schedules">Maintenance Schedules</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/maintenance-reports">Maintenance Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/domestic/cost-tracking">Cost Tracking</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Principal Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#pp" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="pp" >
              <i className="ti-layout-accordion-list" />
              <span>Principal</span>
            </a>
            <div className="collapse" id="pp">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/staff-overview">Staff Overview</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/principal-reports">Principal Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/disciplinary-overview">Disciplinary Overview</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/school-performance-metrics">Performance Metrics</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/principal-meetings">Principal Meetings</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/approvals">Approvals</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/requests">Requests</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/concerns">Concerns</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/head/analytics">Analytics</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Health Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#sn" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sn" >
              <i className="ti-layout-accordion-list" />
              <span>Nurse Control</span>
            </a>
            <div className="collapse" id="sn">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/infirmary">Infirmary</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/registration">Registration</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/records">Records</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/consultation">Consultation</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/treatment">Treatment</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/referral-manager">Referral Manager</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/medical-records">Medical Records</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/infirmary-reports">Infirmary Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/pharmacy">Pharmacy</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/drug">Drug</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/procurement">Procurement</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/dispensing">Dispensing</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/billing">Billing</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/nurse/pharmacy-reports">Pharmacy Reports</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Financial Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#ac" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="ac" >
              <i className="ti-layout-accordion-list" />
              <span>Accountant</span>
            </a>
            <div className="collapse" id="ac">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/fees">Fees</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/fee-preparation">Fee Preparation</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/disbursement">Disbursement</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/purchasing">Purchasing</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/expenses">Expenses</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/accounting-reports">Accounting Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/students">Students</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/bills">Bills</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/payment">Payment</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/payment-history">Payment History</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/accountant/reports">Reports</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="line-border"></li>
        </ul>

        <div className="pcoded-navigation-label">Store Element</div>
        <ul className="navbar-nav" role="tabpanel">
          <li className="nav-item">
            <a className="nav-link anchors" href="#bs" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="bs" >
              <i className="ti-layout-accordion-list" />
              <span>Bursar Control</span>
            </a>
            <div className="collapse" id="bs">
              <ul className="nav flex-column">
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/bursar/dashboard">Dashboard</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/bursar/items">Items</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/bursar/item-requests">Item Requests</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/bursar/disbursement">Disbursement</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/bursar/stock-tracking">Stock Tracking</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/bursar/store-reports">Store Reports</Link>
                </li>
                <li className="inner-item">
                  <Link className="nav-link inner-text" to="/bursar/students">Students</Link>
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

export default SidebarStaff
