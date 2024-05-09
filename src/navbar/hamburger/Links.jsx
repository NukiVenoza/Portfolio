import { motion } from "framer-motion";

const Links = ({ closeSidebar }) => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {menuItems.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeSidebar}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
