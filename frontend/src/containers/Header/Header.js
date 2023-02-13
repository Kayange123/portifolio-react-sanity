import { motion } from "framer-motion";
import AppWrapp from "../../components/AppWrapper/AppWrap.js";
import image from "../../assets/index";
import React from "react";
import MotionWrap from "../../components/AppWrapper/MotionWrap.js";
import "./index.scss";

const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const techList = [image.react, image.redux, image.git];
const Header = ({ user }) => {
  return (
    <div id="Home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-info"
      >
        <motion.div className="app__header-badge">
          <div className="badge-cmp">
            <p>Hello, I'm</p>
            <h1>ayubu Kayange</h1>
          </div>
          <div className="tag-cmp">
            <h4 className="head-text">Software Engineer</h4>
            <h4 className="head-text">Full stack Developer</h4>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-img"
      >
        <img src={image.user} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay-circle"
          src={image.circle}
          alt="circle-svg"
        />
      </motion.div>
      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circle"
      >
        {techList.map((item, index) => (
          <div className="circle" key={item + index}>
            <img src={item} alt="circles" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapp(MotionWrap(Header, "app__header"), "Home");
