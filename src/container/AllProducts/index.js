import { useEffect, useState } from "react";
import HomePage from "../../components/Home";
import { getProductsApi } from "../../services/products";

const AllProducts = () => {
    const [productsData,setProductsData]=useState([])
  const getProducts = async () => {
    try {
      const {data} = await getProductsApi();
      setProductsData(data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <HomePage data={productsData} />;
};

export default AllProducts;
