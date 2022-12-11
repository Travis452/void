import React from "react"
import Navbar from "./Navbar";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import About from "./pages/About";
import {Route, Routes} from "react-router-dom"

import "./styles.css"

function App() {

  return (
    <>
  <Navbar />
  <div className = "container"> 
 <Routes>
  <Route path ="/Home" element = {<Home />} />
  <Route path ="/Upload" element = {<Upload />} />
  <Route path ="/About" element = {<About />} />
 </Routes>
  </div>
 
 </> 
  )
  }
export default App;
