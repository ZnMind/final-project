import React from "react";
import '../css/governor.css'
import Navbar from "../components/Navbar.jsx";


const Governor = () => {

    return (
        <body className="govBody">
            <Navbar />
            <div className="container w-05 mt-3">
                <div className="row">

                    <div className="col mb-5">
                        <div className="card shadow rounded text-center">
                            <img className="card-img-top" src="https://governor.alabama.gov/assets/2019/10/GKI_Official_Portrait_2_copy-150x150.jpg" alt="Card image cap" />
                            <div className="card-body govCardBody">
                                <h5 className="card-title">Kay Ivey</h5>
                                <h6>Governor</h6>
                                <p>Phone:<small> (334) 242-7100</small></p>
                                <p className="card-text mt-02">Mailing Address: <small>600 Dexter Avenue Montgomery, AL 36130</small></p>
                                <a href="https://contact.governor.alabama.gov/contact.aspx" className="govEmail">Email Form</a>
                            </div>
                        </div>
                    </div>

                    
                                


                    <div className="col">
                        <div className="card shadow rounded text-center">
                            <img className="card-img-top" src="https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/200/Steve_MarshallAG.jpg" alt="Card image cap" />
                            <div className="card-body govCardBody">
                                <h5 className="card-title">Steve Marshall</h5>
                                <h6>Attorney General</h6>
                                <p>Phone:<small> (334) 242-7300</small></p>
                                <p className="card-text mt-02">Mailing Address:<small>501 Washington Avenue Montgomery, AL 36104</small></p>
                               <a href="https://www.alabamaag.gov/generalcontact" className="govEmail">Email Form </a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow rounded text-center">
                            <img className="card-img-top" src="https://fedsoc-cms-public.s3.amazonaws.com/headshots/DyEJpbKM5hwYkv0FnZ8Y1SX1Ve90SVnelW6wGiz1.jpg" alt="Card image cap" />
                            <div className="card-body govCardBody">
                            <h5 className="card-title">John H. Merrill</h5>
                                <h6>Secretary of State</h6>
                                <p>Phone:<small> (334) 242-7200</small></p>
                                <p className="card-text mt-02">Mailing Address: <small>P.O. Box 5616 Montgomery, AL 36103-5616</small></p>
                               <a href="mailto:John.Merrill@sos.alabama.gov" className="govEmail">Email</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow rounded text-center">
                            <img className="card-img-top" src="https://pbs.twimg.com/profile_images/938255592145158144/df0x-whj_400x400.jpg" />
                            <div className="card-body govCardBody">
                                <h5 className="card-title">Will Ainsworth</h5>
                                <h6>Leutenant Governor</h6>
                                <p>Phone:<small> (334) 261-9590</small></p>
                                <p className="card-text mt-02">Mailing Address: <small>11 South Union Street Montgomery, AL 36130</small></p>
                               <a href="mailto:ltgov@ltgov.alabama.gov" className="govEmail">Email </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </body>
    )

}
export default Governor;