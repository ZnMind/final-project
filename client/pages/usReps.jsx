import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import "../css/usReps.css";

const UsReps = () => {
  const [reps, setReps] = useState([]);

  const FB = "www.facebook.com/";

  useEffect(() => {
    fetch("https://api.propublica.org/congress/v1/117/house/members.json", {
      method: "GET",
      headers: {
        "X-API-Key": " KKlFJNSPxvPwrHnRXBPHe0LYjcq0URyZtNGDqiMc",
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReps(data.results[0].members);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <body id="usRepsBody">
        {reps.map((rep) => {
          if (rep.state == "AL") {
            return (
              <div id="rep-style" className="container-fluid">
                <div className="row w-50">
                  <div id="test" className="col-12" key={rep.id}>
                    <div className="card shadow rounded text-center ">
                      {/* <img className="card-top" src="https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Terri_Sewell.jpg" alt="" /> */}
                      <div className="card-body">
                        <h4 className="card-title">
                          {rep.first_name} {rep.last_name}
                        </h4>
                        <h6 className="card-subtitle">
                          District: {rep.district}
                        </h6>
                        <h6 className="card-subtitle mt-2">
                          Party: {rep.party}
                        </h6>
                        <h6 className="card-subtitle mt-2">
                          Phone # {rep.phone}
                        </h6>
                        {/* <p className="card-te"https://sewell.house.gov/contact/email-me"xt">Mailing address: Two 20th Street NorthSuite 1130 Birmingham, AL 35203</p> */}
                        <a href={rep.url}>Website</a>
                        <a
                          href={`//www.facebook.com/${rep.facebook_account}`}
                          target="_blank"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </body>
    </>
  );
};

export default UsReps;
