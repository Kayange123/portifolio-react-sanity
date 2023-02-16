import React, { useEffect, useState } from "react";
import { AppWrap } from "../../components/AppWrapper";
import { client, urlFor } from "../../sanityClient/client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import "./index.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type== "skill"]';
    const queryExp = '*[_type=="experience"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
    client.fetch(queryExp).then((data) => {
      setExperiences(data);
    });
  }, []);
  return (
    <div className="app__skills">
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>
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
            <div key={index} className="app__skills-exp-in">
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

export default AppWrap(Skills, "Skills");
