import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import {Header} from "./Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>

          <Route path='/checkout' element ={<Header />} />
          <Route path='/login' element ={<login />} />
          <Route path='/' element = {<Header />  } />
          <Route path='/' element = { <Home />} />
            
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
