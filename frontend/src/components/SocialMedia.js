import React from "react";
import { BsTwitter, BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/kayange"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill />
        </a>
      </div>
      <div>
        <a
          href={"https://twitter.com/kayange_ayoub"}
          rel="noreferrer"
          target="_blank"
        >
          <BsTwitter href="twitter.com" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/kayange"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
      <div>
        <a
          href="https://instagram.com/ayubukayange_"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Kayange123"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
