import React from 'react';
import { Link } from "react-router-dom";
import "../css/home.css"
import Navbar from '../components/Navbar.jsx';

const Home = () => {
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
                                        Search for your local representatives.
                                    </p>
                                    <input placeholder="address city state" type="text" className="searchInput m-1" />
                                    <button className="searchBtn" type="submit">Submit</button>
                                    <p>Or search by position</p>
                                    <Link to="/usSenators" className="btn btn-outline-danger m-2">U.S. Senators</Link>
                                    <Link to="/usReps" className="btn btn-outline-danger m-2">U.S. Representatives</Link>
                                    <Link to="/stateSenate" className="btn btn-outline-danger m-2">State Senators</Link>
                                    <Link to="/stateReps" className="btn btn-outline-danger m-2">State Representatives</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                <h6 className="pwrBy mb-3">Powered By Google Civic Information API</h6>



            </body>











        </>
    )
}

export default Home;