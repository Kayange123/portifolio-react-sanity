import { motion } from "framer-motion";
import AppWrapp from "../../components/AppWrapper/AppWrap.js";
import image from "../../assets/index";
import React from "react";
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
const techList = [image.react, image.mu5, image.git];
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: "20px" }}>
              <p className="p-text">Hello I'm</p>
              <h1 className="head-text">Mr kayoung</h1>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Web developer</p>
              <p className="head-text">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-img"
      >
        <img src={image.profile} alt="profile_bg" />
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

export default AppWrapp(Header, "home");
