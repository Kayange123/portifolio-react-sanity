import React from "react";
import { AppWrap, MotionWrap } from "../../components/AppWrapper";
const Footer = () => {
  return <div>Footer</div>;
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "Footer");
