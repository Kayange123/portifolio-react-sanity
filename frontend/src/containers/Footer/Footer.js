import React, { useEffect, useState } from "react";
import { AppWrap, MotionWrap } from "../../components/AppWrapper";
import { client, urlFor } from "../../sanityClient/client";
import Drawer from "./Drawer";
import { motion } from "framer-motion";
import "./index.scss";

const Footer = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [certs, setCerts] = useState([]);
  const query = '*[_type == "certificate"]';

  useEffect(() => {
    client.fetch(query).then((data) => {
      setCerts(data);
    });
  }, []);
  return (
    <>
      <section className="app__footer app__flex">
        <div className="img-grid container-card">
          {certs.length > 0 &&
            certs.map((cert, index) => (
              <div
                className="img-wrap inner-div"
                key={cert + index}
                onClick={() =>
                  setSelectedCard(urlFor(cert.certImage.asset._ref))
                }
              >
                <img
                  src={urlFor(cert.certImage.asset._ref)}
                  alt={cert.course}
                  loading="lazy"
                />
              </div>
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
  "app__primarybg"
);
