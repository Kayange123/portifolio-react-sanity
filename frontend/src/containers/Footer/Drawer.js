import React from "react";
import { motion } from "framer-motion";
import "./index.scss";

const Drawer = ({ img, setSelectedCard }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedCard(null);
    }
  };
  return (
    <motion.div className="backdrop" onClick={(e) => handleClose(e)}>
      <img src={img} alt="A drawer" loading="lazy" />
    </motion.div>
  );
};

export default Drawer;
