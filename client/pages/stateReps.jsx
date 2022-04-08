import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
//import "../css/stateReps.css";

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
        return fetch(
          "https://v3.openstates.org/people?jurisdiction=Alabama&org_classification=lower&page=2&per_page=50&apikey=ed755855-5b9f-4586-95b0-93fa290c5349"
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setReps([...reps, ...data.results]);
            return fetch("https://v3.openstates.org/people?jurisdiction=Alabama&org_classification=lower&page=3&per_page=50&apikey=ed755855-5b9f-4586-95b0-93fa290c5349")
              .then(response => response.json())
              .then(data => {
                setReps([...reps, ...data.results]);
              });
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <body id="stateReps">
        {reps.map((rep) => (
          <div id="rep-style" className="container-fluid">
            <div className="row w-50">
              <div id="test" className="col-12">
                <div className="card shadow rounded text-center">
                  <div className="card-header pull-left">
                    <img
                      className="card-img-left"
                      src="https://bloximages.newyork1.vip.townnews.com/dothaneagle.com/content/tncms/assets/v3/editorial/c/7f/c7f0931a-94ee-11ec-9b59-1fece2a29e9a/606b374024551.image.png"
                      alt="Card image cap"
                    ></img>
                    <div className="card-body">
                      <h4 className="card-title">{sen.name}</h4>
                      <h6 className="card-subtitle mt-2">
                        District: {sen.current_role.district}
                      </h6>
                      <h6 className="card-subtitle mt-2">
                        Counties: {sen.extras.county}
                      </h6>
                      <h6 className="card-subtitle mt-2">Party: {sen.party}</h6>

                      {/* <p className="card-te"https://sewell.house.gov/contact/email-me"xt">Mailing address: Two 20th Street NorthSuite 1130 Birmingham, AL 35203</p> */}
                      <a
                        className="m-2 btn btn-outline-primary"
                        href={`mailto:${sen.email}`}
                      >
                        Email
                      </a>
                      <a
                        className="m-2 btn btn-outline-primary"
                        href={sen.openstates_url}
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
      </body>
    </>
  );
};

export default StateReps;
