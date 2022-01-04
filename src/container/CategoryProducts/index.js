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
    const getCategoryInData=async()=>{
        try{

            const data=await getProductsCategoryApi(api)
            setNewData(data.data)
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{

        getCategoryInData()
    },[])
   const component={
       jewelery:<Jewelery data={newData}/>,
       men:<MenClothing data={newData}/>,
       electronics:<Electronics data={newData}/>,
       woman:<WomanClothing data={newData}/>

    }
    console.log(baseName);
   return component[baseName]
}
 
export default CategoryProducts;