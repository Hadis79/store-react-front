import { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../commen/footer";
import Header from "../../commen/header";

import { InitContext } from "../../context/InitContext";
import "./login.modules.css";
const Login = () => {
  const loginContext = useContext(InitContext);
  const { email, setEmail, password, setPassword, validator, logInHandler } =
    loginContext;
  return (
    <>
      <div className="login-container">
        <Header />
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

        <div className="main-content-login">
          <div className="column-1">
            <h2>NEW CUSTOMERS</h2>
            <p>
              By creating an account with our store, you will be able to move
              through the checkout process faster, store multiple shipping
              addresses, view and track your orders in your account and more.
            </p>
            <div className="create-account-link">
              <Link to="/">CREATE AN ACCOUNT</Link>
            </div>
          </div>
          <div className="column-2">
            <form action="/" onSubmit={(e) => logInHandler(e)}>
              <h2>REGISTERED CUSTOMERS</h2>
              <p>If you have an account with us, please log in.</p>
              <div className="inputs">
                <ul className="form-item">
                  <li>
                    <label htmlFor="text">EMAIL ADDRESS:</label>
                  </li>
                  <li>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validator.current.showMessageFor("email");
                      }}
                    />
                  </li>
                  {validator.current.message("email", email, "required|email")}
                </ul>
                <ul className="form-item">
                  <li>
                    <label htmlFor="text">PASSWORD:</label>
                  </li>
                  <li>
                    <input
                      type="password"
                      name="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validator.current.showMessageFor("Password");
                      }}
                    />
                  </li>
                  {validator.current.message(
                    "Password",
                    password,
                    "required|min:5"
                  )}
                </ul>
                <div className="form-item btn-login">
                  <p>Forgot Your password ?</p>
                  <button>LOGIN</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
