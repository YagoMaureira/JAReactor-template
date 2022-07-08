import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MainPage } from "./components/HomePage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar/>
      
      <Routes>
        <Route exact path="/" element={<MainPage/>}/> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
