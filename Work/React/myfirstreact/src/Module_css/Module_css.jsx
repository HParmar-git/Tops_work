import React from "react"; 
import A from './style1.module.css' 
import B from  './style2.module.css' 



function Module_css() {
  return (
    <div>

    <h1 className={A.bigdata}> Hi I'm module style1 ... !!</h1>
    <h2 className={B.bigdata}> Hi I'm module style2 ... !!</h2> 


    </div>
  )
}

export default Module_css
