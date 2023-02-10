import React, { useEffect, useState } from "react";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../components/AppWrapper";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const notify = (response) => {
    toast(response);
  };
  return (
    <div className="app__contact app__flex">
      <motion.div
        animate={{ opacity: [0, 0.5, 1], scale: [0, 1] }}
      ></motion.div>
      <Form notify={notify} />
      <ToastContainer />
    </div>
  );
};

export default AppWrap(Contact, "Contact");
