import { Route, Routes } from "react-router";
import HomePage from "../components/Home";

import Electronics from "../components/Categories/Electronics";
import Jewelery from "../components/Categories/Jewelery";
import MenClothing from "../components/Categories/MenClothing";
import WomanClothing from "../components/Categories/WomanClothing";
import { BrowserRouter } from "react-router-dom";
import { route } from "./route";

const Index = () => {
    console.log('/path');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/men" element={<MenClothing />} />
        <Route path="/woman" element={<WomanClothing />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} /> 
        
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
