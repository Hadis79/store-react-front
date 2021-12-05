import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <div className="container">
      <div className="top-header">
        <div className="left-side">
          <div className="login">
            <Link to="home">
              <i class="fa fa-user"></i> logIn
            </Link>
          </div>
          <div className="create-account">
            <Link to="home">
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
      <div className="main-header">
        <div class="logo">
          <h1>
            
              <span>E</span> -Shop
           
          </h1>
        </div>
        <div className="navbar">
          {" "}
          <ul className="header-items">
            <li className="header-item">
              <Link to="home">Home</Link>
            </li>
            <li className="header-item">
              <Link to="home">Men</Link>
            </li>
            <li className="header-item">
              <Link to="home">Women</Link>
            </li>
            <li className="header-item">
              <Link to="home">Jewelery</Link>
            </li>
            <li className="header-item">
              <Link to="home">Electronic</Link>
            </li>
            <li className="header-item">
              <Link to="home">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
