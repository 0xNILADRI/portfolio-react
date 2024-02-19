import React, { useEffect, useState } from "react";

function Loader() {
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
    <div className={`loader-wrapper ${loading ? "loading" : ""}`}>
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </div>
  );
}
export default Loader;
