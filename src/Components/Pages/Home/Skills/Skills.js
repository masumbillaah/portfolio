import React from "react";
import skillimg from "../../../../media/skill.png";
import "./Skill.css";

export default function Skills() {
  return (
    <div>
      <section>
        <div className="container m-100">
          <div className="skills">
            <h1
              style={{
                textAlign: "center",
                marginTop: "100px",
                fontFamily: "lobster",
                fontSize: "50px",
              }}
            >
              Top Skills
            </h1>
            <div className="row mt-5 align-items-center justify-content-between g-5">
              <div className="col-sm-12 col-md-6">
                <div className="Masumbillaah">
                  <img className="w-100" src={skillimg} alt="skill img" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="row align-items-center">
                  <div className="col-sm-2">
                    <label className="text-info">HTML5</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-success
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3 align-items-center">
                  <div className="col-sm-2">
                    <label className="text-info">CSS3</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-success
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-sm-2">
                    <label className="text-info">Bootstrap 5</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-success
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-sm-2">
                    <label className="text-info">Tailwind</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-primary
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-sm-2">
                    <label className="text-info">JavaScript</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-primary
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-sm-2">
                    <label className="text-info">React</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-primary
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-sm-2">
                    <label className="text-info">NodeJs</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-danger
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-sm-2">
                    <label className="text-info">MongoDB</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-info
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-sm-2">
                    <label className="text-info">Express</label>
                  </div>
                  <div className="col-sm-10">
                    <div className="progress">
                      <div
                        className="
                        progress-bar progress-bar-striped progress-bar-animated
                        bg-success
                      "
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
