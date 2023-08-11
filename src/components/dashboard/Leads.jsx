import React from "react";
import './dashboard.css';
import data from "./Jsondata";

export default function Leads(props){
    
    const {track}=props

    return(

        <div className="container">
      <div className="leadspage">
        <div className="leadstext">
            <span>
            Leads
            </span>
            </div>
            <div className="searchbox">
                <div className="inputbox">
                    <input type="text" className="searchinput" placeholder="Search"/>
                </div>
                <div >
                    <div className="addnew">+ Add New</div>
                </div>
                <div>
                    <div className="addnew">Assign To Admin</div>
                </div>
            </div>
      </div>

      <div>
      <table className="table">
  <thead>
    <tr className="header">
      <th scope="col">
        <input type="checkbox" id="check" name="check"/>
      </th>
      <th scope="col">Customer Name</th>
      <th scope="col">Lead ID</th>
      <th scope="col">Location</th>
      <th scope="col">Event Date</th>
      <th scope="col">Status</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((entry,i)=>(
<tr key={i}>
      <td scope="col"><input type="checkbox" id="check" name="check"/></td>
      <th >{entry.name}</th>
      <td className="leadid">{entry.leadid}</td>
      <td className="location">{entry.location}</td>
      <td className="location">{entry.eventdate}</td>
      <td className="location" style={{ color:entry.Status === "New" ? "#0090ff" :entry.Status==="Pipeline"?"#ffa34f":"#44c880" }}>{entry.Status}</td>
      <td>
        <div className="icons">
        <span onClick={()=>{track()}}><i className="fa fa-eye" aria-hidden="true"></i></span>
        <span onClick={()=>{track()}}><i className="fa fa-pencil" aria-hidden="true"></i></span>
        <span onClick={()=>{track()}}><i className="fa fa-trash-o" aria-hidden="true"></i></span>
        <span onClick={()=>{track()}}><i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
        
        </td>
    </tr>
        ))
}
    
   
  </tbody>
</table>
      </div>
    </div>
    )
}