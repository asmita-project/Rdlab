import React, { useState } from "react";
import Addservices from "./addservices";
import Services from "./services";

export default function Servicesconnect(){
    const [page,setpage]=useState(0)

    const addservices =()=>{
        setpage(1)
    }

    const manageservice =()=>{
        setpage(0)
    }
return(
    <div>
     {
        page == 0?
        <Services Addservices={addservices}/>
        :
        page == 1?
        <Addservices goback={manageservice}/>
        :null
     }
    </div>
)
}