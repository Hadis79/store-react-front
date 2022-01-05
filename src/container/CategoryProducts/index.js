import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Electronics from "../../components/Categories/Electronics";
import Jewelery from "../../components/Categories/Jewelery";
import MenClothing from "../../components/Categories/MenClothing";
import WomanClothing from "../../components/Categories/WomanClothing";
import { getProductsCategoryApi } from "../../services/products";




const CategoryProducts = ({baseName,api}) => {
    console.log(api);
    const [newData,setNewData]=useState([])
    const [loading,setLoading]=useState(false)
    
    const getCategoryInData=async()=>{
        try{
setLoading(true)
            const data=await getProductsCategoryApi(api)
            setNewData(data.data)
            setLoading(false)
        }catch(err){
            setLoading(false)

            console.log(err);
        }
    }
    useEffect(()=>{

        getCategoryInData()
    },[baseName])
    const allproducts={
       data: newData,
       loading
    }
   const component={
       jewelery:<Jewelery {...allproducts}/>,
       men:<MenClothing {...allproducts}/>,
       electronics:<Electronics {...allproducts}/>,
       woman:<WomanClothing {...allproducts}/>

    }
    console.log(baseName);
   return component[baseName]
}
 
export default CategoryProducts;