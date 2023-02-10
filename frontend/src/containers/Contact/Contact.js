import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient/client";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { AppWrap } from "../../components/AppWrapper";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const query = '*[_type== "contact"]';

  useEffect(() => {
    client.fetch(query).then((data) => {
      //console.log(data);
    });
  }, []);
  const notify = (response) => {
    toast(response);
  };
  return (
    <div className="app__contact">
      <div>
        <h3>Contact Me</h3>
        <p>Get a minute to say just a "Hi", I am gonna appreciate it</p>
      </div>
      <motion.div animate={{ opacity: [0, 0.5, 1], scale: [0, 1] }}>
        <div className="app__contact-container">
          <h1 className="app__contact-title"></h1>
        </div>
      </motion.div>
      <Form notify={notify} />
      <ToastContainer />
    </div>
  );
};

export default AppWrap(Contact, "Contact");
