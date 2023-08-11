import React from "react";
import { Route,HashRouter as Router, Routes } from "react-router-dom";
import { Suspense,lazy } from "react";
import Connecter from "../dashboard/connecter";

const Home = lazy(()=>import ("../homepage/home"));
const Register = lazy(()=>import('../login/register'))
const Addemployee = lazy(()=>import('../homepage/addemployee'))
const Homescreen =lazy(()=>import('../homepage/homescreen'))
const Login =lazy(()=>import('../login/login'))
const Customer =lazy(()=>import('../admin/customer/customer'))
const Dashboard = lazy(()=>import('../dashboard/Dashboard'))
const Connector = lazy(()=>import('../admin/connector/connector'))
const Gallery = lazy(()=>import('../gallery/Gallery'))
const About = lazy(()=>import('../about/about'))

export default function Routing(){
    return(

      <Router>
        <Suspense fallback = "Loading">
            <Routes>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/addemployee" element={<Addemployee/>}/>
                <Route exact path="/" element={<Homescreen/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/customer" element={<Customer/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route exact path="/admin" element={<Connector/>}/>
                <Route exact path="/gallery" element={<Gallery/>}/>
                <Route exact path="/about" element={<About/>}/>

            </Routes>
        </Suspense>
      </Router>
    )
}