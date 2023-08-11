import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactModel from 'react-modal'
import { http } from "../../../restservice";
import data from '../../dashboard/Jsondata'
import './booking.css'

export default function Booking(props) {

    const [alluser,setalluser]=useState([])

    useEffect(()=>{
        getalluser()
    },[])

    const getalluser =()=>{
        axios.get(http+'/booking')
        .then((res)=>{
            setalluser(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const userdelete =(id)=>{
        axios.get(http+'/booking/delete/'+ id)
        .then((res)=>{
            setalluser(res.data)
            console.log(res.data)
            alert('Delete user')
        })
        .catch((err)=>{
            console.log(err)
        })
    }


   
    return (

        <div className="container">
            <div className="leadspage">
                <div className="leadstext">
                    <span>
                        Manage Booking
                    </span>
                </div>
                <div className="searchbox">
                    <div className="inputbox">
                        <input type="text" className="searchinput" placeholder="Search" />
                    </div>
                    {/* <div onClick={()=>{props.AddCustomer()}}>
                        <div className="addnew">+ Add</div>
                    </div> */}
                    {/* <div>
                    <div className="addnew">Assign To Admin</div>
                </div> */}
                </div>
            </div>
            <div style={{backgroundColor:"#2d3838"}}>
            {
                    alluser == ""?
                    <div style={{backgroundColor:"#2d3838",height:"100vh",color:"white"}}>
                        <label style={{padding:'12px',fontSize:'15px'}}>No Date</label>
                        </div> 
                        :
                        <table className="table table-striped table-dark  userteblebox" style={{ background: "#2d3838" }}>
                        <thead >
                            <tr className="header">
                                <th scope="col">
                                    <input type="checkbox" id="check" name="check" />
                                </th>
                                <th scope="col">Order Id</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Payment Method</th>
                                <th scope="col">Payment Status</th>
                                {/* <th scope="col">Status</th> */}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((entry, i) => (
                                    <tr key={i}>
                                        <td scope="col"><input type="checkbox" id="check" name="check" /></td>
                                        <td className="leadid">{entry.orderid}</td>
                                        <td className="location">{entry.service_name}</td>
                                        <td className="location">{entry.category_name}</td>
                                        <td className="location">{entry.payment}</td>
                                        <td className="location">{entry.payment_status}</td>
                                        {/* <td className="location" style={{ color:entry.Status === "New" ? "#0090ff" :entry.Status==="Pipeline"?"#ffa34f":"#44c880" }}>{entry.Status}</td> */}
                                        <td>
                                            <div className="icons">
                                                <span onClick={()=>{userdelete(entry.id)}}><i className="fa fa-eye" aria-hidden="true"></i></span>
                                                <span ><i className="fa fa-pencil" aria-hidden="true"></i></span>
                                                <span ><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                                                <span ><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </div>
    
                                        </td>
                                    </tr>
                                ))
                            }
    
    
                        </tbody>
                    </table>

            }
               
            </div>
        </div>
    )
}