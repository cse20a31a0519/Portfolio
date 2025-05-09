import React from "react"
import Navbar1 from "./components/Navbar1"
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
function App() {

  return (
   <>
    <Navbar1 />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>

    </Routes>
   
   </>
  )
}

export default App
