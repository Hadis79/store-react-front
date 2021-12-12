import Header from "../../commen/header/index";
import Footer from "../../commen/footer/index";
import Facilities from "./facilities";
import FeaturedCollections from "./featuredCollection";
import HomeBanner from "./homeBanner";
import LatestProducts from "./LatestProducts";
import { useEffect, useState } from "react";
import Spinner from "../../utils/loader";

const HomePage = ({ data, loading }) => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    //3 last products
    const threeLastProduct = data.slice(17, 20);
    setLatestProducts(threeLastProduct);
    //most popular
    const popular = data.slice(0, 5);
    setPopular(popular);
  }, [data]);
  console.log(latestProducts);
  return (
    <>
      <Header />
      <HomeBanner />
      <Facilities />

      {loading ? <Spinner /> : <LatestProducts lastData={latestProducts} />}

      {loading ? <Spinner /> : <FeaturedCollections popularData={popular} />}
      <Footer />
    </>
  );
};

export default HomePage;
