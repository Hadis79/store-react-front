import { Link } from "react-router-dom";
import "./facilities.modules.css";

const Facilities = () => {
  return (
    <div className="main-content">
      {" "}
      <div className="facilities-container">
        <div className="contact">
          <h2>follow us:</h2>
          <span>
            <Link to="/">
              <i class="fa fa-twitter"></i>
            </Link>
          </span>
          <span>
            <span>
              <Link to="/">
                {" "}
                <i class="fa fa-facebook-f"></i>
              </Link>
            </span>
          </span>
        </div>
        <div className="border-right"></div>
        <div className="shipping">
          <span>
            <i class="fa fa-truck"></i>
          </span>
          <div>
            <h2>Free Shipping</h2>
          <p>on orders over $ 199</p>
          </div>
        </div>
        <div className="border-right"></div>
        <div className="order">
          <span></span>
          <p>Order online</p>
          <h2>Tel:999 4567 8902</h2>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
