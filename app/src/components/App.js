import React from "react";
import {
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Login from './Login';

const App = () => {
  return ( 
  <HashRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  </HashRouter>

  );
}

export default App;
