import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../components/AppWrapper/index";
import { client, urlFor } from "../../sanityClient/client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./index.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  const currentTest = testimonials[currentIndex];
  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex">
            <div className="app__testimonial-img">
              <img
                src={urlFor(currentTest.imageurl.asset._ref)}
                alt={currentTest.name}
              />
            </div>
            <div className="app__testimonial-content">
              <p className="p-text">{currentTest.feedback}</p>
              <div>
                <h4 className="bold-text">{currentTest.name}</h4>
                <h5 className="p-text"> {currentTest.company}</h5>
              </div>
              <div className="app__testimonial-btns app__flex">
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      currentIndex === 0
                        ? testimonials.length - 1
                        : currentIndex - 1
                    )
                  }
                >
                  <HiChevronLeft />
                </div>
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      currentIndex === testimonials.length - 1
                        ? 0
                        : currentIndex + 1
                    )
                  }
                >
                  <HiChevronRight />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            key={brand._id}
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 0.5, type: "tween", staggerChildren: 0.5 }}
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
