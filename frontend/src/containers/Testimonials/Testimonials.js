import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../components/AppWrapper/index";
import { client, urlFor } from "../../sanityClient/client";
import "./index.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonial"]';
    const brandsQuery = '*[_type=="brand"]';
    client
      .fetch(query)
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => console.log(err));
    client
      .fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <Carousel>
          {testimonials.map((test) => (
            <div key={test._id} className="app__testimonial-item app__flex">
              <div className="app__testimonial-img">
                <img
                  loading="lazy"
                  src={urlFor(test.imageurl.asset._ref)}
                  alt={test.name}
                />
              </div>
              <div className="app__testimonial-content">
                <div>
                  <p>{test.feedback}</p>
                </div>
                <div>
                  <h4 className="bold-text">{test.name}</h4>
                  <h5 className="p-text"> {test.company}</h5>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            key={brand._id}
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 0.5, type: "tween", staggerChildren: 1 }}
          >
            <img src={urlFor(brand.imageurl.asset._ref)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "Testimonial",
  "app__whitebg"
);
