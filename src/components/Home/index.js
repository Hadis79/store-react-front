import Footer from "../../layots/footer";
import Header from "../../layots/header";
import Facilities from "./facilities";
import FeaturedCollections from "./featuredCollection";
import HomeBanner from "./homeBanner";
import LatestProducts from "./LatestProducts";

const Index = () => {
  return (
    <>
      <Header />
      <HomeBanner/>
      <Facilities/>
      <LatestProducts/>
      <FeaturedCollections/> 
       <Footer/>
    </>
  );
};

export default Index;
