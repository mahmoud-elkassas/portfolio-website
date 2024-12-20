"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transitionSettings = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { ease: "easeInOut", duration: 0.75 },
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  if (!children) return null;

  return (
    <div key={pathname}>
      <motion.div style={{ willChange: "transform, opacity" }} {...transitionSettings}>
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
