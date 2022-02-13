import { Link } from "react-router-dom";
import img from '../../../utils/images/banner_img.jpg'
import "./homeBanner.css";
import HomeTextSlider from "./homeTextSlider";

const HomeBanner = () => {
  return (
    <div className="banner">
      <img src={img} alt="banner pic" />
      <div className="banner-container">
        <div className="banner-left-side">
          <h2>
            B <br />U <br />Y
          </h2>
        </div>
        <div className="banner-rigth-side">
      <HomeTextSlider />
          <div className="shop-collection">
            <Link to="/">SHOP COLLECTION NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
