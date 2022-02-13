import { Link, useLocation } from "react-router-dom";
import AddressBar from "../../../commen/addressbar";
import Footer from "../../../commen/footer";
import Header from "../../../commen/header";
import Pagination from "../../../commen/pagination";
import Spinner from "../../../utils/loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import style from "../category.module.css";

const MenClothing = ({
  data,
  totalData,
  perPage,
  currentPage,
  setCurrentPage,
  onChangePage,
  loading,
  setShowModal,
  setCart,
 cart
}) => {
  const params = useLocation();
  const currentRout = params.pathname.split("/")[1];
  console.log(data);

  //add price to cart
  const showModalCart = (product) => {
    setCart([...cart,product])
    window.scrollTo(0, 0);
    console.log("clicked", product);
  };
  console.log(cart);
  return (
    <>
      <Header setShowModal={setShowModal} cart={cart} setCart={setCart}/>

      <container>
        <div className={style.column1}>
          <div className={style.row1}>
            <h4 className={style.title}>OURPRODUCTS</h4>

            <div className={style.tableLink}>
              <Link to={"/"}>newProducts</Link>
            </div>
            <div className={style.tableLink}>
              <Link to={"/"}>oldProducts</Link>
            </div>
            <div className={style.tableLink}>
              <Link to={"/"}>T-shirts</Link>
            </div>
            <div className={style.tableLink}>
              <Link to={"/"}>Pants</Link>
            </div>
            <div className={style.tableLink}>
              <Link to={"/"}>Dress</Link>
            </div>
            <div className={style.tableLink}>
              <Link to={"/"}>Shorts</Link>
            </div>
            <div className={style.tableLink}>
              <Link to={"/"}>Shirts</Link>
            </div>
            <div className={style.tableLink}>
              <Link to={"/"}>Register</Link>
            </div>
          </div>
        </div>

        <div className={style.column2}>
          <AddressBar currentPage={currentRout} />
          <div className={style.imgContainer}>
            <div className={style.row}>
              {!loading ? (
                data.map((item) => {
                  console.log(item.title.slice(0, 2));
                  return (
                    <div className={style.innerColumn}>
                      <div className={style.card}>
                        <div className={style.image}>
                          <LazyLoadImage
                            effect="blur"
                            src={item.image}
                            alt="image-products"
                          />
                        </div>
                        <div className={style.bodyHeader}>
                          <div className={style.title}>
                            {item.title.slice(0, 10)}...
                          </div>
                          <div className={style.price}>${item.price}</div>
                        </div>
                        <div className={style.body}>
                          {item.description.slice(0, 50)}
                        </div>
                        <button onClick={() => showModalCart(item)}>
                          add to cart
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className={style.spinner}>
                  <Spinner />
                </div>
              )}
            </div>
          </div>
          <Pagination
            totalData={totalData.length}
            currentPage={currentPage}
            perPage={perPage}
            onChangePage={onChangePage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </container>
      <Footer />
    </>
  );
};

export default MenClothing;
