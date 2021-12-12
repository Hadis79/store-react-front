import { createContext } from "react";

export const InitContext = createContext({
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  confirmPassword: "",
  setConfirmPassword: () => {},
  userName: "",
  setUserName: () => {},
  number: "",
  setNumber: () => {},
  registerHandler: () => {},
  loginHandler: () => {},
  validator: null,
});
