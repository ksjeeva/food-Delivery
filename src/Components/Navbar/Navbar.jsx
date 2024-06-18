import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {Link} from 'react-router-dom'

const Navbar = () => { 
    const [menu,setMenu] = useState("Menu")
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" />
      <ul className="navbar-menu">
        <Link  to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu=="Menu"?"active":""}>Menu</a>
        <a href='#appdownload' onClick={()=>setMenu("MobileApp")}  className={menu==="MobileApp"?"active":""}>Mobile-App</a>
        <a href='#footer'  onClick={()=>setMenu("ContactUS")} className={menu==="ContactUS"?"active":""}>Contact US</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-searchicon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
