import React from "react";

import { Link } from "react-router-dom";
import "./header.modules.css";
import { useState } from "react";
const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="container">
      <div className="top-header">
        <div className="left-side">
          <div className="login">
            <Link to="/login">
              <i class="fa fa-user"></i> logIn
            </Link>
          </div>
          <div className="create-account">
            <Link to="/createaccount">
              <i class="fa fa-lock"></i> create an account
            </Link>
          </div>
        </div>
        <div className="right-side">
          <div className="total-price">
            <Link to="home">
              <i class="fa fa-dollar"></i> 00.00
            </Link>
          </div>
          <div className="cart">
            <Link to="home">
              <i class="fa fa-shopping-cart"></i> empty cart
            </Link>
          </div>
        </div>
      </div>
      <nav className="main-header">
        <div className="navbar">
          <div class="logo">
            <h1>
              <span>E</span> -Shop
            </h1>
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={() => setIsExpanded(!isExpanded)}
            ></i>{" "}
          </div>
            <hr />

          <ul className={`header-items ${isExpanded ? "collapsed" : ""}`}>
            <li className="header-item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-item">
              <Link to="men">Men</Link>
            </li>
            <li className="header-item">
              <Link to="woman">Women</Link>
            </li>
            <li className="header-item">
              <Link to="jewelery">Jewelery</Link>
            </li>
            <li className="header-item">
              <Link to="electronics">Electronic</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
