import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import image from "../../assets/index";

const listWorks = ["UI/UX", "Web App", "Mobile App", "React Js", "All"];
const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const handleWorkFilter = () => {};
  return (
    <>
      <h2 className="head-text">
        My ideal <span> portfolio</span>
      </h2>
      <div className="app__work-filter">
        {listWorks.map((work, index) => (
          <div
            key={work + index}
            onClick={() => handleWorkFilter(work)}
            className={`app__work-filter-item ${
              activeFilter === work ? "item-acive" : ""
            }`}
          >
            {work}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        
      </motion.div>
    </>
  );
};

export default Works;
