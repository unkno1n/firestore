import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
 return(
  <div className="navbar">
      <div className="nav-c-container">
 
      <div className="logo">
       React Form + Firebase
      </div>

      <div className="button-container">
      <div className="home-btn">
      <Link to="/home" >
      <button>Home</button>
      </Link>
      </div>

      <div className="login-btn">
      <Link to="/login" >
      <button>Login Now</button>
      </Link>
      </div>

      <div className="register-btn">   
      <Link to="/register" >
      <button>Register Now</button>      
      </Link>
      </div>
      </div>

      </div>
  </div>
 ); 
}

export default Nav