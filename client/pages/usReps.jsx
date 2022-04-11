import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import "../css/usReps.css";

const UsReps = () => {
  const [location, setLocation] = useState('AL');
  const [reps, setReps] = useState([]);

  const FB = "www.facebook.com/";

  useEffect(() => {
    if (location != ""){
        fetch(`http://localhost:3000/api/state/${location}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setReps(data)
        })
        .catch(err => console.log(err));
    }
}, [location]);

  /* useEffect(() => {
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
  }, []); */

  return (
    <>
      
      <body id="usRepsBody" >
        <div id="repPics" className="d-flex flex-row justify-content-center align-items-center flex-wrap">
        <Navbar />
        <input value={location.toUpperCase()} onChange={e => setLocation(e.target.value)}></input>
        {reps.map((rep, index) => {
          //if (rep.state == "AL") {
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
                        <a className = "btn btn-outline-danger mt-3" href={rep.url} target="_blank">Website</a>
                        {/* <a 
                          href={`//www.facebook.com/${rep.facebook_account}`}
                          className="fa fa-facebook m-2"
                          style= {{color: "#3b5998"}}
                          target="_blank"
                        ></a>
                         <a
                          href={`//www.twitter.com/${rep.twitter_account}`}
                          className="fa fa-twitter m-2"
                          style= {{color: "#55acee"}}
                          target="_blank"
                        ></a>
                         <a
                          href={`//www.youtube.com/${rep.youtube_account}`}
                          className="fa fa-youtube m-2 "
                          style= {{color: "#cd201f"}}
                          target="_blank"
                        ></a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        /* } */)}

        </div>
      </body>
    </>
  );
};

export default UsReps;
