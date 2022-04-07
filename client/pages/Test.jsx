import React, { useEffect, useState } from 'react';
//require('dotenv').config({ path: require('find-config')('.env')})

//console.log(process.env.KEY)

const Test = () => {

    const [details, setDetails] = useState([]);
    const [location, setLocation] = useState('');
    const [state, setState] = useState([]);

    //Fetching the API to see what information we can gather
    useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=716%20Richard%20Arrington%20Jr.%20Boulevard%20North%20Birmingham%2C%20AL%2035203&key=AIzaSyAt1TjpLwlV5-7Br-Kw68ZWwlI0zFswqPU`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setDetails(data.officials)
            })
            .catch(err => console.log(err));
    }, []);

    //Sends address to database and then changes the address to a URL for the Google API
    const buttonClick = async (e) => {
        e.preventDefault();

        let newAddress = {
            address: location
        };

        let newAddressRes = await fetch("http://localhost:3000/api/address", {
            method: "POST",
            redirect: "follow",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAddress)
        });
        console.log(newAddressRes);

        let noSpace = location.replace(/ /g, "%20");
        let urlString = noSpace.replace(/,/g, "%2C");
        console.log(urlString);
    }

    //Fetching US Reps to store in database
    const updateReps = async (e) => {
        let myHeaders = new Headers({
            "X-API-Key": "KKlFJNSPxvPwrHnRXBPHe0LYjcq0URyZtNGDqiMc"
        })
        fetch("https://api.propublica.org/congress/v1/117/senate/members.json", {
            headers: myHeaders
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            let obj = [];
            data.results[0].members.forEach(element => {
                obj.push({
                    "id": element.ocd_id,
                    "name": element.first_name + " " + element.last_name,
                    "state": element.state
                })
            })
            return obj;
        })
        .then(async obj => {
            obj.forEach(async element => {
                await fetch("http://localhost:3000/api/state", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(element)
                })
            })
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <div className="container">

                <div className="row">
                    <h1>Test Page</h1>
                </div>

                <div className="row">
                    <input value={location} onChange={e => setLocation(e.target.value)}></input>
                    <button onClick={buttonClick}>Button</button>
                </div>
                <div>
                    <button onClick={updateReps}>Update US Reps</button>
                </div>

                <div id="row">
                    <ul>
                        <div id="row">
                            {details.map(details => (
                                <li key={`details-${details.name}`}>
                                    {details.name}
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Test;