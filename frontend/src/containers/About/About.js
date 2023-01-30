import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../sanityClient/client";
import { motion } from "framer-motion";
import image from "../../assets/index";
import "./index.scss";
const array = [
  {
    title: "Web developer",
    description: "Good at developing",
    imageUrl: image.flutter,
  },
  { title: "Frontend ", description: "Good at devs", imageUrl: image.about01 },
  {
    title: "Web Designer",
    description: "Good at designing",
    imageUrl: image.about02,
  },
  {
    title: "UI/UX designer",
    description: "Good at designing",
    imageUrl: image.about03,
  },
];
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div id="About">
      <h2 className="head-text">
        I know that <span> Good Design</span> means<span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imageUrl} alt={about.title} />
            <h3 className="bold-text">{about.title}</h3>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
