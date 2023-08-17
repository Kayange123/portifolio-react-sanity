import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, className) =>
  function hoc() {
    return (
      <motion.div
        whileInView={{ y: [90, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 4.0 }}
        className={`${className} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
