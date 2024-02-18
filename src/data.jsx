import designerImage from "./assets/designer.png";
import developerImage from "./assets/developer.png";

export const navBarLinks = [
  { key: 1, href: "#about", className: "scroll-about", text: "About Me" },
  {
    key: 2,
    href: "#portfolio",
    className: "scroll-portfolio",
    text: "Portfolio",
  },
  { key: 3, href: "#contact", className: "scroll-contact", text: "Contact" },
];

export const marqueeData = `AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞ AWESOME DESIGNER +
                ASTONISHING DEVELOPER ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER
                ➞ AWESOME DESIGNER + ASTONISHING DEVELOPER ➞`;

export const aboutMeDesigner = {
  tag: "Designer",
  imgSource: { designerImage },
  titleHead: "The designer",
  summary:
    "The person who loves to create engaging and interactive modern designs. Bring in simplicity and friendliness to complex designs.",
};

export const aboutMeDeveloper = {
  tag: "Developer",
  imgSource: { developerImage },
  titleHead: "The developer",
  summary:
    "Person who takes care of the technical stuff. Create user friendly and responsive websites for maximum speed and scalability.",
};
