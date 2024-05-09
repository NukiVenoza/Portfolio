import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cx78aek", "template_lcnra7c", ref.current, {
        publicKey: "F9S9pwJSyZoMnftrJ",
      })
      .then(
        () => {
          setSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact"   
    >
      <motion.div className="wrapper" variants={variants} initial="initial"
      whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
          <motion.div className="titleContainer" variants={variants}>
            <h2>CONTACT</h2>
            <hr />
          </motion.div>
          <motion.h1 variants={variants}>Let's Work Together</motion.h1>
          <motion.div className="socials" variants={variants}>
            <a href="mailto:nukivenoza03@gmail.com" target="_blank">nukivenoza03@gmail.com</a>
            <a href="https://www.linkedin.com/in/nukivenoza/" target="_blank">LinkedIn</a>
            <a href="https://www.instagram.com/nuki.venoza/" target="_blank">Instagram</a>
            <a href="https://github.com/NukiVenoza" target="_blank">Github</a>
            <a href="https://drive.google.com/file/d/1gsbr8ENtZ-Ps_wUKIMCanyaH9Q7mpJYS/view?usp=sharing" target="_blank">Resume</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="formContainer"
          variants={variants}
          initial="initial"
          animate={window.innerWidth<=600 ? "animate" : ""}
          whileInView="animate"
        >
          <motion.form variants={variants} ref={ref} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>

          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
