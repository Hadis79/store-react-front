import { Link } from "react-router-dom";
import style from "./latestProducts.module.css";

const LatestProducts = ({ lastData }) => {
  console.log("3 latetst Products", lastData);
  return (
    <section className={style.productsContainerGrid}>
      <h1 >Latest Products</h1>
      <div className={style.productsGrid}>
        {lastData.map((data) => {
          return (
            <div key={data.id} className={style.column}>
              <div className={style.row}>
                <div className={style.img}>
                  <img src={data.image} alt="" />
                </div>
              <div className={style.mask}>
                <Link to='/'>Quick View</Link>
              </div>
                <div className={style.titleProduct}>
                <p>{data.title}</p>
                </div>
                <p className={style.price}> <i className="fa fa-shopping-cart"></i> {`$${data.price}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LatestProducts;
