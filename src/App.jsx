import React from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      {/* <Loader /> */}
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default App;
