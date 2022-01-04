import { Link } from "react-router-dom";
import AddressBar from "../../../commen/addressbar";
import Footer from "../../../commen/footer";
import Header from "../../../commen/header";
import Pagination from "../../../commen/pagination";
const MenClothing = ({data}) => {
  return (
    <>
    <Header />

    <container>
      <div className="column-1">
        <div className="row-1">
          <h4 className="title">OURPRODUCTS</h4>
          <div className="table-link">
            <Link to={"/"}>newProducts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>newProducts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>newProducts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>newProducts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>newProducts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>newProducts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>newProducts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>newProducts</Link>
          </div>
        </div>
      </div>

      <div className="column-2">
        <AddressBar />
        <Pagination />
        <div className="img-container">
          <div className="row">
            {data.map((item) => {
              console.log(item.title.slice(0,2));
              return (
                <div className="inner-column">
                  <div className="card">
                    <div className="image">
                      <img src={item.image} alt="product-image" />
                    </div>
                    <div className="body-header">
                    <div className="title">{item.title.slice(0,10)}...</div>
                    <div className="price">${item.price}</div>
                    </div>
                    <div className="body">
                      {item.description.slice(0,50)}
                    </div>
                    <button>add to cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </container>
    <Footer />
  </>  
  );
};

export default MenClothing;
