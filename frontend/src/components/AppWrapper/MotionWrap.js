import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, className) =>
  function hoc() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 2.5 }}
        className={`${className} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
