import React, { useEffect, useState } from "react";
import { AppWrap } from "../../components/AppWrapper";
import image from "../../assets/index";
import { client, urlFor } from "../../sanityClient/client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "framer-motion";
import "./index.scss";
import "react-tooltip/dist/react-tooltip.css";

// const exps = [
//   {
//     year: "2020",
//     works: [
//       { name: "Engineer", company: "Airtel" },
//       { name: "Developer", company: "TiGo" },
//     ],
//   },
//   {
//     year: "2022",
//     works: [
//       { name: "Front end", company: "Alumnium" },
//       { name: "Software Engineer", company: "Meta" },
//     ],
//   },
// ];

// const array = [
//   { name: "Git", icon: image.git, bgColor: "" },
//   { name: "Node Js", icon: image.node, bgColor: "" },
//   { name: "Material UI", icon: image.mu5, bgColor: "" },
//   { name: "Git", icon: image.flutter, bgColor: "" },
//   { name: "Node Js", icon: image.css, bgColor: "" },
//   { name: "Material UI", icon: image.html, bgColor: "" },
//   { name: "Material UI", icon: image.python, bgColor: "" },
//   { name: "Material UI", icon: image.profile, bgColor: "" },
// ];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type== "skill"]';
    const queryExp = '*[_type=="experience"]';

    client
      .fetch(query)
      .then((data) => {
        setSkills(data);
      })
      .catch((err) => console.log(err));
    client
      .fetch(queryExp)
      .then((data) => {
        setExperiences(data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="app__skills">
      <h2 className="head-text"> Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              key={index}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon.asset._ref)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <div key={index}>
              <motion.div className="app__skills-exp-item" key={index}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
              </motion.div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work, index) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    key={index}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work app__flex"
                    data-tip
                    data-for={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                    <ReactTooltip
                      id={work.name}
                      data-Tooltip-content={work.description}
                      effect="solid"
                      className="skills-tooltip"
                    >
                      {work.description}
                    </ReactTooltip>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Skills, "skills");
