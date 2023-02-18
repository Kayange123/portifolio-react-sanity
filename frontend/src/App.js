import React, { Suspense } from "react";
import { Header } from "./containers";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/index";
import {
  About,
  Skills,
  Testimonials,
  Works,
  Contact,
  Footer,
} from "./components/LazyLoaded/LazyLoaded";
import Spinner from "./components/Spinner";
import "./app.scss";
export const preload = document.getElementById("preloader");
const App = () => {
  const ready = document.readyState;
  document.title = "Ayubu Kayange";
  return (
    <div className="app">
      <Toaster position="top-left" />
      {ready ? (
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <Header />
          <About />
          <Works />
          <Skills />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
