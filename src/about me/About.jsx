import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      // whileInView={"animate"}
      ref={ref}
      animate= {window.innerWidth<=992 ? "animate" : isInView && "animate"}
    >
      <div className="wrapper">
        <div
          className="headingContainer"
          variants={variants}
        >
          I'm an <u>Information Systems</u> graduate that likes to <u>code</u>.{" "}
        </div>

        <motion.div
          className="expertiseContainer"
          variants={variants}
        >
          <div className="box">
            <h2>iOS Development</h2>
            <p>
              1 year of experience in iOS Development. Using Swift, SwiftUI,
              UIKit, & Apple Frameworks
            </p>
          </div>

          <div className="box">
            <h2>Web Development</h2>
            <p>
              Passionate in Web Development using HTML, CSS, Javascript, React,
              NodeJS, MongoDB, MySQL, ExpressJS
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="textContainer"
        variants={variants}
      >
        <p>
          passionate
          <br />
          and highly motivated
        </p>
        <hr />
      </motion.div>
    </motion.div>
  );
};

export default About;
