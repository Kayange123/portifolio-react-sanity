import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import values from "../../constants/emailJs";
import "./index.scss";

const data = { user_name: "", user_email: "", message: "" };
const Form = ({ notify, setIsFormSent }) => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState(data);
  const { user_name, user_email, message } = formData;
  const form = useRef();
  const isInValid = formData === data;
  const clear = () => {
    setFormData(data);
    setIsFormSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(values.serviceID, values.templateID, formData, values.publicKey)
      .then(
        () => {
          clear();
          notify("Email sent successfully");
        },
        () => {
          notify("Something went wrong");
        }
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <div ref={form} className="app__footer-form app__flex">
      <div className="app__flex">
        <input
          className="p-text"
          type="text"
          placeholder="Enter Your Name"
          name="username"
          value={user_name}
          onChange={(e) =>
            setFormData({ ...formData, user_name: e.target.value })
          }
        />
      </div>
      <div className="app__flex">
        <input
          className="p-text"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={user_email}
          onChange={(e) =>
            setFormData({
              ...formData,
              user_email: e.target.value,
            })
          }
        />
      </div>
      <div>
        <textarea
          className="p-text"
          placeholder="Message here..."
          value={message}
          name="message"
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
        />
      </div>
      <button
        disabled={isSending || isInValid}
        type="button"
        className={`p-text ${isInValid ? "disable-btn" : ""} `}
        onClick={handleSubmit}
      >
        {!isSending ? "Send Message" : "Sending..."}
      </button>
    </div>
  );
};

export default Form;
