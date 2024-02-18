import { navBarLinks } from "../data";

function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <a class="logo primary-color" href="#">
          Niladri<span class="ghosh secondary-color">Ghosh</span>
        </a>

        <img
          id="mobile-open"
          class="mobile-menu"
          src="images/menu.svg"
          alt="Open Navigation Menu"
        />

        <nav>
          <img
            id="mobile-exit"
            class="mobile-menu-exit"
            src="images/menu-close.svg"
            alt="Close Navigation Menu"
          />
          <ul class="main-nav">
            {navBarLinks.map(({ key, href, className, text }) => {
              return (
                <li key={key}>
                  <a href={href} class={className}>
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
