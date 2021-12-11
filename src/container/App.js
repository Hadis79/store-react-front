
import Electronics from '../components/Categories/Electronics';
import Jewelery from '../components/Categories/Jewelery';
import MenClothing from '../components/Categories/MenClothing';
import WomanClothing from '../components/Categories/WomanClothing';
import CreateAccount from '../components/createAccount';
import Login from '../components/login';
import HomePage from '../components/Home/index'
import '../style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProducts from './AllProducts';

function App() {
  return (
    <div className='app'>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/createaccount" element={<CreateAccount />} /> 

        <Route path="/men" element={<MenClothing />} />
        <Route path="/woman" element={<WomanClothing />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} /> 
        
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
