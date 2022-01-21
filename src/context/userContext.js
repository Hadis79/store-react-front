import { InitContext } from "./InitContext";
import SimpleReactValidator from "simple-react-validator";
import { logInUserApi, registerUserApi } from "../services/user";
import { useRef, useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../utils/toast";
import { toast } from 'react-toastify';

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
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const navigate = useNavigate();
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
      username: userName,
      password,
    };
    console.log(JSON.stringify(user));
    try {
      if (validator.current.allValid()) {
        const { data, status } = await logInUserApi(user);
        if (status === 200) {
          console.log("you loggedIn");
          localStorage.setItem("token", data.token);
          successToast("You logged In SuccessFully");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      console.log(error);
      errorToast("youshuld craete account");
      navigate("/createaccount");
    }
  };
  //scrollTop after show modal
  useEffect(() => {
    console.log("execute");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [children]);
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
        city,
        street,
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
      setCity("");
      setStreet("");
    };
    try {
      if (validator.current.allValid()) {
        const { status } = await registerUserApi(user);
        if (status === 200) {
          toast.success("you'r registered were successFully...")
          navigate('/login')
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
toast.error('something went wrong...')
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

        registerHandler,
        logInHandler,
        validator,
        city,
        setCity,
        street,
        setStreet,
      }}
    >
      {children}
    </InitContext.Provider>
  );
};

export default UserContext;
