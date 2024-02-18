import { navBarLinks } from "../data";
import navMenu from "../assets/menu.svg";
import navCloseMenu from "../assets/menu-close.svg";

function Navbar() {
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
        />

        <nav>
          <img
            id="mobile-exit"
            className="mobile-menu-exit"
            src={navCloseMenu}
            alt="Close Navigation Menu"
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
