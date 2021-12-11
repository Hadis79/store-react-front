import Header from "../../commen/header/index";
import Footer from "../../commen/footer/index";
import Facilities from "./facilities";
import FeaturedCollections from "./featuredCollection";
import HomeBanner from "./homeBanner";
import LatestProducts from "./LatestProducts";
import { useEffect, useState } from "react";

const HomePage = ({ data }) => {
  const [latestProducts, setLatestProducts] = useState([]);
  //3 last products
  useEffect(() => {
    const threeLastProduct = data.slice(17, 20);
    setLatestProducts(threeLastProduct);
  }, [data]);
  console.log(latestProducts);
  return (
    <>
      <Header />
      <HomeBanner />
      <Facilities />
      <LatestProducts lastData={latestProducts} />
      <FeaturedCollections />
      <Footer />
    </>
  );
};

export default HomePage;
