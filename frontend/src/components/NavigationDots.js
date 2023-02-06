/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
const navList = [
  "Home",
  "About",
  "Work",
  "Skills",
  "Testimonial",
  "Contact",
  "Footer",
];
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navList.map((item, index) => (
        <a
          href={`#${item}`}
          key={index + item}
          style={active === item ? { background: "#313BAC" } : {}}
          className="app__navigation-dot"
        />
      ))}
    </div>
  );
};

export default NavigationDots;
