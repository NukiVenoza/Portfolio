import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Mendful.",
    img: "/mendful.png",
    desc: "Mendful - Your Daily Mindfulness Companion: Immerse yourself in a journey of self-discovery and tranquility with Mendful, the ultimate app for mindfulness.",
    skills: "-  Swift / SwiftUI  -",
    links: "https://github.com/NukiVenoza/MC1",
  },
  {
    id: 2,
    title: "Mizuee",
    img: "/mizuee.png",
    desc: "Mizuee is a beverage brand with a Japanese concept that are founded in 2023 under the auspices of PT. Bersama Ong Sejahtera. The website is created using MERN Stack.",
    skills: "-  React / NodeJS / MongoDB / ExpressJS  -",
    links: "https://mizuee.web.id/",
  },
  {
    id: 3,
    title: "MRTify",
    img: "/MRTify.png",
    desc: "MRTify: Your ultimate commute companion. Transform train travel with real-time notifications, precise alerts, and seamless location detection, ensuring an efficient journey.",
    skills: "-  Swift / SwiftUI / CoreLocation  -",
    links: "",
  },
  {
    id: 4,
    title: "Propertyopolis",
    img: "/propertyopolis.png",
    desc: "Propertyopolis is a property website that shows all the properties that are on sales. The website is a hobby project and one of my university project.",
    skills: "-  HTML / CSS / Javascript / JQuery  -",
    links: "https://github.com/NukiVenoza/Propertyopolis",
  },
  {
    id: 5,
    title: "Mission : A1",
    img: "/missionA1.png",
    desc: "Mission A1 is a game that takes you on this magical mission beyond the universe and love. It is a fun mix of thinking and storytelling for an out-of-this-world experience!",
    skills: "-  Unity / C#   -",
    links: "https://binusianorg-my.sharepoint.com/personal/glenn_stanis_binus_ac_id/_layouts/15/stream.aspx?id=%2Fpersonal%2Fglenn%5Fstanis%5Fbinus%5Fac%5Fid%2FDocuments%2FApple%20Developer%20Academy%2FMacro%20Challenge%2FMissionA1%5FPicAShoe%5FTrailer%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&ga=1",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 300]);

  return (
    <section>
      <div className="container" style={{background: item.id === 5 ? "linear-gradient(180deg, #0C0C1D 79.78%, #363683 100%)" : "#0C0C1D"}}>
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p className="projectSkills">{item.skills}</p>
            <button><a href={item.links} target="_blank">Open Project</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref} id="Projects">
      <div className="progress">
        <h1>Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
