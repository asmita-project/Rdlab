import React, { useState } from "react";
import Addcategory from "./addcategory";
import Category from "./category";

export default function Categoryconnection(){
    const [page,setpage]=useState(0)

    const addcategory =()=>{
        setpage(1)
    }

    const managecategory =()=>{
        setpage(0)
    }
return(
    <div>
     {
        page == 0?
        <Category Addcategory={addcategory}/>
        :
        page == 1?
        <Addcategory goback={managecategory}/>
        :null
     }
    </div>
)
}