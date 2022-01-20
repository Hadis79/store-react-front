import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Electronics from "../../components/Categories/Electronics";
import Jewelery from "../../components/Categories/Jewelery";
import MenClothing from "../../components/Categories/MenClothing";
import WomanClothing from "../../components/Categories/WomanClothing";
import { getProductsCategoryApi } from "../../services/products";
import {paginate} from '../../utils/paginate'
const CategoryProducts = ({ baseName, api }) => {
  console.log(api);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(false);

//pagination
  const [currentPage,setCurrentPage]=useState(1)
  const [perPage,setPerpage]=useState(3)
  const [filter,setFilter]=useState({createdAt:''})
  const getCategoryInData = async (filter) => {
    console.log(filter);
    try {
      setLoading(true);
      const data = await getProductsCategoryApi({api,params:filter});
      console.log(data.data);
      setNewData(data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  };
  useEffect(() => {
    getCategoryInData();
  }, [baseName]);
  //pagination
  const onChangePage=(page)=>{
    setCurrentPage(page)
    // console.log(page);
  }
  //filter newest
  const filteringData=(newData)=>{
setFilter(newData)
  }
//paginate
const startPage=paginate(newData,currentPage,perPage)


  const allproducts = {
    data: startPage,
    totalData:newData,
    perPage,
    currentPage,
    onChangePage,
    setCurrentPage,
    loading,
filteringData
  };
  const component = {
    jewelery: <Jewelery {...allproducts} />,
    men: <MenClothing {...allproducts} />,
    electronics: <Electronics {...allproducts} />,
    woman: <WomanClothing {...allproducts} />,
  };
  console.log(baseName);
  return component[baseName];
};

export default CategoryProducts;
