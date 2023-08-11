import React, { useState } from "react";
import Leads from "./Leads";
import Projecttracking from "./Projecttracking";

export default function Connecter(){
    const [page, setpage]=useState(0);

     const projecttrack =()=>{
        setpage(1)
     }

     const goback=()=>{
        setpage(0)
     }
    return(

        <div>
            {
              page === 0?
              (<Leads track={projecttrack}/>)
              :
              page === 1?
              (<Projecttracking back={goback}/>)
              :
              null
            }
        </div>
    )
}