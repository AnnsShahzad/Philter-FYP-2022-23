import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Manufec from './components/Manufec';
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Manufec /> */}
      <Product />
    </div>
  );
}

export default App;
