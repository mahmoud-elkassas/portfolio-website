"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const ScrollAreaWithAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      style={{ height: "400px" }} // Adjust the height as needed
    >
      <ScrollArea>
        <motion.div>{children}</motion.div>
      </ScrollArea>
    </motion.div>
  );
};

export default ScrollAreaWithAnimation;
