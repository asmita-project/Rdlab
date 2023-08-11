import React, { useEffect, useState } from "react";
import { http } from "../../../restservice";
import './addoffer.css';
import axios from 'axios'

export default function Addoffer(props) {

    const [customer, setcustomer] = useState({
        percent: "",
        offerprice: "",
        price: "",
        fromdate: "",
        todate: "",
      
    })


    const [image, setimage] = useState()
    const [imageresponse, setimageresponce] = useState()
    const [selectedimage, setselectedimage] = useState()
    const handlechangevalue = (name) => (e) => {
        e.preventDefault();
        setcustomer({ ...customer, [name]: e.target.value })

    }

    const handlechangephoto = (e) => {
        e.preventDefault();
        setselectedimage(e.target.files[0])
        // console.log("image",e.target.files)
        console.log(e.target.files[0])
        var reader = new FileReader();
        reader.onload = (eve) => {
            setimage(eve.target.result)
        }

        reader.readAsDataURL(e.target.files[0]);

    }

    const useruploadimage = () => {
        const formData = new FormData();
        formData.append('offer', selectedimage);
        axios.post(http + '/offer/upload',formData)
            .then((res) => {
                setimageresponce(res.data.filename)
                console.log("image upload",res.data.filename)
                submit(res.data.filename)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const submit = (filename) => {
        const { percent, offerprice, price,fromdate, todate} = customer
        
        let data = {
            percent: percent,
            offerprice: offerprice,
            price: price,
            fromdate: fromdate,
            todate:todate,
            photo: filename
        }
        axios.post(http + '/offer', data)
        .then((res) => {
          
            alert("submitted")
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(data,"data.....")
    }

    return (

        <div className="customerAddbox ">
            <div className="mainheading">
                <label>Add Offer</label>
                <label onClick={() => { props.goback() }}>Goback</label>
            </div>
            <div class="customerAddbox ">

                <div className="maininputbox">
                    <form onSubmit={()=>{useruploadimage()}}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Percent</label>
                                    </div>

                                    <input className="userinput" id="fname" name="percent" value={customer.percent} required onChange={handlechangevalue('percent')} type="text" />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Offerprice</label>
                                    </div>
                                    <input className="userinput" id="lname" name="offerprice" value={customer.offerprice} required onChange={handlechangevalue('offerprice')} type="text" />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Price</label>
                                    </div>
                                    <input className="userinput" id="email"  name="price" value={customer.price} required onChange={handlechangevalue('price')} type="text" />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Frome Date</label>
                                    </div>
                                    <input className="userinput" id="phone" name="fromdate" value={customer.fromdate} required onChange={handlechangevalue('fromdate')} type="text" />
                                </div>
                            </div>



                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>To Date</label>
                                    </div>
                                    <input className="userinput" id="username" name="todate" value={customer.todate} required onChange={handlechangevalue('todate')} type="text" />
                                </div>
                            </div>

                            <div className="col-sm-6">
                               
                            </div>

                            <div className="col-sm-6">

                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Photo</label>
                                    </div>
                                    <input className="userinput" id="image" onChange={handlechangephoto} required type="file" placeholder="Photo" />
                                </div>



                            </div>
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-6">

                                <div className="inputbox">
                                    <div style={{ width: "90%" }}>
                                        <div className="imagebox">
                                            <img src={image} width="100%" height="100%" alt="image" />

                                        </div>
                                    </div>

                                </div>



                            </div>

                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="buttoninnerbox">
                                        <div className="submitbutton">
                                            <button type="submit" className="buttonbox">
                                                <label className="labeltextsubmit">
                                                    Submit
                                                </label>



                                            </button>
                                        </div>
                                        <div className="submitbutton">
                                            <button type="button" className="buttonbox">
                                                <label className="labeltextsubmit">
                                                    Cancel
                                                </label>


                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>

                </div>



            </div>
        </div>
    )
}