/* eslint-disable react/prop-types */
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Servicesx/Services";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function App() {
  const Section = ({ children, id, animation }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.section
        ref={ref}
        id={id}
        initial={animation.initial}
        animate={isInView ? animation.animate : animation.initial}
        transition={animation.transition}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          backgroundColor: "rgb(30, 30, 30)",
        }}
      >
        {children}
      </motion.section>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Section
        id="intro"
        animation={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <Intro />
      </Section>
      <Section
        id="about "
        animation={{
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1, ease: "easeOut" },
        }}
      >
        <About />
      </Section>
      <Section
        id="services"
        animation={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <Services />
      </Section>
      <Section
        id="my-work"
        animation={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <MyWork />
      </Section>
      <Section
        id="contact"
        animation={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, ease: "easeOut" },
        }}
      >
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
