import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import SimpleReactValidator from "simple-react-validator";
import Footer from "../../commen/footer";
import Header from "../../commen/header";
import { registerUserApi } from "../../services/user";
import "./createAccount.modules.css";
const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [number, setNumber] = useState(null);
  const [userName, setUserName] = useState(null);
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "this is require",
        email: "your email is invalid",
        min: "your password should be more than 5 ",
      },
      element: message => <div style={{ color: "red" }}>{message}</div>

    })
  );
  //registerHandler
  const registerHandler = async (e) => {
    console.log('form submitted');
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      number,
      userName,
    };
    try {
      if (validator.current.allValid()) {
        const register = await registerUserApi();
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {}
  };
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
            <span className="title">
              {" "}
              <Link to="/">back to previous page</Link>
            </span>
          </div>
        </div>

        <div className="main-content-createAccount">
          <div className="column-1">
            <form action="/" onSubmit={(e) => registerHandler(e)}>
              <h2>REGISTRATION</h2>
              <p>
                Welcome, please enter the following details to continue. If you
                have previously registered with us,{" "}
                <span>
                  <Link to="/">click here</Link>
                </span>
              </p>
              <div className="inputs">
                <ul className="form-item">
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
                <ul className="form-item">
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

                <ul className="form-item">
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
                <ul className="form-item">
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
                  {validator.current.message("userName", userName, "required|min:5")}

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
                  {validator.current.message("Password", password, "required|min:5")}
                </ul>
                <ul className="form-item">
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
                <ul className="form-item">
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
