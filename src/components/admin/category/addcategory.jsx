import React, { useEffect, useState } from "react";
import { http } from "../../../restservice";
import './categoryadd.css';
import axios from 'axios'

export default function Addcategory(props) {

    const [customer, setcustomer] = useState({
        category: "",
        photo: ""
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
        formData.append('category', selectedimage);
        axios.post(http + '/category/upload',formData)
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
        const { category} = customer
        
        let data = {
            category: category,
            photo: filename
        }
        axios.post(http+'/category/add', data)
        .then((res) => {
          
            // alert("submitted")
            console.log(res.data)
            props.goback()
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(data,"data.....")
    }

    return (

        <div className="customerAddbox ">
            <div className="mainheading">
                <label>Add Category</label>
                <label onClick={() => { props.goback() }}>Goback</label>
            </div>
            <div className="customerAddbox ">

                <div className="maininputbox">
                    <form onSubmit={()=>{useruploadimage()}}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Category</label>
                                    </div>

                                    <input className="userinput" id="fname" name="category" value={customer.category} required onChange={handlechangevalue('category')} type="text" />
                                </div>
                            </div>

                            {/* <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Last Name</label>
                                    </div>
                                    <input className="userinput" id="lname" value={customer.lastname} required onChange={handlechangevalue('lastname')} type="text" />
                                </div>
                            </div> */}

                            {/* <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Email</label>
                                    </div>
                                    <input className="userinput" id="email" value={customer.email} required onChange={handlechangevalue('email')} type="text" />
                                </div>
                            </div> */}

                            {/* <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Phone</label>
                                    </div>
                                    <input className="userinput" id="phone" value={customer.phone} required onChange={handlechangevalue('phone')} type="text" />
                                </div>
                            </div> */}



                            {/* <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Username</label>
                                    </div>
                                    <input className="userinput" id="username" value={customer.username} required onChange={handlechangevalue('username')} type="text" />
                                </div>
                            </div> */}

                            {/* <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Password</label>
                                    </div>
                                    <input className="userinput" id="password" value={customer.password} required onChange={handlechangevalue('password')} type="text" />
                                </div>
                            </div> */}
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