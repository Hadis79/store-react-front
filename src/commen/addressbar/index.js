import { Link } from "react-router-dom";
import './addressbar.css'


const AddressBar = ({currentPage}) => {
    return ( 
        <div className="addressbar">
        <div className="links">
          <span>
            <Link to="/">Home{" >"} </Link>
          </span>
          <span>{currentPage}</span>
        </div>
        <div>
          <span className="title">
            {" "}
            <Link to="/">back to previous page</Link>
          </span>
        </div>
      </div>
     );
}
 
export default AddressBar;