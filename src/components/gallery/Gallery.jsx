import React from "react";
import Navbar from "../homepage/navbar/navbar";

import Banner from '../../images/banner1.jpg';
import './gallerycc.css';
import Aboutimage from '../../images/aboutus.jfif'
import banner1 from '../../images/banner2.jfif'
import facial1 from '../../images/clasical.jfif'
import facial2 from '../../images/facial2.jfif'

import facial3 from '../../images/facial3.jfif'

import facial4 from '../../images/facial4.jfif'
import facial5 from '../../images/facial5.jpg'
import facial6 from '../../images/facial6.jfif'


export default function Gallery() {
    return (
        <div>
            <div className="box1">
                <Navbar />
            </div>
            <div className="box2">
               
                <div className="gallerybox">
                <div>
                    <h1 className="galleryheading">Our Gallery</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum 
                    the industry'ndard dummy text ever since of the 1500s, when an unknown printer
                     took a galley of type and scra make a type specimen book. It has
                    </p>
                </div>

                <div className="galleryimage">
                  <div className="row">
                    <div className="col-sm-4 imagebox">
                    <img src={facial1} width="100%"  alt="image" height="300px"/>
                     <h5 className="gallerytext">CLASSIC FACIAL</h5>
                    </div>

                    <div className="col-sm-4 imagebox">
                    <img src={facial2} width="100%"  alt="image" height="300px"/>
                    <h5 className="gallerytext">ANTI-AGING FACIAL</h5>
                    </div>

                    <div className="col-sm-4 imagebox">
                    <img src={facial3} width="100%"  alt="image" height="300px"/>
                    <h5 className="gallerytext">ACUPUNCTURE FACIAL</h5>
                    </div>

                    <div className="col-sm-4 imagebox">
                    <img src={facial4} width="100%"  alt="image" height="300px"/>
                    <h5 className="gallerytext">BRIGHTENING FACIAL</h5>
                    </div>

                    <div className="col-sm-4 imagebox">
                    <img src={facial5} width="100%"  alt="image" height="300px"/>
                    <h5 className="gallerytext">IPL FACIAL</h5>
                    </div>

                    <div className="col-sm-4 imagebox">
                    <img src={facial6} width="100%"  alt="image" height="300px"/>
                    <h5 className="gallerytext">MICRODERMABRASION FACIAL</h5>
                    </div>

                    {/* <div className="col-sm-4 imagebox">
                    <img src={Aboutimage} width="100%"  alt="image" height="300px"/>

                    </div>

                    <div className="col-sm-4 imagebox">
                    <img src={Aboutimage} width="100%"  alt="image" height="300px"/>

                    </div>

                    <div className="col-sm-4 imagebox">
                    <img src={Aboutimage} width="100%"  alt="image" height="300px"/>

                    </div> */}


                  </div>
                  <div className="seemorebox">
                  <div className="seemore">
                            <label className="seemoretext">See More</label>
                        </div>
                  </div>
                  
                </div>


              

                </div>
<div className="footer">
<div className="footermainbox">
<div className="footerbox1">
    <div className="footerheadingTitlebox">
       <h4 className="footerabouttext">About</h4> 
    </div>
<div style={{width:"330px"}}>
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