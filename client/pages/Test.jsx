import React from 'react';

let officeArr = [];

const Test = () => {

    fetch('https://www.googleapis.com/civicinfo/v2/representatives?address=4714%20Longmeadow%20Drive%20Bessemer%20AL%2035022&key=AIzaSyAt1TjpLwlV5-7Br-Kw68ZWwlI0zFswqPU')
        .then(res => res.json())
        .then(res => {
            let offices = res.offices[0]
            officeArr.push(offices);
            console.log(offices);
            console.log(officeArr[0].name);
        })
        .catch(err => console.log(err));

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <h1>Test Page</h1>
                    {/* {officeArr.map(arr => (
                        <p>{arr.name}</p>
                    ))} */}
                </div>
            </div>
        </>
    );
}

export default Test;