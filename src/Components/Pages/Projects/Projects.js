import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Menu from "../../Shared/Menu/Menu";
import Banner from "../Home/Banner/Banner";
// import p1 from "../../../media/projects/p1.png";
// import p2 from "../../../media/projects/p2.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <Menu />
      <Banner />
      <div classNameName="container">
        <h1
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "lobster",
            fontSize: "50px",
          }}
        >
          My Projects
        </h1>

        <div className="row g-4 mt-5">
          {/* Project 1  */}

          {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card bg-dark shadow">
              <img className="card-img-top" src={p1} alt="project1" />
              <div className="card-body">
                <h5 className="card-title text-info">Portfolio website</h5>
                <p className="card-text">
                  React | Bootstrap | Material UI | Mobile responsive | Email JS
                  | React router{" "}
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="/https://Masumbillaahuzzaman-portfolio.netlify.app/"
                  target="_blank"
                  className="btn btn-danger btn-sm d-block w-100 "
                >
                  View Project
                </a>
              </div>
            </div>
          </div> */}

          {/* Project 2  */}

          {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card bg-dark shadow">
              <img className="card-img-top" src={p2} alt="project1" />
              <div className="card-body">
                <h5 className="card-title text-info">Aqua</h5>
                <p className="card-text">
                  React | Express | MongoDB | Material UI | Firebase |
                  Javascript | NodeJS{" "}
                </p>
              </div>
              <div className="card-footer">
                <Link
                  to="https://aqua-react-firebase-mongodb.netlify.app"
                  className="btn btn-danger btn-sm d-block w-100 "
                >
                  View Project
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
