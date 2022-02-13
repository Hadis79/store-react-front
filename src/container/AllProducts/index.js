import { useEffect, useState } from "react";
import HomePage from "../../components/Home";
import { getProductsApi } from "../../services/products";

const AllProducts = ({cart,setCart,showModal,setShowModal}) => {
        const [productsData, setProductsData] = useState([]);
        const [loading, setLoading] = useState(false);
        
        const getProducts = async() => {
            try {
                setLoading(true);
                const { data } = await getProductsApi();
                setProductsData(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);

                console.log(err);
            }
        };
        useEffect(() => {
            getProducts();
        }, []);
        return ( <> < HomePage cart={cart} setCart={setCart} setShowModal={setShowModal} showModal={showModal} data = { productsData }
            loading = { loading }

            />

            </>);
        };

        export default AllProducts;