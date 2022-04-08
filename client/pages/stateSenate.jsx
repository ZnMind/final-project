import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import "../css/stateSenate.css";

const StateSenate = () => {
  const [senate, setSenate] = useState([]);

  useEffect(() => {
    fetch(
      "https://v3.openstates.org/people?jurisdiction=Alabama&org_classification=upper&page=1&per_page=50&apikey=3e1fb642-5ba7-482c-ab7b-6a42d2db4bb6",
      {}
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSenate(data.results);
        console.log(senate);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      
      <body
        id="stateSenate"
        className=" d-flex flex-row justify-content-center align-items-center flex-wrap">
      <Navbar />
        {senate.map((sen) => (
          <div id="rep-style" className="container w-50">
            <div className="row d-flex flex-row  p-0 m-2 justify-content-center">
              <div id="test" className=" w-75">
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
                        className="m-2 btn btn-outline-danger"
                        href={`mailto:${sen.email}`}
                      >
                        Email
                      </a>
                      <a
                        className="m-2 btn btn-outline-danger"
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

export default StateSenate;
