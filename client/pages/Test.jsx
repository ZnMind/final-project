import React, { useEffect, useState } from 'react';

let officeArr = [];
let officialArr = [];

const Test = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=716%20Richard%20Arrington%20Jr.%20Boulevard%20North%2C%20Birmingham%2C%20AL%2035203&key=AIzaSyAt1TjpLwlV5-7Br-Kw68ZWwlI0zFswqPU`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
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

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Test Page</h1>
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