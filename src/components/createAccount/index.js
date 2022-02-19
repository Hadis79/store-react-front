import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AddressBar from "../../commen/addressbar";
import Footer from "../../commen/footer";
import Header from "../../commen/header";
import { InitContext } from "../../context/InitContext";
import style from "./createAccount.module.css";
import { Helmet } from 'react-helmet';
const CreateAccount = () => {
  const registerContext = useContext(InitContext);
  const {
   
    registerHandler,
    validator,
   info,
   setInfo
  } = registerContext;
  const params=useLocation()
  const currentPage=params.pathname.split('/')[1]
  return (
    <>
    <Helmet><title>Register</title></Helmet>

      <div className={style.createaccountContainer}>
        <Header />
       <AddressBar currentPage={currentPage}/>
       
        <div className={style.mainContentCreateAccount}>
          <div className={style.column1}>
            <form action="/" onSubmit={(e) => registerHandler(e)}>
              <h2>REGISTRATION</h2>
              <p>
                Welcome, please enter the following details to continue. If you
                have previously registered with us,{" "}
                <span>
                  <Link to="">click here</Link>
                </span>
              </p>
              <div className={style.inputs}>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">FIRSTNAME:</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="firstName"
                      value={info.firstName}
                      onChange={(e) => {
                        setInfo({...info,firstName:e.target.value});
                        validator.current.showMessageFor("firstName");
                      }}
                    />
                  </li>
                  {validator.current.message(
                    "firstName",
                    info.firstName,
                    "required"
                  )}
                </ul>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">LASTNAME:</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="lastName"
                      value={info.lastName}
                      onChange={(e) => {
                        setInfo({...info,lastName:e.target.value});
                        validator.current.showMessageFor("lastName");
                      }}
                    />
                  </li>
                  {validator.current.message("lastName", info.lastName, "required")}
                </ul>

                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">EMAIL:</label>
                  </li>
                  <li>
                    <input
                      type="email"
                      name="email"
                      value={info.email}
                      onChange={(e) => {
                        setInfo({...info,email:e.target.value});
                        validator.current.showMessageFor("email");
                      }}
                    />
                  </li>
                  {validator.current.message("email", info.email, "required|email")}
                </ul>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">USERNAME:</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="userName"
                      value={info.userName}
                      onChange={(e) => {
                        setInfo({...info,userName:e.target.value});
                        validator.current.showMessageFor("username");
                      }}
                    />
                  </li>
                  {validator.current.message(
                    "userName",
                    info.userName,
                    "required|min:5"
                  )}
                </ul>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">PASSWORD:</label>
                  </li>
                  <li>
                    <input
                      type="password"
                      name="Password"
                      value={info.password}
                      onChange={(e) => {
                        setInfo({...info,password:e.target.value});
                        validator.current.showMessageFor("Password");
                      }}
                    />
                  </li>
                  {validator.current.message(
                    "Password",
                    info.password,
                    "required|min:5"
                  )}
                </ul>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">RE-ENTERPASSWORD:</label>
                  </li>
                  <li>
                    <input
                      type="password"
                      name="Confirmpassword"
                      value={info.confirmPassword}
                      onChange={(e) => {
                        setInfo({...info,confirmPassword:e.target.value});
                        validator.current.showMessageFor("Confirmpassword");
                      }}
                    />
                  </li>
                  {validator.current.message(
                    "Confirmpassword",
                    info.confirmPassword,
                    "required|min:5"
                  )}
                </ul>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">CITY:</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="city"
                      value={info.city}
                      onChange={(e) => {
                        setInfo({...info,city:e.target.value});
                        validator.current.showMessageFor("city");
                      }}
                    />
                  </li>
                  {validator.current.message("city", info.city, "required")}
                </ul>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">STREET:</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="street"
                      value={info.street}
                      onChange={(e) => {
                        setInfo({...info,street:e.target.value});
                        validator.current.showMessageFor("street");
                      }}
                    />
                  </li>
                  {validator.current.message("street", info.street, "required")}
                </ul>
               
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">MOBILENUMBER:</label>
                  </li>
                  <li>
                    <input
                      type="number"
                      name="number"
                      value={info.number}
                      onChange={(e) => {
                        setInfo({...info,number:e.target.value});
                        validator.current.showMessageFor("number");
                      }}
                    />
                  </li>
                  {validator.current.message("number", info.number, "required")}
                </ul>
                <ul className={`${style.formItem} ${style.btnCreateAccount}`}>
                  <button>REGISTER NOW</button>
                </ul>
                <div className={style.formItem}>
                  <p>
                    By clicking this button, you are agree to my{" "}
                    <span>
                      <Link to=""> Policy Terms and Conditions.</Link>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className={style.column2}>
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
