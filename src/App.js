import React from "react";
import NavBar from "./Components/Navbar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Women from "./Components/pages/Women";
import Kids from "./Components/pages/Kids";
import Home from "./Components/pages/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login"
import MenSection from "./Components/pages/MenSection";
import AboutusPage from "./Components/pages/AboutusPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mensection" element={<MenSection/>} />
          <Route path="/women" element={<Women/>} />
          <Route path="/kids" element={<Kids/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/aboutus" element={<AboutusPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
  );
};

export default App;

