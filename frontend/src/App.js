import {
  About,
  Header,
  Footer,
  Skills,
  Testimonials,
  Works,
} from "./containers";
import "./app.scss";
import { Navbar } from "./components/index";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
