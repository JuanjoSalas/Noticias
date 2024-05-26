import React from 'react';
import logo from "../../assets/img/logo.png"
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
        <img className="img" src={logo}/>
        <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/form">Add New</Link></span>
            <span><Link to="/list">News</Link></span>
        </nav>
    </div>
  )
}

export default Header;