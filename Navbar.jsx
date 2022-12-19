import React, { useState } from 'react'
import Wallet from './wallet';
import './App.css';

const Navbar = ({balance}) => {

    const refreshPage = ()=>{
        window.location.reload();
     }

  return (
    
    <div id = "btn">
        <button  onClick={refreshPage}>refresh</button>
        <span>balance={balance}</span>
      
    </div>

  )
}

export default Navbar
