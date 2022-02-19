import Header from "../../commen/header/index";
import Footer from "../../commen/footer/index";
import Facilities from "./facilities";
import FeaturedCollections from "./featuredCollection";
import HomeBanner from "./homeBanner";
import LatestProducts from "./LatestProducts";
import { useEffect, useState } from "react";
import Spinner from "../../utils/loader";
import { Helmet } from 'react-helmet';

const HomePage = ({ data, loading ,setShowModal,cart,setCart}) => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    //3 last products
    const threeLastProduct = data.slice(17, 20);
    setLatestProducts(threeLastProduct);
    //most popular
    const slice = data.slice(0, 5);
    setPopular(slice);
  }, [data]);
  console.log(latestProducts);
  return (
    <>
    <Helmet><title>Home</title></Helmet>

      <Header setShowModal={setShowModal} cart={cart} setCart={setCart}/>
      <HomeBanner />
      <Facilities />

      {loading ? <Spinner /> : <LatestProducts lastData={latestProducts} />}

      {loading ? <Spinner /> : <FeaturedCollections popularData={popular} />}
      <Footer />
    </>
  );
};

export default HomePage;
