import React, { Fragment } from "react";
import "./Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import img5 from "../../../../media/23.jpg";
import img6 from "../../../../media/122.jpg";
import img7 from "../../../../media/5.jpg";

export default function Projects() {
  return (
    <Fragment>
      <section className="recent-work mt-100">
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
              fontFamily: "lobster",
              fontSize: "50px",
            }}
          >
            Recent Projects
          </h1>

          {/* Project 1  */}
          <div className="row mt-4 align-items-center justify-content-between gy-5">
            <div className="col-md-6 col-sm-12">
              <div className="image">
                <a target="_black" href="https://github.com/masumbillaah/heath-care.git">
                  <img className="w-100" src={img5} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <h2>About this project</h2>
              <p className="text-light mt-4">
              MediNovaCenter  full-service diagnostic center and medical care clinic
 website by <span>React</span> I have
                used<span>Firebase</span>{" "}
                for authentication. This website is 100%{" "}
                <span>Mobile responsive</span> and cross browser supported.
                React bootstrap and materialUI used for make this website mobile
                responsive and beautiful outlook. <br />
                <br />
                A normal user only register and login appoint a doctor.

                <br />
                <br />
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  href="https://medical-project-faa8f.web.app/"
                >
                  Full view <i className="fas fa-angle-double-right ms-2"></i>
                </a>
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginLeft: "15px" }}
                  href="https://github.com/masumbillaah/heath-care.git"
                >
                  Github{" "}
                  <GitHubIcon
                    style={{
                      color: "white",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </p>
            </div>
          </div>

          
           <div className="row mt-4 align-items-center justify-content-between gy-5">
            <div className="col-md-5 col-sm-12">
              <h2>About this project</h2>
              <p className="text-light mt-4">
              Red Arrow Aircraft <span>React</span>. It is
                very clean design. I have followed 2021 trending design concept
                to make this Aircraft website clean. I have used{" "}
                <span> Html </span> <span> Bootstrap </span> <span> Javascript </span> for this design.
                <br />
                <br />
                
            
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  href="https://red-aircraft.netlify.app/"
                >
                  Full view <i className="fas fa-angle-double-right ms-2"></i>
                </a>
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginLeft: "15px" }}
                  href="https://github.com/masumbillaah/Red-Aircraft.git"
                >
                  Github{" "}
                  <GitHubIcon
                    style={{
                      color: "white",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="image">
                <a target="_black" href="https://masumbillaah.github.io/food-feed/">
                  <img className="w-100" src={img6} alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 3      */}
          {/* <div className="row mt-4 align-items-center justify-content-between gy-5">
            <div className="col-md-6 col-sm-12">
              <div className="image">
                <a target="_black" href="https://Masumbillaah870.github.io/food-feed/">
                  <img className="w-100" src={img1} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <h2>About this project</h2>
              <p className="text-light mt-4">
                This is very clean and modern layout food website design. I have
                used only <span>HTML</span> and <span>CSS3</span> to complete
                this landing page website design. Some illustration and design
                is made by me. <br />
                <br />
                I have used modern color concept in every section. CSS flex used
                to better alignment. This landing page design is only for
                desktop version. <br />
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  href="https://Masumbillaah870.github.io/food-feed/"
                >
                  Full view <i className="fas fa-angle-double-right ms-2"></i>
                </a>
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginLeft: "15px" }}
                  href="https://github.com/Masumbillaah870/food-feed"
                >
                  Github{" "}
                  <GitHubIcon
                    style={{
                      color: "white",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </p>
            </div>
          </div> */}
          <div className="row mt-4 align-items-center justify-content-between gy-5">
            <div className="col-md-6 col-sm-12">
              <div className="image">
                <a target="_black" href="https://github.com/masumbillaah/heath-care.git">
                  <img className="w-100" src={img7} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <h2>About this project</h2>
              <p className="text-light mt-4">
              HONDA CBR website. It is
                very clean design. I have followed 2021 trending design concept
                to make this Aircraft website clean. I have used{" "}
                <span> Html </span> <span> CSS </span> <span> BOOTSTRAP </span> for this design.

                <br />
                <br />
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  href="https://masumbillaah.github.io/honda-cbr/"
                >
                  Full view <i className="fas fa-angle-double-right ms-2"></i>
                </a>
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginLeft: "15px" }}
                  href="https://github.com/masumbillaah/honda-cbr.git"
                >
                  Github{" "}
                  <GitHubIcon
                    style={{
                      color: "white",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
