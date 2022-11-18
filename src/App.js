import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Manufec from './components/Manufec';
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";

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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
