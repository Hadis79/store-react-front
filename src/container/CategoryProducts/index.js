import { useCallback, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Products from "../../components/Categories/Products";
import { getProductsCategoryApi } from "../../services/products";
import { paginate } from "../../utils/paginate";
const CategoryProducts = ({ baseName, api, setShowModal, cart, setCart }) => {
  console.log(api);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(false);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(3);
  const getCategoryInData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProductsCategoryApi({ api });
      console.log(data.data);
      setNewData(data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  }, [api]);
  useEffect(() => {
    getCategoryInData();
  }, [baseName, getCategoryInData]);
  //pagination
  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  //paginate
  const startPage = paginate(newData, currentPage, perPage);

  const allproducts = {
    data: startPage,
    totalData: newData,
    perPage,
    currentPage,
    onChangePage,
    setCurrentPage,
    loading,
    setShowModal,
    setCart,
    cart,
  };
  console.log("data", newData);

  console.log(baseName);
  return (
    <>
      <Products {...allproducts} />
    </>
  );
};

export default CategoryProducts;
