import { InitContext } from "./InitContext";
import SimpleReactValidator from "simple-react-validator";
import { logInUserApi, registerUserApi } from "../services/user";
import { useRef, useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../utils/toast";
import { toast } from 'react-toastify';

const UserContext = ({ children }) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState(null);
  // const [confirmPassword, setConfirmPassword] = useState(null);
  // const [number, setNumber] = useState(null);
  // const [userName, setUserName] = useState(null);
  const [, forceUpdate] = useState();
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [street, setStreet] = useState("");
  const [info,setInfo]=useState({
    firstName:null,
    lastName:null,
    email:null,
    password:null,
    confirmPassword:null,
    number:null,
    userName:null,
    address:null,
    city:null,
    street:null
  })
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
      username: info.userName,
      password:info.password,
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
      errorToast("you should craete account");
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
        firstName:info.firstName,
        lastName:info.lastName,
      },
      email:info.email,
      password:info.password,
      number:info.number,
      userName:info.userName,
      address: {
        city:info.city,
        street:info.street,
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
    };
   console.log(user);
    try {
      if (validator.current.allValid()) {
        const { status } = await registerUserApi(user);
        if (status === 200) {
          toast.success("Your registration was successful ...          ")
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
       

        registerHandler,
        logInHandler,
        validator,
        info,
        setInfo
      }}
    >
      {children}
    </InitContext.Provider>
  );
};

export default UserContext;
