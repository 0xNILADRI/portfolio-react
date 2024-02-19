import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    if (loaderWrapper) {
      loaderWrapper.style.transition = "opacity 0.5s";
      loaderWrapper.style.opacity = "0";
      loaderWrapper.style.zIndex = "-1";
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, []);
  return (
    <div className="container-root">
      {/* loader section */}
      <div className={`loader-wrapper ${loading ? "loading" : ""}`}>
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>

      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
