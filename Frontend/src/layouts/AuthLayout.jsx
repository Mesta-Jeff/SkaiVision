
// import React from 'react'
import Config from '../../helpers/config';

import { Outlet } from "react-router-dom"

const AuthLayout = () => {

    const currentYear = new Date().getFullYear(); 

    return (
        <>

            <div>
                <div className="account-pages my-5 pt-sm-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-7 col-xl-7">

                                <Outlet />

                                <div className="mt-2 text-center">
                                    <div>
                                        <p>©  {currentYear} {Config[0].APP_ALLIASE} &lt;&gt; {Config[0].APP_VERSION} Powered with <i className="mdi mdi-heart text-danger" /> by {Config[0].BRAND_NAME} Team</p>
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

export default AuthLayout
