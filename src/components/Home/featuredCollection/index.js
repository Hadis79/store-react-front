import SimpleSlider from "./simpleSlider";
import './featuredCollection.modules.css'

const FeaturedCollections = ({popularData}) => {
  return (
    <section className="main-container">
      <h1 >POPULAR COLLECTION</h1>
      <div className="slider">
        <SimpleSlider data={popularData} />
      </div>
    </section>
  );
};

export default FeaturedCollections;
