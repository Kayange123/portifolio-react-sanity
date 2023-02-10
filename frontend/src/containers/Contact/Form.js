import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = ({ notify }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const clear = () => {
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        notify("Email sent successfully");
        clear();
      },
      () => {
        notify("Something went wrong");
      }
    );
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            FullName
          </label>
          <input
            className="form-control"
            type="text"
            name="user_name"
            id="username"
            onChange={(e) =>
              setFormData({
                ...formData,
                user_name: e.target.value,
              })
            }
            value={formData.user_name}
            placeholder="Enter your fullname"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="userEmail">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="user_email"
            id="userEmail"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                user_email: e.target.value,
              })
            }
            value={formData.user_email}
            placeholder="example@example.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            value={formData.message}
            className="form-control"
            id="message"
            required
            name="message"
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              });
            }}
          />
        </div>
        <button className="form-control mt-3 btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
