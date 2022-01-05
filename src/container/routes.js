import Electronics from "../components/Categories/Electronics";
import Jewelery from "../components/Categories/Jewelery";
import MenClothing from "../components/Categories/MenClothing";
import WomanClothing from "../components/Categories/WomanClothing";
import CreateAccount from "../components/createAccount";
import Login from "../components/login";
import AllProducts from "./AllProducts";
import CategoryProducts from "./CategoryProducts";

export const allroutes = [
  {
    pathname: "/",
    baseName: "",
    api: "",
    component: AllProducts,
  },
  {
    pathname: "/login",
    baseName: "login",
    api: "loging",
    component: Login,
  },
  {
    pathname: "/createaccount",
    baseName: "createaccount",
    api: "createaccount",
    component: CreateAccount,
  },
  {
    pathname: "/men",
    baseName: "men",
    api: "men's clothing",
    component: CategoryProducts,
  },
  {
    pathname: "/woman",
    baseName: "woman",
    api: "women's clothing",
    component: CategoryProducts,
  },
  {
    pathname: "/jewelery",
    baseName: "jewelery",
    api: "jewelery",
    component: CategoryProducts,
  },
  ,
  {
    pathname: "/electronics",
    baseName: "electronics",
    api: "electronics",
    component: CategoryProducts,
  },
];
