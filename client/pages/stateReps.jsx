import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import "../css/stateReps.css";
import { Link } from "react-router-dom";

const StateReps = () => {
  const [reps, setReps] = useState([]);

  const buttonClick = () => {
    window.location.href = "/statereps2";
  };

  useEffect(() => {
    fetch(
      "https://v3.openstates.org/people?jurisdiction=Alabama&org_classification=lower&page=1&per_page=50&apikey=3e1fb642-5ba7-482c-ab7b-6a42d2db4bb6",
      {}
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReps(data.results);
        console.log(reps);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <body
        id="stateReps"
        className="d-flex flex-row justify-content-center align-items-center flex-wrap"
      >
        <Navbar />

        <br />
        <div className="d-flex justify-content-start">
          {" "}
          <button id="staterepsbutton" onClick={buttonClick}>
            Next Page
          </button>
        </div>

        {reps.map((rep) => (
          <div id="rep-style" className="container w-50">
            <div className="row d-flex flex-row m-2 justify-content-center">
              <div id="test" className=" w-75">
                <div className="card shadow rounded text-center align-items-center">
                  <div className="card-header pull-left">
                    <img
                      className="card-img-left"
                      src="https://baldwincountyal.gov/images/default-source/legislation-delegation/houseseal.gif?sfvrsn=dee3820c_0"
                      alt="Card image cap"
                    ></img>
                    <div className="card-body repBody">
                      <h4 className="card-title">{rep.name}</h4>
                      <h6 className="card-subtitle mt-2">
                        District: {rep.current_role.district}
                      </h6>
                      <h6 className="card-subtitle mt-2">
                        Counties: {rep.extras.county}
                      </h6>
                      <h6 className="card-subtitle mt-2">Party: {rep.party}</h6>

                      {/* <p className="card-te"https://sewell.house.gov/contact/email-me"xt">Mailing address: Two 20th Street NorthSuite 1130 Birmingham, AL 35203</p> */}
                      <a
                        className="m-2 btn btn-outline-danger"
                        href={`mailto:${rep.email}`}
                      >
                        Email
                      </a>
                      <a
                        className="m-2 btn btn-outline-danger"
                        href={rep.openstates_url}
                      >
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

<button id="staterepsbuttonbottom" onClick={buttonClick}>
            Next Page
          </button>
      </body>
    </>
  );
};

export default StateReps;
