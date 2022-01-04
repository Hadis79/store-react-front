import Electronics from "../components/Categories/Electronics";
import Jewelery from "../components/Categories/Jewelery";
import MenClothing from "../components/Categories/MenClothing";
import WomanClothing from "../components/Categories/WomanClothing";
import CreateAccount from "../components/createAccount";
import Login from "../components/login";
import "../style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./AllProducts";
import UserContext from "../context/userContext";
import { ToastContainer } from "react-toastify";
import { allroutes } from "./routes";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/*" element={<AllProducts />} />
          <Route
            path="/login"
            element={
              <UserContext>
                <Login />
              </UserContext>
            }
          />
          <Route
            path="/createaccount"
            element={
              <UserContext>
                <CreateAccount />
              </UserContext>
            }
          />

          <Route path="/men" element={<MenClothing />} />
          <Route path="/woman" element={<WomanClothing />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/electronics" element={<Electronics />} /> */}
          {allroutes.map((route) => {
          return  <Route
          key={route.pathname}
              path={route.pathname}
              element={
                route.pathname === "/login" || route.pathname === "/createaccount" ? (
                  <UserContext>
                    <route.component pathname={route.pathname} api={route.api} baseName={route.baseName}/>
                  </UserContext>
                ) : (
                  <route.component api={route.api} baseName={route.baseName}/>
                )
              }
            />;
          })}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
