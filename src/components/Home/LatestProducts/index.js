import { Link } from "react-router-dom";
import "./latestProducts.modules.css";

const LatestProducts = ({ lastData }) => {
  console.log("3 latetst Products", lastData);
  return (
    <section className="products-container-grid">
      <h1 >Latest Products</h1>
      <div className="products-grid">
        {lastData.map((data) => {
          return (
            <div className="column">
              <div className="row">
                <div className="img">
                  <img src={data.image} alt="" />
                </div>
              <div className="mask">
                <Link to='/'>Quick View</Link>
              </div>
                <div className="title-product">
                <p>{data.title}</p>
                </div>
                <p className="price"> <i class="fa fa-shopping-cart"></i> {`$${data.price}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LatestProducts;
