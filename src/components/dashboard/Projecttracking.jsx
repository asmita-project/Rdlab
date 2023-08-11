import React, { useEffect } from "react";
import './project.css';
import project from './projectdata';

export default function Projecttracking(props){

   const{back}=props;
    return(

        <div className="container">
            <div className="back" onClick={()=>{back()}}>
                Back
            </div>
            <div className="leadspage">
        <div className="Project">
            <div>
            Project Tracking
            </div>
            <div>
           <span className="idno">006676 | </span><span className="projecttrack">Project Tracking</span>
            </div>
            </div>
            <div className="searchbox">
                <div className="inputbox">
                    <input type="text" className="searchinput" placeholder="Search"/>
                </div>
                <div >
                    <div className="addnew">+ Add New</div>
                </div>
            </div>
      </div>

      <div className="projectsection1">
        <div>
        <div className="client">
          <div className="information">
            <div><span><i className="fa fa-plus-circle plus" aria-hidden="true"></i></span></div>
            <div className="event">Client Information</div>
          </div>
          <div className="information">
            <div><span><i className="fa fa-plus-circle plus" aria-hidden="true"></i></span></div>
            <div className="event">Event Information</div>
          </div>
          <div className="information1">
            <div><span><i className="fa fa-plus-circle plus" aria-hidden="true"></i></span></div>
            <div className="event">KMK Information</div>
          </div>
        </div>
        </div>
       
<div className="budget">
<div>
            <div className="decoration">
              <div><span><i className="fa fa-minus-circle minus" aria-hidden="true"></i></span></div>
              <div>Budget Information</div>
            </div>
            <div className="food">
                <div className="vas">Decoration</div>
                <div className="other">Food</div>
                <div className="other">VAS</div>
                <div className="others">Others</div>
            </div>
        </div>

        {/* *********table part start************* */}

        <div className="tablesection">
            <div className="headerbottom">
                <div>Decoration & Props</div>
                <div>Floral</div>
                <div>Logistics</div>
                <div>Conceptual Lighting</div>
                <div>Sound</div>
            </div>
        <table className="table table-borderless">
       
  <thead>
    <tr>
        <td colSpan="5">
            <div className="mainbutton">
                <button className="addplus"><span className="plus">+</span> Add</button>
               
                </div>
        </td>
    </tr>
    <tr>
      <th scope="col">Perticular</th>
      <th scope="col" ><span className="uom1">UOM</span></th>
      <th scope="col" ><span className="uom1">Qty</span></th>
      <th scope="col" ><span className="uom1">Rate Date</span></th>
      <th scope="col" ><span className="uom1">Amount</span></th>
    </tr>
  </thead>
  <tbody>
    {
        project.map((entry,i)=>(
<tr key={i}>
      <th >{entry.particular}</th>
      <td >
        <div className="uom">
        {entry.uom}
        </div>
        </td>
      <td >
        <div className="uom">
        {entry.qty}
        </div>
       </td>
      <td >
        <div className="uom">
        {entry.rate}
        </div>
       </td>
      <td >
        <div className="uom">
        {entry.amount}
        </div>
       </td>
    </tr>
        ))
}

<tr className="grandtotal">
<td className="total">Total</td>
<td colSpan="3"></td>
<td className="total">
    <span className="uom1">
    Rs. 50,000
    </span>
    </td>
</tr>
<tr>
<td className="total">Grand Total</td>
<td colSpan="3"></td>
<td className="total">
    <span className="uom1">
    Rs. 20,00,000
    </span>
    </td>
</tr>
    
   
  </tbody>
</table>
<div className="button">
<div className="cancel"><span>Cancel</span></div>
    <div className="save"><span>Save</span></div> 
</div>
        </div>
</div>

<div className="gallery">
    <div><span><i className="fa fa-plus-circle plus" aria-hidden="true"></i></span></div>
    <div>Gallery</div>
</div>
      
      </div>

        </div>
    )
}