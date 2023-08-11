import React, { useState } from "react";
import Navbar from "../homepage/navbar/navbar";
import banner from '../../images/banner2.jfif'
import './login.css';
import loginimage1 from '../../images/loginimage1.jfif'
import loginimage2 from '../../images/loginimage2.png'
import loginimage from '../../images/loginimage.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const navigate = useNavigate()

    const [valuedata, setvalue]=useState({
       firstname:"" ,
       lastname:"",
       username:"",
       password:"",
       email:"",
       phone:""
    })


    const handlechange =(name)=>(e)=>{
        e.preventDefault();
        setvalue({...valuedata,[name]:e.target.value})
    }
    
    const submit =()=>{
      const {firstname,lastname,email,password,username,phone}=valuedata
      const encode = btoa(password)
      let data ={
        firstname:firstname,
        lastname:lastname,
        email:email,
        username:username,
        phone:phone,
        password:encode,
        city:"nagpur",
        role:"customer"
      }
      axios.post('http://localhost:5000/user/add',data)
      .then((res)=>{
          navigate('/login')
          console.log('res',res)
          alert('Register Sucessfully')
      })
      .catch((err)=>{
          console.log('error')
      })
    }
    return (

        <div>
            <div>
                <Navbar />
            </div>
            <div className="loginbox">

                <div className="loginformbox">
                 <div className="formbox">
                  <form>
                    <div>
                        <div className="loginheading">
                            <h3 className="loginheadtext">Sign Up</h3>
                        </div>
                        <div className="loginInput">
                            <label className="usernametext">First Name</label>
                            <input type="text" className="inputbox" id="firstname" name="firstname" value={valuedata.firstname} onChange={handlechange("firstname")}   />
                        </div>
                        <div className="loginInput">
                        <label className="usernametext">Last Name</label>
                            <input type="text"  className="inputbox" id="lastname" name="lastname" value={valuedata.lastname} onChange={handlechange("lastname")}  />
                        </div>
                        <div className="loginInput">
                        <label className="usernametext">Email</label>
                            <input  type="email" className="inputbox" id="email" name="email" value={valuedata.email} onChange={handlechange("email")}  />
                        </div>
                        <div className="loginInput">
                        <label className="usernametext">Phone </label>
                            <input type="number"  className="inputbox" id="phone" name="phone" value={valuedata.phone} onChange={handlechange("phone")}  />
                        </div>
                        <div className="loginInput">
                        <label className="usernametext">Username</label>
                            <input  type="text" className="inputbox" name="username" id="username" value={valuedata.username} onChange={handlechange("username")}  />
                        </div>

                        

                        <div className="loginInput">
                        <label className="usernametext">Password</label>
                            <input type="password" className="inputbox" name="password" id="password" value={valuedata.password} onChange={handlechange("password")}   />
                        </div>
                        <div className="buttonbox">
                            <button className="loginbutton" onClick={()=>{submit()}} type="button">REGISTER</button>
                        </div>
                        <div className="forgrtPassBox">
                            {/* <div className="forgetpassBox">Forget Password</div> */}
                            <div className="forgetpassbox">Already have an account ?&nbsp;<label onClick={()=>{navigate('/login')}} className="signuptext">Sign In HERE</label> </div>
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