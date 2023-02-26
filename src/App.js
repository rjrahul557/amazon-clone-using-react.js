import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import {Header} from "./Header";
import Front from "./Front";
import Check from "./Check";
import Login from "./Login";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element = {<Login />  } />
          <Route path='/checkout' element = {<Check />  } />
          <Route path='/' element = {<Front />  } />
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
