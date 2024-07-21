import styles from "./App.module.css";
import { About } from "./components/About/About";
import  Contact   from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import {Toaster} from "react-hot-toast";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <br/>
        <br/>
        <br/>
        <br/>
      <Contact />
      <Footer/>
      <Toaster/>
    </div>
  );
}


export default App;
