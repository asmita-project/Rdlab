import React, { useState } from "react";
import Navbar from "../homepage/navbar/navbar";
import banner from '../../images/banner2.jfif'
import './login.css';
import loginimage from '../../images/loginimage.png'
import loginimage1 from '../../images/loginimage1.jfif'

import loginimage2 from '../../images/loginimage2.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate =useNavigate()
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const login =()=>{
        const decode = btoa(password)
       let data ={
        email:email,
        password:decode
       }
        
        axios.post('http://localhost:5000/user/login',data)
        .then((res)=>{
            console.log("res",res.data[0])
            let storedata = res.data[0]
           localStorage.setItem('logindata',storedata.id)
           localStorage.setItem('firstname',storedata.firstname)
           localStorage.setItem('lastname',storedata.lastname)

            console.log('login successfully')
            navigate('/admin')
        })
        .catch((err)=>{
            console.log('error')
            alert("invalid username and password")
        })
    }
    return (

        <div style={{height:"100vh",backgroundColor:"#ffc107"}}>
            <div>
                <Navbar />
            </div>
            <div className="loginbox">

                <div className="loginformbox">
                 <div className="formbox">
                  <form>
                    <div>
                        <div className="loginheading">
                            <h3 className="loginheadtext">Sign IN</h3>
                        </div>
                        <div className="loginInput">
                            <label className="usernametext">Username</label>
                            <input className="inputbox" value={email} onChange={(e)=>{setemail(e.target.value)}} type="text"  />
                        </div>
                        <div className="loginInput">
                        <label className="usernametext">Password</label>
                            <input className="inputbox" value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password"  />
                        </div>
                        <div className="buttonbox">
                            <button className="loginbutton" onClick={()=>{login()}} type="button">LOGIN</button>
                        </div>
                        <div className="forgrtPassBox">
                            <div className="forgetpassBox">Forget Password</div>
                            <div className="forgetpassbox">Don't have an account yet ?&nbsp;<label onClick={()=>{navigate('/register')}} className="signuptext">SIGN UP HERE</label> </div>
                        </div>
                    </div>
                  </form>
                 </div>
                 <div className="loginboximage">
                    <div className="loginimagebox">
                    <img src={loginimage1} width="100%" alt="image" height="100%"/>

                    </div>
                 </div>
                </div>
                {/* <form action="/action_page.php">
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter email" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}
            </div>

        </div>
    )
}