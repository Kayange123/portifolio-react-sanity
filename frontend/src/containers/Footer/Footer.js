import React, { useState } from "react";
import Drawer from "./Drawer";
import image from "../../assets/index";
import { motion } from "framer-motion";
import "./index.scss";
import { AppWrap, MotionWrap } from "../../components/AppWrapper";

const Footer = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      <section className="app__footer app__flex">
        <div className="img-grid">
          {certs.length > 0 &&
            certs.map((cert, index) => (
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                  staggerChildren: 1,
                }}
                className="img-wrap"
                key={cert + index}
                onClick={() => setSelectedCard(image.jsCertificate01)}
              >
                <img src={image.jsCertificate01} alt="certificate" />
              </motion.div>
            ))}
        </div>
      </section>
      {selectedCard && (
        <Drawer img={selectedCard} setSelectedCard={setSelectedCard} />
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Footer",
  "app__darkbg"
);

const certs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
