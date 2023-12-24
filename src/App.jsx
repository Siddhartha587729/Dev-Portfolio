import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"

import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <div className="relative">
            <Hero/>
            <StarsCanvas/>
          </div>
        </div>
        <About/>
        {/* <Experience/> */}
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App


