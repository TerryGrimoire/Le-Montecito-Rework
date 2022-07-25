import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carte from "./pages/Carte";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carte" element={<Carte />} />
        <Route path="/Evenements" element={<Evenements />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
