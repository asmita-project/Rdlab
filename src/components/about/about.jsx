import React from "react";
import Navbar from "../homepage/navbar/navbar";
import Banner from '../../images/banner1.jpg';
import './about.css';
import Aboutimage from '../../images/aboutus.jfif'
import banner1 from '../../images/banner2.jfif'
import facial1 from '../../images/clasical.jfif'
import facial2 from '../../images/facial2.jfif'

import facial3 from '../../images/facial3.jfif'

import facial4 from '../../images/facial4.jfif'
import facial5 from '../../images/facial5.jpg'
import facial6 from '../../images/facial6.jfif'


export default function Homescreen() {
    return (
        <div>
            <div className="box1">
                <Navbar />
            </div>
            <div className="box2">
              

                <div className="aboutbox">
                    <div className="contextAbout">
                        <h1 className="aboutHeading">ABOUT US</h1>
                        <div className="aboutDescription">
                            <p className="aboutsubtext">
                                Full cleaning and housekeeping services for companies and households
                            </p>
                            <p className="aboutsubtext">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply
                            </p>
                        </div>
                        <div className="learnmore">
                            <label className="learnmoretext">Read More</label>
                        </div>

                    </div>
                    <div className="aboutimage">
                        <img src={Aboutimage} width="370px" alt="image" height="400px" />
                    </div>
                </div>

                <div className="footer">
                    <div className="footermainbox">
                        <div className="footerbox1">
                            <div className="footerheadingTitlebox">
                                <h4 className="footerabouttext">About</h4>
                            </div>
                            <div style={{ width: "330px" }}>
                                <p className="footerabouttext">
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation u
                                </p>
                            </div>

                        </div>
                        <div className="footerbox2">
                            <div className="footerheadingTitlebox">
                                <h4 className="footerabouttext">Menu</h4>
                            </div>
                            <div className="footermenu">
                                <div >
                                    <label className="linkfooter">Home</label>
                                </div>
                                <div >
                                    <label className="linkfooter">Services</label>
                                </div>
                                <div >
                                    <label className="linkfooter">Gallery</label>
                                </div>
                                <div >
                                    <label className="linkfooter">About US</label>
                                </div>
                                <div >
                                    <label className="linkfooter">Contact US</label>
                                </div>
                            </div>
                        </div>
                        <div className="footerbox3">
                            <div className="footerheadingTitlebox">
                                <h4 className="footerabouttext">Useful Link</h4>
                            </div>
                            <div className="footermenu">
                                <div >
                                    <label className="linkfooter">Home</label>
                                </div>
                                <div >
                                    <label className="linkfooter">Services</label>
                                </div>
                                <div >
                                    <label className="linkfooter">Gallery</label>
                                </div>
                                <div >
                                    <label className="linkfooter">About US</label>
                                </div>
                                <div >
                                    <label className="linkfooter">Contact US</label>
                                </div>
                            </div>
                        </div>
                        <div className="footerbox4">
                            <div className="footerheadingTitlebox">
                                <h4 className="footerabouttext">Contact Us</h4>
                            </div>
                            <div>
                                <p className="footerabouttext">
                                    address
                                </p>
                                <p className="footerabouttext">
                                    address
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}