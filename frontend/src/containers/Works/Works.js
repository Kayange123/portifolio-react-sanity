import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import image from "../../assets/index";
import { client, urlFor } from "../../sanityClient/client";
import { AppWrap, MotionWrap } from "../../components/AppWrapper";
import "./index.scss";

const array = [
  {
    title: "Modern UI/UX",
    description: "Modern UI/UX portfolio",
    imageURL: image.node,
    tags: ["UI/UX"],
  },
  {
    title: "Web Design",
    description: "Modern UI/UX portfolio",
    imageURL: image.figma,
    tags: ["Web App"],
  },
  {
    title: "Mobile Design",
    description: "Modern UI/UX portfolio",
    imageURL: image.python,
    tags: ["Mobile App", "UI/UX"],
  },
];

const listWorks = ["UI/UX", "Web App", "Mobile App", "React Js", "All"];
const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState(array);
  const [filterWorks, setFilterWorks] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ opacity: 1, y: 0 });
      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.inludes(item)));
      }
    }, 500);
  };
  useEffect(() => {
    const query = '*[_type=="work"]';
    client.fetch(query).then((data) => {
      setFilterWorks(data);
      setWorks(data);
    });
  }, []);
  return (
    <div className="app__work">
      <h2 className="head-text">
        My ideal  <span>  portfolio</span>
      </h2>
      <div className="app__work-filter">
        {listWorks.map((work, index) => (
          <div
            key={work + index}
            onClick={() => handleWorkFilter(work)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === work ? "item-active" : ""
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
        {filterWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index + work}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imageURL.asset._ref)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{ duration: 0.3 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{ duration: 0.3 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="head-text">{work.title}</h4>
              <p className="p-text">{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Works, "app__work"), "Work", "app__whitebg");
