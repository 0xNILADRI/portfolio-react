import React, { useEffect } from "react";

import { marqueeData } from "../data";
import aboutImage from "../assets/person.webp";
import { aboutMeDesigner } from "../data";
import { aboutMeDeveloper } from "../data";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="about-me" id="about">
      <div className="top">
        <div className="top-container flex-row-space">
          <div className="about-left-col">
            <p className="who-is uppercase">Who is</p>
            <p className="niladri-question uppercase primary-color">
              Niladri Ghosh?
            </p>
            <a href="#portfolio" className="scroll-to-know">
              Scroll down to know more.
            </a>
          </div>
          <div className="about-right-col">
            <img
              className="person-back"
              src={aboutImage}
              alt="Back side of a person"
            />
            <div>
              <marquee behavior="scroll" direction="left" scrollamount="6">
                {marqueeData}
              </marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="middle flex-row-space" id="middle">
        <div className="big-text big-text-left uppercase big-text-color">
          {aboutMeDesigner.tag}
        </div>
        <div className="text-holder middle-text-right">
          <img
            className="designer-image"
            src={aboutMeDesigner.imgSource}
            alt="Picture for designer section"
          />
          <div
            className="about-me-summary"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-duration="1000"
          >
            <div className="about-me-summary-head uppercase primary-color">
              {aboutMeDesigner.titleHead}
            </div>
            <div className="about-me-summary-body">
              {aboutMeDesigner.summary}
            </div>
          </div>
        </div>
      </div>

      <div className="bottom flex-row-space">
        <div className="text-holder bottom-text-left">
          <img
            className="developer-image"
            src={aboutMeDeveloper.imgSource}
            alt="Picture for developer section"
          />
          <div
            className="about-me-summary pos-rectifier"
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-duration="1000"
          >
            <div className="about-me-summary-head uppercase primary-color">
              {aboutMeDeveloper.titleHead}
            </div>
            <div className="about-me-summary-body">
              {aboutMeDeveloper.summary}
            </div>
          </div>
        </div>
        <div className="big-text big-text-right uppercase big-text-color">
          {aboutMeDeveloper.tag}
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
