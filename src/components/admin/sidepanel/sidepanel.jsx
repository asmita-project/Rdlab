import React from "react";
import banner1 from '../../../images/banner2.jfif'
import './sidepanel.css';
import logo from '../../../images/logo.png'

export default function Sidepanel() {
    return (
        <div style={{ width: "100%" }}>
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
                            <label className="username">Asmita Gaikwad</label>
                            <label className="admintext">Admin</label>
                        </div>
                    </div>
                    <div className="sidepanelmaincontentbox">
                        <div className="contentitem">
                            <div className="fonticonbox">
                                <i className="fa fa-user fonticon" aria-hidden="true"></i>

                            </div>
                            <label className="contentitemlabel">Customer</label>

                        </div>

                        <div className="contentitem">
                            <div className="fonticonbox">
                                <i className="fa fa-user fonticon" aria-hidden="true"></i>

                            </div>
                            <label className="contentitemlabel">Customer</label>

                        </div>

                        <div className="contentitem">
                            <div className="fonticonbox">
                                <i className="fa fa-user fonticon" aria-hidden="true"></i>

                            </div>                            <label className="contentitemlabel">Customer</label>

                        </div>

                        <div className="contentitem">
                            <div className="fonticonbox">
                                <i className="fa fa-user fonticon" aria-hidden="true"></i>

                            </div>                            <label className="contentitemlabel">Customer</label>

                        </div>

                    </div>
                </div>




            </div>
        </div>

    )
}