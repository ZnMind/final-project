import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import "../components/images/usReps.css";


const Results = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/address")
            .then(results => results.json())
            .then(data => {
                let noSpace = data[data.length - 1].address.replace(/ /g, "%20");
                let urlString = noSpace.replace(/,/g, "%2C");
                return urlString;
            })
            .then(data => {
                fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=${data}&key=AIzaSyAt1TjpLwlV5-7Br-Kw68ZWwlI0zFswqPU`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        setDetails(data.officials);
                    })
                    .catch(err => {
                        console.log(err);
                        window.location.href = "/";
                        alert("Please input a valid Address, State, or Zip Code");
                    });
            })
            .catch(err => console.log(err));
    }, []);

    return (

        <div id="usRepsBody">
            <Navbar />
            {details.map((details, index) => {
                return (
                    <div id="rep-style" className="container-fluid" key={index}>
                        <div className="row w-50">
                            <div id="test" className="col-12">
                                <div className="card shadow rounded text-center ">
                                    {/* <img className="card-top" src="https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Terri_Sewell.jpg" alt="" /> */}
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {details.name}
                                        </h4>
                                        {/* <h6 className="card-subtitle">
                                            District: {rep.district}
                                            </h6> */}
                                        <h6 className="card-subtitle mt-2">
                                            Party: {details.party}
                                        </h6>
                                        <h6 className="card-subtitle mt-2">
                                            Phone # {details.phones[0]}
                                        </h6>
                                        {/* <p className="card-te"https://sewell.house.gov/contact/email-me"xt">Mailing address: Two 20th Street NorthSuite 1130 Birmingham, AL 35203</p> */}
                                        <a href={details.urls[0]}>Website</a>
                                        {/* <a
                                            href={`//www.facebook.com/${rep.facebook_account}`}
                                            target="_blank"
                                            >
                                                Facebook
                                            </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                //}
            })}
        </div>

    );

}

export default Results;