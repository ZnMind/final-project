import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import "../css/stateReps.css";
import { Link } from "react-router-dom";


const StateReps = () => {
  const [reps, setReps] = useState([]);

  useEffect(() => {
    fetch(
      "https://v3.openstates.org/people?jurisdiction=Alabama&org_classification=lower&page=1&per_page=50&apikey=ed755855-5b9f-4586-95b0-93fa290c5349",
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
      <Navbar />
      <Link to="/stateReps2" className="btn btn-danger m-2">
        Next Page
      </Link>
      <body id="stateReps" className="container d-flex flex-row justify-content-center align-items-center flex-wrap">
        {reps.map((rep) => (
          <div id="rep-style" className="container w-50">
            <div className="row d-flex flex-row  p-0 m-2">
              <div id="test" className=" w-75">
                <div className="card shadow rounded text-center align-items-center">
                  <div className="card-header pull-left">
                    <img
                      className="card-img-left"
                      src="https://baldwincountyal.gov/images/default-source/legislation-delegation/houseseal.gif?sfvrsn=dee3820c_0"
                      alt="Card image cap"
                    ></img>
                    <div className="card-body">
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
                        className="m-2 btn btn-outline-primary"
                        href={`mailto:${rep.email}`}
                      >
                        Email
                      </a>
                      <a
                        className="m-2 btn btn-outline-primary"
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
        <Link to="/stateReps2" className="btn btn-danger m-2">
          Next Page
        </Link>
      </body>
    </>
  );
};

export default StateReps;