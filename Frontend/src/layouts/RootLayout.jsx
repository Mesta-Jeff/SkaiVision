// import React from 'react'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import Preloader from '../components/Preloader'
import TopNavbar from '../components/TopNavbar'
import Breadcrumb from '../components/Breadcrumb'
import SidebarAdmin from '../components/SidebarAdmin'
import Footer from '../components/Footer'
import SidebarStudent from '../components/SidebarStudent'
import SidebarStaff from '../components/SidebarStaff'


const RootLayout = () => {



  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Retrieve user role from session storage or API
    const storedUserRole = sessionStorage.getItem('userRole');
    if (storedUserRole) {
      setUserRole(storedUserRole);
    } else {
      // Fetch user role from API if not found in session storage
      // ...
    }
  }, []);

  const renderSidebar = () => {
    switch (userRole) {
      case 'admin':
      case 'developer':
        return <SidebarAdmin />;
      case 'student':
      case 'parent':
        return <SidebarStudent />;
      case 'normal staff':
      case 'hod':
      case 'house master':
        return <SidebarStaff />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        {/* Pre-loader start */}
        <Preloader />

        <div id="pcoded" className="pcoded">
          <div className="pcoded-overlay-box" />
          <div className="pcoded-container navbar-wrapper">

            {/* Topbar */}
            <TopNavbar />

            <div className="pcoded-main-container">
              <div className="pcoded-wrapper">

                {/* Sidebar*/}
                {/* <SidebarAdmin /> */}
                {/* <SidebarStudent /> */}
                <SidebarStaff />

                {/* {renderSidebar()} */}

                <div className="pcoded-content">

                  {/* Page-header start */}
                  <Breadcrumb />

                  <div className="pcoded-inner-content">
                    {/* Main-body start */}
                    <div className="main-body">
                      <div className="page-wrapper">
                     
                        <div className="page-body">

                          <Outlet />
                          
                          <Footer />

                        </div>

                      </div>
                      <div id="styleSelector"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default RootLayout
