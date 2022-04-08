import React, { useState, createContext } from 'react';
import { Link } from "react-router-dom";
import "../css/home.css"
import Navbar from '../components/Navbar.jsx';

const Home = () => {

    const [location, setLocation] = useState('');

    const buttonClick = () => {
        window.location.href = "/Results"

        let newAddress = {
            address: location
        };

        fetch("http://localhost:3000/api/address", {
            method: "POST",
            redirect: "follow",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAddress)
        });
    }

    return (
        <>

            <body id="homeBody">
                <Navbar />

                <main className="container ">
                    <div className="row justify-content-center">

                        <div className="col-md-8 ">
                            <div class="card mt-2">
                                <div className="card-body shadow rounded text-center homeCard">
                                    <h3 className="card-title"></h3>
                                    <p className="card-text">
                                        Search for representatives by entering your full address, zip code, or city.
                                    </p>
                                    <input placeholder="address city state" type="text" className="searchInput m-1" 
                                    value={location} onChange={e => setLocation(e.target.value)} 
                                    />
                                    <button className="searchBtn"
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            buttonClick();
                                        }}
                                        >Submit</button>
                                    <p>Or search by position</p>
                                    <Link to="/Governor" className='btn btn-outline-danger m-2'>Governor and Officials</Link>
                                    <Link to="/usSenators" className="btn btn-outline-danger m-2">U.S. Senators</Link>
                                    <Link to="/usReps" className="btn btn-outline-danger m-2">U.S. Representatives</Link>
                                    <Link to="/stateSenate" className="btn btn-outline-danger m-2">State Senators</Link>
                                    <Link to="/stateReps" className="btn btn-outline-danger m-2">State Representatives</Link>
                                    <h6 className="pwrBy">Powered By Google Civic Information API, OpenStates API, ProPublica API</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                
                



            </body>











        </>
    )
}

export default Home;