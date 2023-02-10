import { motion } from "framer-motion";
import AppWrapp from "../../components/AppWrapper/AppWrap.js";
import image from "../../assets/index";
import React from "react";
import "./index.scss";
import MotionWrap from "../../components/AppWrapper/MotionWrap.js";

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
  console.log(user);
  return (
    <div id="Home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <p className="head-text">Hello, I'm</p>
            <h1 className="head-text">Kayange</h1>
          </div>
          <div className="tag-cmp app__flex">
            <h4 className="head-text">Web developer</h4>
            <h4 className="head-text">UI/UX Designer</h4>
          </div>
        </div>
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
