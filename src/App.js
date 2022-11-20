import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Manufec from './components/Manufec';
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";
import Dist from "./components/Dist";
import AddDist from "./components/AddDist";
import TrackProduct from "./components/TrackProduct";
import TrackDist from "./components/TrackDist";
import Analytics from "./components/Analytics";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route index element={<Manufec />} />
          <Route path="product" element={<Product />} />
          <Route path="addProduct"  element={<AddProduct />} />
          <Route path="distributor" element={<Dist />} />
          <Route path="addDistributor" element={<AddDist />} />
          <Route path="trackProduct" element={<TrackProduct />} />
          <Route path="trackDistributor" element={<TrackDist />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
