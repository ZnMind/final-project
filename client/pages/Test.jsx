import React, { useEffect, useState } from 'react';
//require('dotenv').config({ path: require('find-config')('.env')})

//console.log(process.env.KEY)

let officeArr = [];
let officialArr = [];

let locationArr = [];

const Test = () => {

    const [details, setDetails] = useState([]);
    const [location, setLocation] = useState('');


    useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=716%20Richard%20Arrington%20Jr.%20Boulevard%20North%20Birmingham%2C%20AL%2035203&key=AIzaSyAt1TjpLwlV5-7Br-Kw68ZWwlI0zFswqPU`)
            .then(response => response.json())
            .then(data => {
                console.log(data.officials)
              //  if (data.officials.)
                setDetails(data.officials)
            })
            /* .then(data => {
                let official = data.officials
                official.forEach(element => {
                    officialArr.push(element);
                })
            }) */
            .catch(err => console.log(err));
    }, []);

    const buttonClick = () => {
        locationArr.push(location);
        let noSpace = location.replace(/ /g, "%20");
        let urlString = noSpace.replace(/,/g, "%2C")
        console.log(urlString);
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