import { Link, useLocation } from "react-router-dom";
import AddressBar from "../../../commen/addressbar";
import Footer from "../../../commen/footer";
import Header from "../../../commen/header";
import Pagination from "../../../commen/pagination";
import Spinner from "../../../utils/loader";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../category.style.css";

const MenClothing = ({data,loading}) => {
  const params=useLocation()
  const currentPage=params.pathname.split('/')[1]
  console.log(data);
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
            <Link to={"/"}>oldProducts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>T-shirts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>Pants</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>Dress</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>Shorts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>Shirts</Link>
          </div>
          <div className="table-link">
            <Link to={"/"}>Register</Link>
          </div>
        </div>
      </div>

      <div className="column-2">
        <AddressBar currentPage={currentPage} />
        <Pagination />
        <div className="img-container">
          <div className="row">
            {!loading?data.map((item) => {
              console.log(item.title.slice(0,2));
              return (
                <div className="inner-column">
                  <div className="card">
                  <div className="image">
                          <LazyLoadImage
                          effect="blur"
                          src={item.image}
                          alt="image-products"

                          />
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
            }):<Spinner/>}
          </div>
        </div>
      </div>
    </container>
    <Footer />
  </>  
  );
};

export default MenClothing;
