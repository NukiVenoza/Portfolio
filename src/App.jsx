import About from "./about me/About";
import Projects from "./projects/Projects";
import "./app.scss";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Contact from "./contact/Contact";
import Cursor from "./cursor/Cursor";
import Sidebar from "./navbar/hamburger/Sidebar";

const App = () => {
  return (
    <div>
      <Cursor />
      <Sidebar />
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
