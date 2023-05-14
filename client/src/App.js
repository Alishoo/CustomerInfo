import render from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Customer from "./components/Customer";
import Add from "./components/Add";
import Update from "./components/Update";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Customer/>} />
          <Route path="/add" element= {<Add/>} />
          <Route path="/update" element= {<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
