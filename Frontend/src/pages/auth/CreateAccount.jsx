
import { useEffect, useRef } from 'react';
import Config from '../../../helpers/config';

const CreateAccount = () => {

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


            <div className="page-content">
                <div className="container-fluid">

                    <div className="checkout-tabs">
                        <div className="row">

                            <div className="col-xl-2 col-sm-3">
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link active" id="v-pills-shipping-tab" data-bs-toggle="pill" href="#v-pills-shipping" role="tab" aria-controls="v-pills-shipping" aria-selected="true">
                                        <i className="fas fa-school d-block check-nav-icon mt-4 mb-2" />
                                        <p className="fw-bold mb-4">Basic Information</p>
                                    </a>
                                    <a className="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false">
                                        <i className="fas fa-briefcase d-block check-nav-icon mt-4 mb-2" />
                                        <p className="fw-bold mb-4">Packages</p>
                                    </a>
                                    <a className="nav-link" id="v-pills-confir-tab" data-bs-toggle="pill" href="#v-pills-confir" role="tab" aria-controls="v-pills-confir" aria-selected="false">
                                        <i className="bx bx-badge-check d-block check-nav-icon mt-4 mb-2" />
                                        <p className="fw-bold mb-4">Confirmation</p>
                                    </a>
                                </div>
                            </div>

                            <div className="col-xl-10 col-sm-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade show active" id="v-pills-shipping" role="tabpanel" aria-labelledby="v-pills-shipping-tab">
                                                <div>
                                                    <h4 className="card-title">Basic Information</h4>
                                                    <p className="card-title-desc">Fill all information below</p>
                                                    <form>
                                                        <div className="form-group row mb-4">
                                                            <label htmlFor="billing-name" className="col-md-2 col-form-label">Name</label>
                                                            <div className="col-md-10">
                                                                <input type="text" className="form-control" id="billing-name" placeholder="Enter your name" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mb-4">
                                                            <label htmlFor="billing-email-address" className="col-md-2 col-form-label">Email Address</label>
                                                            <div className="col-md-10">
                                                                <input type="email" className="form-control" id="billing-email-address" placeholder="Enter your email" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mb-4">
                                                            <label className="col-md-2 col-form-label">Country</label>
                                                            <div className="col-md-10">
                                                                <select className="form-control select2" title="Country">
                                                                    <option value={0}>Select Country</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mb-4">
                                                            <label htmlFor="billing-address" className="col-md-2 col-form-label">Address</label>
                                                            <div className="col-md-10">
                                                                <textarea className="form-control" id="billing-address" rows={3} placeholder="Enter full address" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mb-4">
                                                            <label className="col-md-2 col-form-label">Country</label>
                                                            <div className="col-md-10">
                                                                <select className="form-control select2" title="Country">
                                                                    <option value={0}>Select Country</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mb-4">
                                                            <label className="col-md-2 col-form-label">Packages</label>
                                                            <div className="col-md-10">
                                                                <select className="select2 form-control select2-multiple" multiple="multiple" data-placeholder="Choose ...">
                                                                    <option value={0}>Select Country</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                                                <div>
                                                    <h4 className="card-title">Packages information</h4>
                                                    <p className="card-title-desc">Select all the packages you want</p>
                                                    <div>
                                                        <div className="form-check form-check-inline font-size-16">
                                                            <input className="form-check-input" type="radio" name="paymentoptionsRadio" id="paymentoptionsRadio1" defaultChecked />
                                                            <label className="form-check-label font-size-13" htmlFor="paymentoptionsRadio1"><i className="fab fa-cc-mastercard me-1 font-size-20 align-top" /> Credit / Debit Card</label>
                                                        </div>
                                                        <div className="form-check form-check-inline font-size-16">
                                                            <input className="form-check-input" type="radio" name="paymentoptionsRadio" id="paymentoptionsRadio2" />
                                                            <label className="form-check-label font-size-13" htmlFor="paymentoptionsRadio2"><i className="fab fa-cc-paypal me-1 font-size-20 align-top" /> Paypal</label>
                                                        </div>
                                                        <div className="form-check form-check-inline font-size-16">
                                                            <input className="form-check-input" type="radio" name="paymentoptionsRadio" id="paymentoptionsRadio3" />
                                                            <label className="form-check-label font-size-13" htmlFor="paymentoptionsRadio3"><i className="far fa-money-bill-alt me-1 font-size-20 align-top" /> Cash on Delivery</label>
                                                        </div>
                                                    </div>
                                                    <h5 className="mt-5 mb-3 font-size-15">For card Payment</h5>
                                                    <div className="p-4">

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="v-pills-confir" role="tabpanel" aria-labelledby="v-pills-confir-tab">
                                                <div className="card shadow-none border mb-0">
                                                    <div className="card-body">
                                                        <h4 className="card-title mb-4">Confirm our agreements</h4>
                                                        <div className="table-responsive">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-6">
                                        <a href="ecommerce-cart.html" className="btn text-muted d-none d-sm-inline-block btn-link">
                                            <i className="mdi mdi-arrow-left me-1" /> Back to Shopping Cart </a>
                                    </div> {/* end col */}
                                    <div className="col-sm-6">
                                        <div className="text-end">
                                            <a href="ecommerce-checkout.html" className="btn btn-success">
                                                <i className="mdi mdi-truck-fast me-1" /> Proceed to Shipping </a>
                                        </div>
                                    </div> {/* end col */}
                                </div> {/* end row */}
                            </div>
                        </div>
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
                                    <div className="col-md-5">
                                        <img className="auth-img" src="/temps/assets/images/coming-soon.svg" alt="" />
                                    </div>
                                    <div className="col-md-6 text-center auth-right-card">
                                        <h2 className='auth-t-head' style={{ textAlign: 'left' }}>Do you know...?</h2>
                                        <p style={{ textAlign: 'left' }}>
                                            You can take your school to the next level? With <strong className="text-ibold">{Config[0].APP_ALLIASE}</strong>, we prioritize the integrity and security of your data. Our comprehensive system is designed to streamline all aspects of school management, including:
                                        </p>
                                        <ul className="auth-scroll-text">
                                            <li><strong className="text-ibold">Financial Management:</strong> Effortlessly handle school finances, ensuring transparency and accuracy.</li>
                                            <li><strong className="text-ibold">Clinic Management:</strong> Keep track of student health and wellness with our integrated clinic module.</li>
                                            <li><strong className="text-ibold">Store and Canteen Operations:</strong> Manage school stores and canteens efficiently to enhance student services.</li>
                                            <li><strong className="text-ibold">Laboratory Resources:</strong> Organize and track lab usage for seamless educational experiences.</li>
                                            <li><strong className="text-ibold">Student Portal:</strong> Provide a user-friendly portal for students to access important information and services.</li>
                                            <li><strong className="text-ibold">Duty Roster Management:</strong> Simplify staff scheduling and duty assignments.</li>
                                            <li><strong className="text-ibold">Academic Timetabling:</strong> Create and manage academic schedules with ease.</li>
                                            <li><strong className="text-ibold">Biometric Attendance:</strong> Implement secure and efficient attendance tracking.</li>
                                            <li><strong className="text-ibold">Electronic Payments:</strong> Facilitate easy payments for school fees, bus fees, hostel accommodations, and more.</li>
                                        </ul>
                                        <p style={{ textAlign: 'left' }}>
                                            Join us today and discover how <strong className="text-ibold">{Config[0].APP_ALLIASE}</strong> can enhance your school's efficiency and effectiveness. Sign up now and unlock the full potential of your school management!
                                        </p>
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

export default CreateAccount
