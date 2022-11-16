import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Manufec from './components/Manufec';

function App() {
  return (
    <div className="App">
      <Header />
      <Manufec />
    </div>
  );
}

export default App;
