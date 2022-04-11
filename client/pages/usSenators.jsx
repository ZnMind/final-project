import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
import "../css/usSenators.css"
import Navbar from '../components/Navbar.jsx';

const UsSenators = () => {
    const [location, setLocation] = useState('AL');
    const [reps, setReps] = useState([]);

    useEffect(() => {
        if (location != ""){
            fetch(`http://localhost:3000/api/sen/${location}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setReps(data)
            })
            .catch(err => console.log(err));
        }
    }, [location]);

    return (
        <>

            {/* <body className="usSenatorsBody ">
                <Navbar />
                <div id="usSenatorsWrapper">
                    <h1 className="usSenatorsTitle text-center">U.S. Senators</h1>

                    <div className="container senateContainer">
                        <div className="row d-flex flex-row justify-content-center align-items-center ">
                            <div className="col-sm-3 ">
                                <div className="card shadow rounded text-center mb-2">
                                    <img className="card-top" src="http://bioguide.congress.gov/bioguide/photo/S/S000320.jpg " alt="" />
                                    <div className="card-body cardBodyUsSenators">
                                        <h5 className="card-title">Richard C. Shelby</h5>
                                        <h6 className="card-subtitle">Washington DC</h6>
                                        <small className="card-subtitle mt-1">Republican Party</small>
                                        <h6 className="card-subtitle mt-1">Phone: (202) 224-5744</h6>
                                        <p className="" >Mailing Address:<small > 304 Russell Senate Office Building
                                            Washington,DC 20510</small></p>
                                        <a href="https://www.shelby.senate.gov/public/index.cfm/emailsenatorshelby">Email Form</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 ">
                                <div className="card shadow rounded text-center mb-2">
                                    <img className="card-top" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/TommyTuberville.jpg" alt="" />
                                    <div className="card-body cardBodyUsSenators">
                                        <h5 className="card-title">Tommy Tuberville</h5>
                                        <h6 className="card-subtitle">Washington DC</h6>
                                        <small className="card-title">Republican Party</small>
                                        <h6 className="card-subtitle mt-1">Phone: (202) 224-4124</h6>
                                        <p className="">Mailing Address:<small> 40 Dirksen Senate Office Building
                                            Washington,DC 20510</small></p>
                                        <a href="https://www.tuberville.senate.gov/contact/contact-form/">Email Form</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </body> */}



<body id="usRepsBody" >
        <div id="repPics" className="d-flex flex-row justify-content-center align-items-center flex-wrap">
        <Navbar />
        <input value={location.toUpperCase()} onChange={e => setLocation(e.target.value)}></input>
        {reps.map((rep, index) => {
            return (
              <div id="rep-style" className="container-fluid w-50" key={index}>
                <div className="row d-flex flex-row m-2 ">
                  <div id="test" className="col-12" key={rep.id}>
                    <div className="card shadow rounded text-center ">
                      <img className="card-top" src={rep.photo} alt="" />
                      <div className="card-body">
                        <h4 className="card-title">
                          {rep.name}
                        </h4>
                        {/* <h6 className="card-subtitle">
                          District: {rep.district}
                        </h6> */}
                        <h6 className="card-subtitle mt-2">
                          Party: {rep.party}
                        </h6>
                        <h6 className="card-subtitle mt-2">
                          Phone # {rep.phone}
                        </h6>
                        <a className = "btn btn-outline-danger mt-3" href={rep.url} target="_blank">Website</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}

        </div>
      </body>

        </>
    )


}

export default UsSenators;