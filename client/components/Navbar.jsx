import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {

    return (

        
        <div className="container  p-2  navBar">
            
            <p className="beHeard">Be Heard, Alabama!</p>
            
            <div className="nav navHomeBtn d-flex ">
               
                <NavLink to="/" >Home</NavLink>
                
            </div>
        </div>
        
        
    )
}

export default Navbar;