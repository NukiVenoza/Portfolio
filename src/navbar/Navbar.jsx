import { useState } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const variants = {
    initial: {
      opacity: 0.5,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuItems = ["Home", "About", "Projects", "Contact"];
  
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span variants={variants} initial="initial" animate="animate">
          <a href="#Home">Nuki Venoza</a>
        </motion.span>

        <div className="menus">
          {menuItems.map((item) => (
            <motion.a
              href={`#${item}`}
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
