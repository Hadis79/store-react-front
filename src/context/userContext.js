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
  const [address, setAddress] = useState("");
  const [showModal,setShowModal]=useState(false)
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
  //logIn handler
  const logInHandler = async (e) => {
    console.log("form submitted");
    e.preventDefault();
    const user = {
      email,
      password,
    };
    try {
      if (validator.current.allValid()) {
        // const register = await registerUserApi();
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {}
  };
  //registerHandler
  const registerHandler = async (e) => {
    console.log("form submitted");
    e.preventDefault();
    const user = {
      name: {
        firstName,
        lastName,
      },
      email,
      password,
      number,
      userName,
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
    };
    const resetuser = () => {
      setFirstName("");
      setLastName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setNumber("");
      setAddress("");
    };
    try {
      if (validator.current.allValid()) {
        const { status } = await registerUserApi(user);
        if (status === 200) {
          setShowModal(true)
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      setShowModal(true)

      console.log(error);
    }
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
        address,
        setAddress,
        setNumber,
        showModal,
        setShowModal,
        registerHandler,
        logInHandler,
        validator,
      }}
    >
      {children}
    </InitContext.Provider>
  );
};

export default UserContext;
