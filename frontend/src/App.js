import {
  About,
  Header,
  Footer,
  Skills,
  Testimonials,
  Works,
} from "./containers";
import { client } from "./sanityClient/client";
import "./app.scss";
import { Navbar } from "./components/index";
import { useEffect, useState } from "react";
import Contact from "./containers/Contact/Contact";
const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const query = '*[_type== "user"]';
    if (!user) {
      client
        .fetch(query)
        .then((data) => {
          setUser(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="app">
      <Navbar user={user} />
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
