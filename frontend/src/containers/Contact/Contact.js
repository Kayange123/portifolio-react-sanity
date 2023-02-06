import React from "react";
import { AppWrap, MotionWrap } from "../../components/AppWrapper";
const Contact = () => {
  return (<div className="app__contact">Contact</div>);
};

export default AppWrap(MotionWrap(Contact, "app__contact"), "Contact");