import React from "react";
import Navbar from "./layout/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Navbar /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
