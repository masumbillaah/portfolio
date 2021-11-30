import React from "react";
import Menu from "../../../Shared/Menu/Menu";
import Banner from "../Banner/Banner";
import Service from "../Services/Service";
import Skills from "../../Home/Skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../../../Shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Menu />
      <Banner />
      <Service />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
