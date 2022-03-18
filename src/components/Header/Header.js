import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {

    const userName = sessionStorage.getItem("userName");
    return (
        <div className="header">
            <Link to="/">
            <div className="logo"> Album APP</div>
            </Link>
            <h2 className="username">Welcome {userName}</h2>
            <div className="user-image">                
                <img src={user} alt="user" />
            </div>
        </div> 
    )
};

export default Header;