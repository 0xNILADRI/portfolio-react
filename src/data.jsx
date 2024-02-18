import designerImage from "./assets/designer.png";
import developerImage from "./assets/developer.png";
import projectOneImage from "./assets/FLDSMDFR.jpg";
import projectTwoImage from "./assets/leadosaurus.jpg";
import projectThreeImage from "./assets/django.jpg";
import projectFourImage from "./assets/demo-portfolio.jpg";
import projectFiveImage from "./assets/breast-cancer.jpg";
import projectSixImage from "./assets/human-activity.jpg";

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
  imgSource: designerImage,
  titleHead: "The designer",
  summary:
    "The person who loves to create engaging and interactive modern designs. Bring in simplicity and friendliness to complex designs.",
};

export const aboutMeDeveloper = {
  tag: "Developer",
  imgSource: developerImage,
  titleHead: "The developer",
  summary:
    "Person who takes care of the technical stuff. Create user friendly and responsive websites for maximum speed and scalability.",
};

export const projectCards = [
  {
    key: 1,
    imageSrc: projectOneImage,
    summary:
      "Quirky, custom weather tracking application serving user with an instant update.",
    projectLink: "http://weather4you.herokuapp.com/",
  },
  {
    key: 2,
    imageSrc: projectTwoImage,
    summary:
      "Flat UI with minimilistic design for fully fledged service based company.",
    projectLink: "https://leadosaurus.netlify.app/",
  },
  {
    key: 3,
    imageSrc: projectThreeImage,
    summary:
      "Dynamic portfolio, created using Django with AWS S3 Bucket as storage.",
    projectLink: "http://niladrihere.herokuapp.com/",
  },
  {
    key: 4,
    imageSrc: projectFourImage,
    summary:
      "Simple yet responsive portfolio created for beginner developers using Bootstrap.",
    projectLink: "https://niladrihere.github.io/portfolio/",
  },
  {
    key: 5,
    imageSrc: projectFiveImage,
    summary:
      "Exploratory data analysis performed on breat cancer data for hidden insights.",
    projectLink: "https://github.com/0xNILADRI/breast-cancer",
  },
  {
    key: 6,
    imageSrc: projectSixImage,
    summary:
      "Predictive analysis performed on human activity recognition using Logistic Regression.",
    projectLink: "https://github.com/0xNILADRI/Human-Activity-Recognition",
  },
];
