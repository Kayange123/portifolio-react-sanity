import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { images } from "../../constants";
import { client } from "../../sanityClient/client";
import { AppWrap } from "../../components/AppWrapper/index";
import Form from "./Form";
import "./index.scss";

const Contact = () => {
  const [isFormSent, setIsFormSent] = useState(false);
  const [contact, setContact] = useState();

  const notify = (data) => {
    toast(data);
  };
  useEffect(() => {
    const query = '*[_type == "contact"]';
    client.fetch(query).then(
      (data) => {
        setContact(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className="app__footer">
      <h2 className="head-text">
        Reach <span>Me</span> Out Now
      </h2>
      {contact?.length > 0 && (
        <div className="app__footer-cards">
          {contact[0]?.name !== "" && (
            <div className="app__footer-card ">
              <img src={images.email} alt="email" />
              <a href={`mailto:${contact[0]?.email}`} className="p-text">
                Email Me Now
              </a>
            </div>
          )}
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href={`tel:+${contact[0]?.number}`} className="p-text">
              Call Me Now
            </a>
          </div>
        </div>
      )}
      {!isFormSent ? (
        <div className="form">
          <Form notify={notify} setIsFormSent={setIsFormSent} />
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for your feedback</h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(Contact, "Contact", "app__footer app__whitebg");
