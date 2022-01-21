import React from "react";

import { Link } from "react-router-dom";
import style from "./header.module.css";
import { useState } from "react";
import { Modal } from "../../utils/modal";
const Header = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const modal = () => {
    setShowModal(!showModal);
  };
console.log(showModal);
  return (
    <div className={style.container}>
      <div className={style.topHeader}>
        <div className={style.leftSide}>
          <div className={style.login}>
            <Link to="/login">
              <i class="fa fa-user"></i> logIn
            </Link>
          </div>
          <div className={style.createAccount}>
            <Link to="/createaccount">
              <i class="fa fa-lock"></i> create an account
            </Link>
          </div>
        </div>
        <div className={style.rightSide}>
          <div onClick={() => modal()} className={style.cart}>
            <i class="fa fa-shopping-cart"></i> Your Cart
          </div>
        </div>
      </div>
      <nav className={style.mainHeader}>
        <div className={style.navbar}>
          <div class={style.logo}>
            <h1>
              <span>E</span> -Shop
            </h1>
            <i
              className={`fa fa-bars ${style.faBars}`}
              aria-hidden="true"
              onClick={() => setIsExpanded(!isExpanded)}
            ></i>{" "}
          </div>

          <ul
            className={`${style.headerItems} ${
              isExpanded ? `${style.collapsed}` : ""
            }`}
          >
            <hr />
            <li className={style.headerItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.headerItem}>
              <Link to="/men">Men</Link>
            </li>
            <li className={style.headerItem}>
              <Link to="/woman">Women</Link>
            </li>
            <li className={style.headerItem}>
              <Link to="/jewelery">Jewelery</Link>
            </li>
            <li className={style.headerItem}>
              <Link to="/electronics">Electronic</Link>
            </li>
          </ul>
        </div>
      </nav>
      {showModal && <Modal/>}{" "}
    </div>
  );
};

export default Header;
