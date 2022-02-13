
import "../style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../context/userContext";
import { ToastContainer } from "react-toastify";
import { allroutes } from "./routes";
import { useState } from "react";
import { Modal } from "../utils/modal";

function App() {

  const [showModal, setShowModal] = useState(false);
const [cart,setCart]=useState([])
  
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
                    <route.component cart={cart} setCart={setCart} setShowModal={setShowModal} showModal={showModal} pathname={route.pathname} api={route.api} baseName={route.baseName}/>
                  </UserContext>
                ) : (
                  <route.component cart={cart} setCart={setCart} setShowModal={setShowModal} showModal={showModal} api={route.api} baseName={route.baseName}/>
                )
              }
            />;
          })}
        </Routes>
        {showModal&& <Modal cart={cart} setCart={setCart} setShowModal={setShowModal} showModal={showModal}/>}

        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
