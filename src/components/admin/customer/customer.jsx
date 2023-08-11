import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactModel from 'react-modal'
import { http } from "../../../restservice";
import data from '../../dashboard/Jsondata'
import './customer.css'

export default function Customer(props) {

    const [alluser,setalluser]=useState([])

    useEffect(()=>{
        getalluser()
    },[])

    const getalluser =()=>{
        axios.get(http+'/user')
        .then((res)=>{
            setalluser(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const userdelete =(id)=>{
        axios.get(http+'/user/delete/'+ id)
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
                        Manage User
                    </span>
                </div>
                <div className="searchbox">
                    <div className="inputbox">
                        <input type="text" className="searchinput" placeholder="Search" />
                    </div>
                    <div onClick={()=>{props.AddCustomer()}}>
                        <div className="addnew">+ Add New</div>
                    </div>
                    {/* <div>
                    <div className="addnew">Assign To Admin</div>
                </div> */}
                </div>
            </div>
            <div >
                <table className="table table-striped table-dark  userteblebox" style={{ background: "#2d3838" }}>
                    <thead >
                        <tr className="header">
                            <th scope="col">
                                <input type="checkbox" id="check" name="check" />
                            </th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">city</th>
                            {/* <th scope="col">Status</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluser.map((entry, i) => (
                                <tr key={i}>
                                    <td scope="col"><input type="checkbox" id="check" name="check" /></td>
                                    <th >{entry.firstname}</th>
                                    <td className="leadid">{entry.lastname}</td>
                                    <td className="location">{entry.email}</td>
                                    <td className="location">{entry.phone}</td>
                                    <td className="location">{entry.city}</td>
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
            </div>
        </div>
    )
}