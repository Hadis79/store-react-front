import { Link } from "react-router-dom";
import './addressbar.modules.css'


const AddressBar = () => {
    return ( 
        <div className="addressbar">
        <div className="links">
          <span>
            <Link to="/">Home{" >"} </Link>
          </span>
          <span>Login</span>
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