import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){


    const navigate = useNavigate()
    return(

        <div>

            <div className="table">
             <table className="table table-dark table-striped" style={{padding:"12px"}}>
                <thead>
                    <tr >
                    <td colSpan={12}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div>
                            Manage Data
                            </div>
                            <div>
                            <i onClick={()=>{navigate('/addemployee')}} className="fa fa-plus-circle" aria-hidden="true"></i>
  
                            </div>
                        </div>
                      
                    </td>
                
                    </tr>
                    <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Mobile</td>
                    <td>Action</td>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>asmita</td>
                        <td>rameshwari</td>
                        <td>7876787678</td>
                        <td>
                       
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        &nbsp;
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                       &nbsp;
                       <i className="fa fa-times-circle" aria-hidden="true"></i>
                        </td>
                    </tr>
                </tbody>
             </table>
            </div>
           
        </div>
    )
}