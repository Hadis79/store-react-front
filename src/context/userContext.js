import { InitContext } from "./InitContext";
import SimpleReactValidator from "simple-react-validator";
import { registerUserApi } from "../services/user";
import { useRef, useState } from "react/cjs/react.development";

const UserContext = ({ children }) => {
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
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );
  //registerHandler
  const registerHandler = async (e) => {
    console.log("form submitted");
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
    <InitContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        userName,
        setUserName,
        number,
        setNumber,
        registerHandler,
        loginHandler,
        validator,
      }}
    >
      {children}
    </InitContext.Provider>
  );
};

export default UserContext;
