import React,{useState} from "react";

import { Link, useLocation} from "react-router-dom";
import style from "./header.module.css";
const Header = ({setShowModal}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
const modalHandler=()=>{
  setShowModal(true)
}
const location=useLocation()
console.log(location.pathname.split('/'));
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
        
       {location.pathname.split('/')[1]==='createaccount'|| location.pathname.split('/')[1]==='login'?'': <div className={style.rightSide}>
          <div onClick={modalHandler} className={style.cart}>
            <i class="fa fa-shopping-cart"></i> Your Cart
          </div>
        </div>}
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
            className={`${style.headerItems} ${ isExpanded ? style.collapsed : ""
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
      
    </div>
  );
};

export default Header;
