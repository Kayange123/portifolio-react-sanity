import {
  About,
  Header,
  Footer,
  Skills,
  Testimonials,
  Works,
  Contact,
} from "./containers";
import { Navbar } from "./components/index";
import React from "react";
import "./app.scss";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
