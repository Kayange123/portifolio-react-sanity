import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { AppWrap, MotionWrap } from "../../components/AppWrapper/index";
import { urlFor, client } from "../../sanityClient/client";
import "./index.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonial"]';
    const brandsQuery = '*[_type == "brand"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  const test = testimonials[currentIndex];
  return (
    <>
      {test && testimonials?.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test?.imageurl?.asset?._ref)} alt={test.name} />
            <div className="app__testimonial-content">
              <div className="feedback">
                <RiDoubleQuotesL />
                <blockquote className="p-text">{test?.feedback}</blockquote>
                <RiDoubleQuotesR />
              </div>
              <div>
                <h4 className="bold-text">{test?.name}</h4>
                <h5 className="p-text">{test?.company}</h5>
              </div>
            </div>
          </div>

          {testimonials?.length > 1 && (
            <div className="app__testimonial-btns app__flex">
              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials?.length - 1
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
                    currentIndex === testimonials?.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          )}
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands?.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand?.imageurl?.asset._ref)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "Testimonial",
  "app__primarybg"
);
