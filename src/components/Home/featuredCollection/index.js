import SimpleSlider from "./simpleSlider";
import './featuredCollection.modules.css'

const FeaturedCollections = () => {
  return (
    <div className="main-container">
      <div className="title">FEATURED COLLECTION</div>
      <div className="slider">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default FeaturedCollections;
