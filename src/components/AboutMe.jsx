import React, { useEffect } from "react";

import { marqueeData } from "../data";
import aboutImage from "../assets/person.jpg";
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
    <section class="about-me" id="about">
      <div class="top">
        <div class="top-container flex-row-space">
          <div class="about-left-col">
            <p class="who-is uppercase">Who is</p>
            <p class="niladri-question uppercase primary-color">
              Niladri Ghosh?
            </p>
            <p class="scroll-to-know">Scroll down to know more.</p>
          </div>
          <div class="about-right-col">
            <img
              class="person-back"
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

      <div class="middle flex-row-space" id="middle">
        <div class="big-text big-text-left uppercase big-text-color">
          {aboutMeDesigner.tag}
        </div>
        <div class="text-holder middle-text-right">
          <img
            class="designer-image"
            src={aboutMeDesigner.imgSource}
            alt="Picture for designer section"
          />
          <div
            class="about-me-summary"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-duration="1000"
          >
            <div class="about-me-summary-head uppercase primary-color">
              {aboutMeDesigner.titleHead}
            </div>
            <div class="about-me-summary-body">{aboutMeDesigner.summary}</div>
          </div>
        </div>
      </div>

      <div class="bottom flex-row-space">
        <div class="text-holder bottom-text-left">
          <img
            class="developer-image"
            src={aboutMeDeveloper.imgSource}
            alt="Picture for developer section"
          />
          <div
            class="about-me-summary pos-rectifier"
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-duration="1000"
          >
            <div class="about-me-summary-head uppercase primary-color">
              {aboutMeDeveloper.titleHead}
            </div>
            <div class="about-me-summary-body">{aboutMeDeveloper.summary}</div>
          </div>
        </div>
        <div class="big-text big-text-right uppercase big-text-color">
          {aboutMeDeveloper.tag}
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
