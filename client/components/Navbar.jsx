import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {

    const buttonClick = () => {
        window.location.href = "/";
      };

    return (

        
        <div className="container  p-2  navBar">
            
            <p className="beHeard">Be Heard, Alabama!</p>
            
            <div className="nav navHomeBtn ">
               
            <button id="staterepsbutton" onClick={buttonClick}>
            Home
          </button>
                
            </div>
        </div>
        
        
    )
}

export default Navbar;