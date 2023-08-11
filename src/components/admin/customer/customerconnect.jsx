import React, { useState } from "react";
import Addcustomer from "./addcustomer";
import Customer from "./customer";

export default function Customerconnect(){
    const [page,setpage]=useState(0)

    const addcustomer =()=>{
        setpage(1)
    }

    const managecustomer =()=>{
        setpage(0)
    }
return(
    <div>
     {
        page == 0?
        <Customer AddCustomer={addcustomer}/>
        :
        page == 1?
        <Addcustomer goback={managecustomer}/>
        :null
     }
    </div>
)
}