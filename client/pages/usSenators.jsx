import React from "react";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
import "../css/usSenators.css"
import Navbar from '../components/Navbar.jsx';

const UsSenators = () => {

    return (
        <>

            <body className="usSenatorsBody">
                <Navbar />
                <div id="usSenatorsWrapper">
                    <h1 className="usSenatorsTitle text-center">U.S. Senators</h1>

                    <div className="container senateContainer">
                        <div className="row d-flex flex-row justify-content-center align-items-center ">
                            <div className="col-sm-3 ">
                                <div className="card shadow rounded text-center ">
                                    <img className="card-top" src="http://bioguide.congress.gov/bioguide/photo/S/S000320.jpg" alt="" />
                                    <div className="card-body bodyUsSenators">
                                        <h5 className="card-title">Richard C. Shelby</h5>
                                        {/* <h6 className="card-subtitle">Washington DC</h6> */}
                                        <small className="card-subtitle mt-1">Republican Party</small>
                                        <h6 className="card-subtitle mt-1">Phone: (202) 224-5744</h6>
                                        <p><small className="mt-1">Mailing Address: 304 Russell Senate Office Building
                                            Washington DC 20510</small></p>
                                        <a href="https://www.shelby.senate.gov/public/index.cfm/emailsenatorshelby">Email Form</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card shadow rounded text-center">
                                    <img className="card-top" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/TommyTuberville.jpg" alt="" />
                                    <div className="card-body bodyUsSenators">
                                        <h5 className="card-title">Tommy Tuberville</h5>
                                        {/* <h6 className="card-subtitle">Washington DC</h6> */}
                                        <small className="card-title">Republican Party</small>
                                        <h6 className="card-subtitle mt-1">Phone: (202) 224-4124</h6>
                                        <p><small className="mt-1">Mailing Address: 40 Dirksen Senate Office Building
                                            Washington DC 20510</small></p>
                                        <a href="https://www.tuberville.senate.gov/contact/contact-form/">Email Form</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </body>

        </>
    )


}

export default UsSenators;