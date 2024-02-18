import { footerIconLinks } from "../data";
import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    <footer class="footer-color" id="contact">
      <div class="footer-container">
        <h2 class="footer-name uppercase">Niladri Ghosh</h2>
        <a href="mailto:0xniladri@gmail.com" class="footer-email">
          0xNILADRI@gmail.com
        </a>
        <div class="footer-icons">
          {footerIconLinks.map(
            ({ key, href, classname, sourceImage, altText }) => {
              return (
                <FooterIcons
                  key={key}
                  href={href}
                  classname={classname}
                  sourceImage={sourceImage}
                  altText={altText}
                />
              );
            }
          )}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
