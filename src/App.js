import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Manufec from './components/Manufec';
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route index element={<Manufec />} />
          <Route path="product" element={<Product />} />
          <Route path="addProduct"  element={<AddProduct />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
