
// import React from 'react'
import { useEffect, useRef } from 'react';
import Config from '../../../helpers/config';

const Login = () => {

    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show(); 

            // Handle modal close on button click
            const closeModalButton = document.querySelector('.modal-close');
            if (closeModalButton) {
                closeModalButton.addEventListener('click', () => {
                    modal.hide();
                });
            }

            // Handle modal close on Enter key press
            modalElement.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    modal.hide();
                }
            });
        }
    }, [modalRef]);


    return (

        <>

            <div className="card overflow-hidden auth-bg-main">
                <div className="auth-bg-primary">
                    <div className="row">
                        <div className="col-7">
                            <div className="text-white p-4">
                                <h2 className="auth-title">{Config[0].APP_ALLIASE}</h2>
                                <p className='auth-sub-title'>
                                    {Config[0].SCHOOL_NAME ? Config[0].SCHOOL_NAME : "Skai Version Flow"}
                                </p>
                            </div>
                        </div>
                        <div className="col-5 align-self-end">
                            <img src="/temps/assets/images/profile-img.png" alt className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0">
                    <div className="auth-logo">
                        <a href="/" className="auth-logo-dark">
                            <div className="avatar-md profile-user-wid mb-4">
                                <span className="avatar-title rounded-circle bg-light">
                                    <img src="/temp/assets/images/sv-logo.png" alt className="rounded-circle" height={74} />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 text-center">
                        
                        <h5 style={{marginBottom: -3}}>Welcome back <span className='text-ibold'> Mr Developer</span></h5>
                        <small style={{fontSize: 13}}>(The actual username here)</small>

                        <form className="form-horizontal mt-4" action="/admin/dashboard">
                            <div className="mb-3">
                                {/* <label htmlFor="username" className="form-label">Enter your username</label> */}
                                <input type="text" className="form-control" id="username" placeholder="Enter Username" />
                            </div>
                            <div className="mb-3">                               
                                <div className="input-group auth-pass-inputgroup">
                                    <input type="password" className="form-control" placeholder="Enter Password" aria-label="Password" aria-describedby="password-addon" />
                                    <button className="btn btn-light " type="button" id="password-addon"><i className="mdi mdi-eye-outline" /></button>
                                </div>
                                <label className="form-label text-danger" id='errorMessage'></label>
                            </div>
                            <div className="form-check">
                                <span className='text-ibold'>I am not (Mr Developer),  </span><a href="/auth/reset" className="text-muted"> Log in as a different person</a>
                            </div>
                            <div className="mt-3 d-flex justify-content-center">
                                <button className="btn btn-primary waves-effect waves-light" type="submit">Sign In</button>
                            </div>
                            <div className="mt-4 text-center">
                                <a href="/auth/reset" className="text-muted"><i className="mdi mdi-lock me-1" /> Forgot your password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="myModal" ref={modalRef} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="myModalLabel">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title m-0" id="myModalTitle"></h4>
                            <a href='#!' className='modal-close'><span className='modal-close'>&times;</span></a>
                        </div>
                        <div className="modal-body">
                            <div className="card-block">
                                <div className="row d-flex">
                                    <div className="col-md-6">
                                        <img className="auth-img" src="/temps/assets/images/verification-img.png" alt="" />
                                    </div>
                                    <div className="col-md-5 text-center auth-right-card">
                                        <h2 className='auth-t-head'>Attention Please!</h2>
                                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ratione corrupti pariatur sint fugiat consequuntur hic, numquam deleniti molestias reprehenderit eaque, deserunt laboriosam tempora officia recusandae enim, consequatur qui vel!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident cum repellat culpa. Ab provident officia nemo. Enim assumenda, labore recusandae accusantium deleniti mollitia, doloribus fugiat consequatur dolorem temporibus quibusdam!
                                        </p>
                                        <small style={{ fontSize: 13, color: '#5B5B5B' }}>Download now to <span className="text-ibold" >Register</span> for courses, <span className="text-ibold">Pay Fees</span> with <span className="text-ibold">MoMo</span> and <span className="text-ibold">Visa/MasterCard</span>, <span className="text-ibold">check Results</span>, etc.</small>

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

export default Login
