import { Link } from "react-router-dom";
import AddressBar from "../../../commen/addressbar";
import Footer from "../../../commen/footer";
import Header from "../../../commen/header";
import Pagination from "../../../commen/pagination";
import "./menClothing.modules.css";
const MenClothing = () => {
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
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>{" "}
            <div className="row">
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>{" "}
            <div className="row">
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>{" "}
            <div className="row">
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>
            <div className="row">
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>
            <div className="row">
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>
            <div className="row">
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>
            <div className="row">
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>
            <div className="row">
              <div className="gallery">img 1</div>
              <div className="gallery">img 2</div>
              <div className="gallery">img 3</div>
              <div className="gallery">img 4</div>
            </div>
          </div>
        </div>
      </container>
      <Footer />
    </>
  );
};

export default MenClothing;
