import { useState } from "react";
import { navBarLinks } from "../data";
import navMenu from "../assets/menu.svg";
import navCloseMenu from "../assets/menu-close.svg";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="navbar">
      <div className="container">
        <a className="logo primary-color" href="#">
          Niladri<span className="ghosh secondary-color">Ghosh</span>
        </a>

        <img
          id="mobile-open"
          className="mobile-menu"
          src={navMenu}
          alt="Open Navigation Menu"
          onClick={handleClick}
          style={{ display: isActive ? "none" : "block" }}
        />

        <nav className={isActive ? "mobile-btn" : ""}>
          <img
            id="mobile-exit"
            className="mobile-menu-exit"
            src={navCloseMenu}
            alt="Close Navigation Menu"
            onClick={handleClick}
          />
          <ul className="main-nav">
            {navBarLinks.map(({ key, href, className, text }) => {
              return (
                <li key={key}>
                  <a href={href} className={className}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
