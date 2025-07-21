import { LOGO_URL } from "../utils/constants";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("LogIn");

  const onlineStatus = useOnlineStatus();

  // console.log("rendering the header")
  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{ onlineStatus ? "Online📡" :"Offline⏳"}</li>
          <li>
            <Link to="/">
            Home
            </Link>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>My Orders</li>
          <button className="login" onClick={() => {
            btnNameReact === 'LogIn' ? setbtnNameReact('LogOut')
              : setbtnNameReact('LogIn');
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
