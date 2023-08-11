import React, { useState } from "react";
import Addoffer from "./addoffer";
import Offer from "./offer";
export default function Offerconnect(){
    const [page,setpage]=useState(0)

    const addoffer =()=>{
        setpage(1)
    }

    const manageoffer =()=>{
        setpage(0)
    }
return(
    <div>
     {
        page == 0?
        <Offer Addoffer={addoffer}/>
        :
        page == 1?
        <Addoffer goback={manageoffer}/>
        :null
     }
    </div>
)
}