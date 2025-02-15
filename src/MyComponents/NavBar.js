import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

  const isActive = (id) => {
    let navs = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navs.length; i++) {
      navs[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
  }

  return (
    <div>
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link id="addbillnav" className="nav-link active" onClick={() =>{isActive("addbillnav")}} aria-current="page" to="/">Add Bill</Link>
        </li>
        <li className="nav-item">
            <Link id="billmasternav" className="nav-link" onClick={() =>{isActive("billmasternav")}} to="/BillMaster">Bill Master</Link>
        </li>
    </ul>
    </div>
  )
}
