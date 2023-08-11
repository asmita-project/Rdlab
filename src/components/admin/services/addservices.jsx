import React, { useEffect, useState } from "react";
import { http } from "../../../restservice";
import './addservices.css';
import axios from 'axios'

export default function Addservices(props) {

    const [customer, setcustomer] = useState({
        service_name: "",
        price: "",
    })

    const [getallcategory, setgetallcategory] = useState([])
    const [categoryvalue, setcategoryvalue] = useState("")
    const [image, setimage] = useState()
    const [imageresponse, setimageresponce] = useState()
    const [selectedimage, setselectedimage] = useState()

    useEffect(() => {
        categorydata()
    }, [])
    const handlechangevalue = (name) => (e) => {
        e.preventDefault();
        setcustomer({ ...customer, [name]: e.target.value })

    }

    const categorydata = () => {
        axios.get(http + '/category')
            .then((res) => {
                setgetallcategory(res.data)
                console.log(res.data, "categoryall")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handlechangecategory = (e) => {
        let value = e.target.value
        setcategoryvalue(value)
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
        formData.append('services', selectedimage);
        axios.post(http + '/services/upload', formData)
            .then((res) => {
                setimageresponce(res.data.filename)
                console.log("image upload", res.data.filename)
                submit(res.data.filename)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const submit = (filename) => {
        const { service_name, price } = customer

        let data = {
            category: categoryvalue,
            service_name: service_name,
            price: price,
            photo: filename
        }
        axios.post(http + '/services', data)
            .then((res) => {

                alert("submitted")
                console.log(res.data)
                props.goback()
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(data, "data.....")
    }

    return (

        <div className="customerAddbox ">
            <div className="mainheading">
                <label>Add Servce</label>
                <label onClick={() => { props.goback() }}>Goback</label>
            </div>
            <div className="customerAddbox ">

                <div className="maininputbox">
                    <form onSubmit={() => { useruploadimage() }}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Category</label>
                                    </div>
                                    <select className="userinput" id="category" value={categoryvalue} onChange={handlechangecategory}>
                                        <option>Select Category</option>
                                        {
                                                        getallcategory.map((entry, i) => {
                                                            return <option  value={entry.category}>{entry.category}</option>
                                                        })
                                                    }




                                    </select>
                                    {/* <input className="userinput" id="fname" value={categoryvalue} required onChange={handlechangevalue} type="text" /> */}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Service Name</label>
                                    </div>
                                    <input className="userinput" id="lname" value={customer.service_name} required onChange={handlechangevalue('service_name')} type="text" />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Price</label>
                                    </div>
                                    <input className="userinput" id="price" value={customer.price} required onChange={handlechangevalue('price')} type="text" />
                                </div>
                            </div>

                            {/* <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Phone</label>
                                    </div>
                                    <input className="userinput" id="phone" value={customer.phone} required onChange={handlechangevalue('phone')} type="text" />
                                </div>
                            </div> */}

                            <div className="col-sm-6">

                            </div>

                            {/* <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Username</label>
                                    </div>
                                    <input className="userinput" id="username" value={customer.username} required onChange={handlechangevalue('username')} type="text" />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="inputbox">
                                    <div className="labeltext">
                                        <label>Password</label>
                                    </div>
                                    <input className="userinput" id="password" value={customer.password} required onChange={handlechangevalue('password')} type="text" />
                                </div>
                            </div> */}

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