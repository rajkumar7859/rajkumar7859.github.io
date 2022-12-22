import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import GithubStatus from "./components/GithubStatus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
     <GithubStatus />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
