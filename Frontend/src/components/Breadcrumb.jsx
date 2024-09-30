// import React from 'react'
import { useLocation } from 'react-router-dom'
import Config from '../../helpers/config';

const Breadcrumb = () => {

  const location = useLocation()
  const pathName = location.pathname;

  return (
    <div className="page-header">
      <div className="page-block">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="page-header-title">
              <h5 className="m-b-10">{Config[0].currentPage}</h5>
              <p className="m-b-0 i-text">{Config[0].APP_ALLIASE} a real product from {Config[0].BRAND_NAME}</p>
            </div>
          </div>
          <div className="col-md-4">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html"> <i className="fa fa-home" /> </a>
              </li>
              <li className="breadcrumb-item"><a href="#!">{pathName == '/' ? 'Dashboard' : pathName}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Breadcrumb
