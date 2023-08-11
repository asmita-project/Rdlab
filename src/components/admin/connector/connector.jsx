import React, { useState } from "react";
import ReactModal from 'react-modal'
import './connect.css';
import banner1 from '../../../images/banner2.jfif'
import logo from '../../../images/logo.png'
import './connect.css'
import Customer from "../customer/customer";
import Customerconnect from "../customer/customerconnect";
import Categoryconnection from "../category/categoryconnection";
import Servicesconnect from "../services/servicesconnect";
import Booking from "../booking/booking";
import Offerconnect from "../offer/offerconnect";
import { useNavigate } from "react-router-dom";


ReactModal.setAppElement('#root')


export default function Connector() {
    const navigate =useNavigate()

    const logout=()=>{
       localStorage.clear()
       navigate('/')

    }

    const [page, setpage] = useState(0)
     let firstname = localStorage.getItem('firstname')
     let lastname = localStorage.getItem('lastname')

    return (

        <div>
            <main>
                <aside>
                    <div className="mainbox">
                        <div>
                            <div>
                                <div className="logobox">
                                    <img src={logo} width="100%" height="100%" alt="image" />
                                </div>
                            </div>
                            <div className="profilebox">
                                <div className="profileimage">
                                    <img src={banner1} style={{ borderRadius: 50 }} width="100%" height="100%" />
                                </div>
                                <div className="userbox">
                                    <label className="username">{firstname}&nbsp;{lastname}</label>
                                    <label className="admintext">Admin</label>
                                </div>
                            </div>
                            <div className="sidepanelmaincontentbox">
                                <div className="contentitem">
                                    <div className="fonticonbox">
                                        <i className="fa fa-user fonticon" aria-hidden="true"></i>

                                    </div>
                                    <label className="contentitemlabel">User</label>

                                </div>

                                <div className="contentitem" onClick={()=>{setpage(1)}}>
                                    <div className="fonticonbox">
                                        <i className="fa fa-user fonticon" aria-hidden="true"></i>

                                    </div>
                                    <label className="contentitemlabel">Category</label>

                                </div>
                                <div className="contentitem" onClick={()=>{setpage(2)}}>
                                    <div className="fonticonbox">
                                        <i className="fa fa-user fonticon" aria-hidden="true"></i>

                                    </div>
                                    <label className="contentitemlabel">Services</label>

                                </div>

                                <div className="contentitem" onClick={()=>{setpage(3)}}>
                                    <div className="fonticonbox">
                                        <i className="fa fa-user fonticon" aria-hidden="true"></i>

                                    </div>
                                    <label className="contentitemlabel">Booking</label>

                                </div>

                                <div className="contentitem" onClick={()=>{setpage(4)}}>
                                    <div className="fonticonbox" >
                                        <i className="fa fa-user fonticon" aria-hidden="true"></i>

                                    </div>
                                    <label className="contentitemlabel">Offer</label>

                                </div>

                            </div>
                        </div>




                    </div>
                </aside>
                <div className="main_Notificationbox">
                    <div className="main_notificationContent">
                        <div className="notificationbox">
                            <div className="notificationicon">
                                <i className="fa fa-user fonticon" aria-hidden="true"></i>

                            </div>
                            <div>
                                <label>Notification</label>
                            </div>
                        </div>

                        <div className="notificationbox">
                            <div className="notificationicon">
                                <i className="fa fa-user fonticon" aria-hidden="true"></i>

                            </div>
                            <div onClick={()=>{logout()}}>
                                <label>LogOut</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "85%", float: "left" }}>
                    {
                        page == 0 ?
                            <Customerconnect />
                            :
                            page == 1?
                            <Categoryconnection/>
                            :
                            page == 2?
                            <Servicesconnect/>
                            :page == 3?
                            <Booking/>
                            :
                            page == 4?
                            <Offerconnect/>
                            :null
                    }

                </div>
                <div>

                </div>
            </main>



        </div>
    )
}