import React from "react";
import Typewriter from "typewriter-effect";
import AppWrapp from "../../components/AppWrapper/AppWrap.js";
import { socialMedia } from "../../constants/accountLink.js";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-container">
        <div className="intro-box">
          <h2 style={{ fontSize: "2.5rem" }} className="">
            Hello there!
          </h2>
          <div className="typed-text">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
                  .typeString("I am ")
                  .pauseFor(500)
                  .typeString("Software Developer")
                  .pauseFor(1500)
                  .deleteChars(18)
                  .typeString("Front-End Developer")
                  .pauseFor(1000)
                  .deleteChars(19)
                  .typeString("UI/UX Designer")
                  .pauseFor(1000)
                  .deleteChars(19)
                  .typeString("Data Analyst")
                  .pauseFor(1000)
                  .deleteChars(12)
                  .start();
              }}
            />
          </div>
        </div>
        <div className="summary">
          <div>
            <h3 className="summary-title">Summary</h3>
            <p className="summary-text">
              Experienced Front-End Developer with expertise in Java, Dart,
              TypeScript and JavaScript. Proefficient in creating Single Page
              Applications ( SPA ), Progressive Web Applications ( WPA ) and
              Server-Side Rendered (SSR) solutions through different frameworks
              like React, NextJs, Flutter and Handlebar's ExpressJs. Skilled in
              harnessing the power of cloud technologies including AWS, Google
              Cloud and Firebase, to build robust and scalable web and mobile
              applications that deliver exceptional user experience.
            </p>
            <div className="home-links">
              {socialMedia.map((medium, i) => (
                <div key={i}>
                  <a href={medium.url} target="_blank" rel="noreferrer">
                    {medium.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrapp(Header, "Home", "app__header");
