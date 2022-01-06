import { useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import AddressBar from "../../commen/addressbar";
import Footer from "../../commen/footer";
import Header from "../../commen/header";
import { InitContext } from "../../context/InitContext";
import style from "./createAccount.module.css";
const CreateAccount = () => {
  const registerContext = useContext(InitContext);
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    userName,
    setUserName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    city,
    setCity,
    street,setStreet,
    number,
    setNumber,
    registerHandler,
    validator,
   
  } = registerContext;
  const params=useLocation()
  const currentPage=params.pathname.split('/')[1]
  return (
    <>
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
                  <Link to="/">click here</Link>
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
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        validator.current.showMessageFor("firstName");
                      }}
                    />
                  </li>
                  {validator.current.message(
                    "firstName",
                    firstName,
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
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        validator.current.showMessageFor("lastName");
                      }}
                    />
                  </li>
                  {validator.current.message("lastName", lastName, "required")}
                </ul>

                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">EMAIL:</label>
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
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">USERNAME:</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="userName"
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                        validator.current.showMessageFor("username");
                      }}
                    />
                  </li>
                  {validator.current.message(
                    "userName",
                    userName,
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
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">RE-ENTERPASSWORD:</label>
                  </li>
                  <li>
                    <input
                      type="password"
                      name="Confirmpassword"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        validator.current.showMessageFor("Confirmpassword");
                      }}
                    />
                  </li>
                  {validator.current.message(
                    "Confirmpassword",
                    confirmPassword,
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
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        validator.current.showMessageFor("city");
                      }}
                    />
                  </li>
                  {validator.current.message("city", city, "required")}
                </ul>
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">STREET:</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="street"
                      value={street}
                      onChange={(e) => {
                        setStreet(e.target.value);
                        validator.current.showMessageFor("street");
                      }}
                    />
                  </li>
                  {validator.current.message("street", street, "required")}
                </ul>
               
                <ul className={style.formItem}>
                  <li>
                    <label htmlFor="text">MOBILENUMBER:</label>
                  </li>
                  <li>
                    <input
                      type="number"
                      name="number"
                      value={number}
                      onChange={(e) => {
                        setNumber(e.target.value);
                        validator.current.showMessageFor("number");
                      }}
                    />
                  </li>
                  {validator.current.message("number", number, "required")}
                </ul>
                <ul className={`${style.formItem} ${style.btnCreateAccount}`}>
                  <button>REGISTER NOW</button>
                </ul>
                <div className={style.formItem}>
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
