import React from "react";

export const Header = React.lazy(() =>
  import("../../containers/Header/Header")
);
export const Footer = React.lazy(() =>
  import("../../containers/Footer/Footer")
);
export const About = React.lazy(() => import("../../containers/About/About"));
export const Skills = React.lazy(() =>
  import("../../containers/Skills/Skills")
);
export const Works = React.lazy(() => import("../../containers/Works/Works"));
export const Testimonials = React.lazy(() =>
  import("../../containers/Testimonials/Testimonials")
);
