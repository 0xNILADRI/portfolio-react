import React, { useEffect } from "react";
import Iframe from "react-iframe";
import { contactMeData } from "../data";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="contact-section">
      <div
        className="end-text-holder"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
      >
        <h2 className="end-header uppercase">{contactMeData.cliche}</h2>
        <div className="end-text">{contactMeData.contactMe}</div>
      </div>

      <div className="location">
        <Iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.72637029383!2d77.67501137459637!3d12.9580388382168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4551d0957%3A0x597894d77e1e4919!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1679100950624!5m2!1sen!2sin"
          width="600"
          height="450"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></Iframe>
      </div>
    </section>
  );
}
export default Contact;
