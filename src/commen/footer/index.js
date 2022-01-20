import { Link } from "react-router-dom";
import "./footer.modules.css";
const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className=" column-1">
        <div className="footer-title">Help</div>
        <div className="row-2">
          <Link to="/">Men</Link>
        </div>
        <div className="row-3">
          <Link to="/"> Women</Link>
        </div>
        <div className="row-4">
          <Link to="/"> Jwelery</Link>
        </div>
        <div className="row-5">
          <Link to="/"> Electronics</Link>
        </div>
      </div>
      <div className=" column-2">
        <div className="footer-title">Account</div>
        <div className="row-2">
          <Link to="/">Login</Link>
        </div>
        <div className="row-3">
          <Link to="/">Create An Account</Link>
        </div>
        <div className="row-4">
          <Link to="/">Create Wishlist</Link>
        </div>
      </div>
    </div>
      </>
  );
};

export default Footer;
