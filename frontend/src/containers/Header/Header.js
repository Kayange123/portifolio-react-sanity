import { motion } from "framer-motion";
import AppWrapp from "../../components/AppWrapper/AppWrap.js";
import image from "../../assets/index";
import React from "react";
import MotionWrap from "../../components/AppWrapper/MotionWrap.js";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const techList = [image.react, image.mu5, image.git];
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> I am</p>
              <h1 className="head-text">Ayubu Kayange</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
            <p className="p-text">Full Stack developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={image.user} alt="user-logo" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={image.programming}
          alt="profile_circle"
          className="overlay_circle"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {techList.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img loading="lazy" src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapp(MotionWrap(Header, "app__header"), "Home");
