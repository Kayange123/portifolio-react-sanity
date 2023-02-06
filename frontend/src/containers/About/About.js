import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../sanityClient/client";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../components/AppWrapper";
import "./index.scss";
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="about"]';
    client
      .fetch(query)
      .then((data) => {
        setAbouts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        I know that <span> Good Design</span> means<span> Good Business</span>
      </h2>
      <motion.div whileInView={{ x: [300, 0] }} className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about.imageURL.asset._ref)} alt={about.title} />
            <h3 className="bold-text">{about.title}</h3>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "About");
