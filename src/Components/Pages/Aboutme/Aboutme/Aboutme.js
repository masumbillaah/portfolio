import React from "react";
import Menu from "../../../Shared/Menu/Menu";
// import aboutimg from "../../../../media/aboutme.png";
import Footer from "../../../Shared/Footer/Footer";
import LabTabs from "../LabTabs/LabTabs";

export default function Aboutme() {
  return (
    <div className="container">
      <Menu />
      {/* <img className="w-75 mx-auto d-block" src={aboutimg} alt="" /> */}
      <p className="text-center mt-4">
        <span className="text-info fw-bold fs-4">
          I am Masum Billah. Front-End web developer
        </span>{" "}
        <br />
        <br />
        <br /> I am studding  Institute of science and Technology. <br />
        Department of Electronics & Communication Engineering.
      </p>
      <LabTabs />
      <Footer />
    </div>
  );
}
