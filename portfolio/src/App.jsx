// import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App()
{
    return (
        <>
            <Navbar/>
            <HeroBanner/>
            <Skills></Skills>
            <Projects/>
            <Footer/>
        </>
    )

}

export default App