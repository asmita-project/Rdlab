import React, { useState } from "react";
import './dashboard.css';
import logo from '../../images/logo.png';
import Connecter from "./connecter";
import Projecttracking from "./Projecttracking";

export default function Dashboard(){

    const [page, setpage]=useState(0);

    return(
        <div>
       <div className="container-fluid">
        
        

<div className="sidepanel">
    <div className="logo_image">
    <div className="logo">
 <img src={logo}  width="100%" alt="photo"/>
</div>

    </div>
    <div className="section-2">
      <div>
        <div className="userphoto"></div>
      </div>
      <div className="username">
        <div>Ashish Kumar</div>
        <div className="trucaller">Trucaller</div>
      </div>
    </div>
  

    <div className="maindashboard">
        <div className="dashboard">Dashboard</div>
        <div className="leads">
        <div><span><i className="fa fa-home" ></i></span></div>
            <div  className="leadstext">
            Leads
            </div>
            
            </div>
        <div  className="dashboard">Completed Projects</div>
        <div className="dashboard">Schedule Meeting</div>
        <div className="dashboard">Settings</div>
    </div>

</div>
 <div className="page">
    {
        page === 0?
        (<Connecter/>)
        :
        page === 1?
        (<Projecttracking/>)
        :null
    }
</div>
       </div>




        </div>
    )
}