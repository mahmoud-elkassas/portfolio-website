"use client";

import { motion } from "framer-motion";

const TabsContentWithAnimation = ({ children, value }) => {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      style={{ width: "100%" }} // Adjust style as needed
    >
      {children}
    </motion.div>
  );
};

export default TabsContentWithAnimation;
