import React from "react";
import './navbar.css';
import LOGO from '../../../images/logo.png'
import { useNavigate } from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate()
    return(
        <div>
            <div className="navBarbox">
             <div className="heading">
                {/* <img src={LOGO} alt="Image" width="60px" height="60px"/> */}
             <h4>The Great Womeniya Makeup Studio</h4>
             </div>
             <div className="navbarContent">
              <div onClick={()=>{navigate('/')}} className="navItem">
               Home
              </div>

              <div className="navItem" onClick={()=>{navigate('/about')}}>
               About Us
              </div>

              <div className="navItem">
               Contact Us
              </div>

              <div className="navItem" onClick={()=>{navigate('/gallery')}} >
               Gallery
              </div>

              <div className="navItem">
               Services
              </div>

              <div onClick={()=>{navigate('/login')}} className="navItem">
               Login
              </div>
             </div>
            </div>
        </div>
    )
}