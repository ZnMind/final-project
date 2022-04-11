import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import "../css/usSenators.css"
//require('dotenv').config({ path: require('find-config')('.env')})

//console.log(process.env.KEY)

const Test = () => {

    const [details, setDetails] = useState([]);
    const [location, setLocation] = useState('AL');
    const [state, setState] = useState([]);

    //Fetching the API to see what information we can gather
    /* useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=716%20Richard%20Arrington%20Jr.%20Boulevard%20North%20Birmingham%2C%20AL%2035203&key=AIzaSyAt1TjpLwlV5-7Br-Kw68ZWwlI0zFswqPU`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setDetails(data.officials)
            })
            .catch(err => console.log(err));
    }, []); */

    useEffect(() => {
        if (location != ""){
            fetch(`http://localhost:3000/api/state/${location}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
            .catch(err => console.log(err));
        }
    }, [location]);

    //Sends address to database and then changes the address to a URL for the Google API
    const buttonClick = (e) => {
        e.preventDefault();

        let newAddress = {
            address: location
        };

        /* let newAddressRes = await fetch("http://localhost:3000/api/address", {
            method: "POST",
            redirect: "follow",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAddress)
        });
        console.log(newAddressRes); */

        let noSpace = location.replace(/ /g, "%20");
        let urlString = noSpace.replace(/,/g, "%2C");
        console.log(urlString);
        return urlString;
    }

    //Fetching US Reps/Sen to store in database
    const updateReps = async (e) => {
        let myHeaders = new Headers({
            "X-API-Key": "KKlFJNSPxvPwrHnRXBPHe0LYjcq0URyZtNGDqiMc"
        })
        fetch("https://api.propublica.org/congress/v1/117/house/members.json", {
            headers: myHeaders
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;
            })
            .then(data => {
                let obj = [];
                data.results[0].members.forEach(element => {
                    if (element.party == "D") {
                        element.party = "Democrat";
                    } else {
                        element.party = "Republican"
                    }
                    obj.push({
                        "id": element.id,
                        "name": element.first_name + " " + element.last_name,
                        "state": element.state,
                        "photo": `https://bioguide.congress.gov/bioguide/photo/${element.id.charAt(0)}/${element.id}.jpg`,
                        "url": element.url,
                        "party": element.party,
                        "phone": element.phone,
                        "district": element.ocd_id.split(":")[element.ocd_id.split(":").length - 1]
                    })
                })
                console.log(obj);
                return obj;
            })
            // .then(async obj => {
            //     obj.forEach(async element => {
            //         await fetch("http://localhost:3000/api/state", {
            //             method: "POST",
            //             headers: { "Content-Type": "application/json" },
            //             body: JSON.stringify(element)
            //         })
            //     })
            // })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="container">



                {/* <div className="row">
                    <h1>Test Page</h1>
                </div>

                <div className="row">
                    <input value={location} onChange={e => setLocation(e.target.value)}></input>
                    <button onClick={buttonClick}>Button</button>
                </div>
                <div>
                    <button onClick={updateReps} disabled>Update US Reps</button>
                </div>

                <div id="row">
                    <ul>
                        <div id="row">
                            {details.map(details => (
                                <li key={`details-${details.id}`}>
                                    <img src={details.photo}></img>
                                    {details.name}
                                </li>
                            ))}
                        </div>
                    </ul>
                </div> */}



                <button onClick={updateReps} disabled>Update US Reps</button>
                <>
                    <body className="usSenatorsBody">
                        <Navbar />
                        <div id="usSenatorsWrapper">
                        <input value={location.toUpperCase()} onChange={e => setLocation(e.target.value)}></input>
                            <h1 className="usSenatorsTitle text-center">U.S. Reps</h1>
                            {details.map(details => (
                            <div className="container senateContainer">
                                <div className="row d-flex flex-row justify-content-center align-items-center ">
                                    <div className="col-4 ">
                                        <div className="card shadow rounded text-center ">
                                            <img className="card-top" src={details.photo} alt="" />
                                            <div className="card-body bodyUsSenators">
                                                <h5 className="card-title">{details.name}</h5>
                                                <h6 className="card-subtitle">{details.state}</h6>
                                                <h6 className="card-subtitle">District: {details.district}</h6>
                                                <small className="card-subtitle mt-1">{details.party}</small>
                                                <h6 className="card-subtitle mt-1">Phone: {details.phone}</h6>
                                                <a href={details.url} target="_blank">Website</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </body>
                </>



            </div>


        </>

    );
}

export default Test;