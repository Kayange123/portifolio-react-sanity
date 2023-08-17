import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../sanityClient/client";
import { motion } from "framer-motion";
import { AppWrap } from "../../components/AppWrapper";
import "./index.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="about"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  if (!abouts) return <div>Loading...</div>;
  return (
    <div className="app__about ">
      <h3 className="head-text">
        Good Designs <span> means </span>Good Business
      </h3>
      <div className="app__profiles">
        {abouts?.map((about, index) => (
          <motion.div
            style={{ cursor: "pointer" }}
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1, opacity: 1.3 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about?.imageURL.asset._ref)} alt={about?.title} />
            <h3 className="bold-text title">{about?.title}</h3>
            <p className="p-text description">{about?.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "About", "app__about");
