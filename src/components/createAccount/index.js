import { Link } from "react-router-dom";
import Footer from "../../layots/footer";
import Header from "../../layots/header";
import "./createAccount.modules.css";
const CreateAccount = () => {
  return (
    <>
      <div className="createaccount-container">
        <Header />
        <div className="addressbar">
          <div className="links">
            <span>
              <Link to="/">Home{" >"} </Link>
            </span>
            <span>CreateAccount</span>
          </div>
          <div>
            <span   className="title">
              {" "}
              <Link to="/">back to previous page</Link>
            </span>
          </div>
        </div>

        <div className="main-content-createAccount">
          <div className="column-1">
            <form action="/">
              <h2>REGISTRATION</h2>
              <p>
                Welcome, please enter the following details to continue.
                If you have previously registered with us,{" "}
                <span>
                  <Link to="/">click here</Link>
                </span>
              </p>
              <div className="inputs">
                <ul className="form-item">
                 <li><label htmlFor="text">FIRSTNAME:</label></li> 
                  <li><input type="text" name="firstName" /></li>
                </ul>
                <ul className="form-item">
                  <li><label htmlFor="text">LASTNAME:</label></li>
                  <li><input type="text" name="lastName" /></li>
                </ul>
                <ul className="form-item">
                  <li><label htmlFor="text">EMAIL:</label></li>
                  <li><input type="email" name="email" /></li>
                </ul>
                <ul className="form-item">
                  <li><label htmlFor="text">PASSWORD:</label></li>
                  <li><input type="password" name="passwrd" /></li>
                </ul>
                <ul className="form-item">
                  <li><label htmlFor="text">RE-ENTERPASSWORD:</label></li>
                  <li><input type="password" name="password" /></li>
                </ul>
                <ul className="form-item">
                  <li><label htmlFor="text">MOBILENUMBER:</label></li>
                  <li><input type="number" name="number" /></li>
                </ul>
                <ul className="form-item btn-createAccount">
                  <button>REGISTER NOW</button>
                </ul>
                <div className="form-item">
                  <p>
                    By clicking this button, you are agree to my{" "}
                    <span>
                      <Link to="/"> Policy Terms and Conditions.</Link>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="column-2">
            <h2>Completely Free Account</h2>
            <p>
              Pellentesque neque leo, dictum sit amet accumsan non, dignissim ac
              mauris. Mauris rhoncus, lectus tincidunt tempus aliquam, odio
              libero tincidunt metus, sed euismod elit enim ut mi. Nulla
              porttitor et dolor sed condimentum. Praesent porttitor lorem dui,
              in pulvinar enim rhoncus vitae. Curabitur tincidunt, turpis ac
              lobortis hendrerit, ex elit vestibulum est, at faucibus erat
              ligula non neque.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CreateAccount;
