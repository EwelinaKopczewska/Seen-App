import React  from "react";
import {
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Account from "./Account";
import Countries from "./Countries";
import Info from "./Info";

const App = () => {
  
  return ( 
  
    <HashRouter>

      <Nav/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" exact element={<Login/>}></Route>
        <Route path="/login/account" element={<Account/>}></Route>
        <Route path="/login/account/countries" element={<Countries/>}></Route>
        <Route path="/login/account/countries/info" element={<Info/>}></Route>
      </Routes>
    
    </HashRouter>
  
  );
}

export default App;
