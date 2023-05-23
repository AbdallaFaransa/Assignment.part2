import React, { useState } from "react";
import on from './image/On.jpg';
import off from './image/off.jpg';
import './index.css'


const App =() =>{
  const[toggle,settoggle]=useState(false)
  
  const togglebutton = ()=>
  settoggle(!toggle)
  return(
     <div align="center">

      <img src={toggle? on:off} className="" width={200} alt=""/><br/>
      <button  onClick={togglebutton}>{toggle? 'on':'off' }</button>
     </div>
  )
}

export default App;