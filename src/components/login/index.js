import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../commen/footer";
import Header from "../../commen/header";
import 'react-toastify/dist/ReactToastify.css';

import { InitContext } from "../../context/InitContext";
import style from "./login.module.css";
import AddressBar from "../../commen/addressbar";
const Login = () => {
  const loginContext = useContext(InitContext);
  const {
    userName,
    setUserName,
    password,
    setPassword,
    validator,
    logInHandler,
   } = loginContext;
   const params=useLocation()
  const currentRoute=params.pathname.split('/')[1]
  return (
    <>
      <div className={style.loginContainer}>
        <Header />
        <AddressBar currentPage={currentRoute}/>
       
        <div className={style.mainContentLogin}>
          <div className={style.column1}>
            <h2>NEW CUSTOMERS</h2>
            <p>
              By creating an account with our store, you will be able to move
              through the checkout process faster, store multiple shipping
              addresses, view and track your orders in your account and more.
            </p>
            <div className={style.createAccountLink}>
              <Link to="/createaccount">CREATE AN ACCOUNT</Link>
            </div>
          </div>
          <div className={style.column2}>
            <form action="/" onSubmit={(e) => logInHandler(e)}>
              <h2>REGISTERED CUSTOMERS</h2>
              <p>If you have an account with us, please log in.</p>
              <div className={style.inputs}>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor={"text"}>USERNAME:</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="userName"
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                        validator.current.showMessageFor("userName");
                      }}
                      />
                  </li>
                  {validator.current.message("userName", userName, "required")}
                </ul>
                <ul className={style.formItem}>
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
                <div className={`${style.formItem} ${style.btnLogin}` }>
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
