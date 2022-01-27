import { Link } from "react-router-dom";
import ModalCart from "../../../utils/modal/index";

import "./homeBanner.css";
import HomeTextSlider from "./homeTextSlider";

const HomeBanner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-left-side">
          <h2>
            B <br />U <br />Y
          </h2>
        </div>
        <div className="banner-rigth-side">
      <HomeTextSlider />
          <div className="shop-collection">
            <Link to="home">SHOP COLLECTION NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
