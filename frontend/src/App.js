import { Footer, Skills, Testimonials, Works, Contact } from "./containers";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/index";
import React, { Suspense } from "react";
import "./app.scss";

const Header = React.lazy(() => import("./containers/Header/Header"));
const About = React.lazy(() => import("./containers/About/About"));
const App = () => {
  const ready = document.readyState;

  return (
    <div className="app">
      {ready ? (
        <Suspense fallback="loading...">
          <Toaster position="top-center" />
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
        "Loading..."
      )}
    </div>
  );
};

export default App;
