import React from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* <Loader /> */}
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
