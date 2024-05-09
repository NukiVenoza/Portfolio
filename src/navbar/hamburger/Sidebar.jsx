import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import "./sidebar.scss";
import Hamburger from "./Hamburger";

const Sidebar = () => {
  const variants = {
    open: {
      clipPath: "circle(2200px at 100% 0)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(0px at 100% 0)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [open, setOpen] = useState(false);

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links closeSidebar={closeSidebar}/>
      </motion.div>
      <Hamburger setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
