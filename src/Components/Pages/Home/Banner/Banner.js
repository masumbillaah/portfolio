import { Button, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import TypewriterComponent from "typewriter-effect";
import "./Banner.css";
// import video from "../../../../media/video/portfolio.mp4";

export default function Banner() {
  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "50px" }}
        sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            style={{
              fontWeight: "600",
              fontSize: "20px",
              fontFamily: "cursive",
              color: "#12d6dd",
            }}
            variant="h3"
          >
            Welcome, I am
          </Typography>
          <Typography
            style={{ fontWeight: "550", marginTop: "15px", fontSize: "60px" }}
            variant="h2"
          >
            Masum Billah
          </Typography>

          <TypewriterComponent
            classNameName="typing"
            onInit={typewriter =>
              typewriter
                .typeString(`I am Expert in <span>React</span>`)
                .pauseFor(1000)
                .deleteChars(5)
                .typeString(`<span>Node js</span>`)
                .pauseFor(1000)
                .deleteChars(7)
                .typeString(`<span>Express js</span>`)
                .pauseFor(1000)
                .deleteChars(10)
                .typeString(`<span>MongoDB</span>`)
                .pauseFor(1000)
                .deleteChars(7)
                .typeString(`<span>Material UI</span>`)
                .pauseFor(1000)
                .deleteChars(11)
                .typeString(`<span>React Bootstrap</span>`)
                .pauseFor(1000)
                .deleteChars(15)
                .typeString(`<span>Tailwind</span>`)
                .pauseFor(1000)
                .deleteChars(8)
                .typeString(`<span>Wordpress</span>`)
                .pauseFor(1000)
                .deleteChars(9)
                .typeString(`<span>Firebase</span>`)
                .pauseFor(1000)
                .deleteChars(8)
                .typeString(`<span>Full stack web development </span>`)
                .start()
            }
          />
          <div className="social" style={{ marginTop: "15px" }}>
            <a target="_black" href="https://www.facebook.com/masumbillaah1">
              <i className="fab fa-facebook-square "></i>
            </a>
            <a
              target="_black"
              href="https://www.linkedin.com/in/masumbillaah/"
            >
              <i className="fab fa-linkedin "></i>
            </a>
            <a target="_black" href="https://twitter.com/masumbillaah">
              <i className="fab fa-twitter-square "></i>
            </a>
            <a target="_black" href="https://app.netlify.com/">
              <i className="fab fa-connectdevelop "></i>
            </a>
            <a target="_black" href="https://www.behance.net/masumbillaah">
              <i className="fab fa-behance-square "></i>
            </a>
            <a target="_black" href="https://github.com/masumbillaah">
              <i className="fab fa-github-square "></i>
            </a>
          </div>
          <Button
            style={{ fontFamily: "poppins", marginTop: "60px" }}
            variant="contained"
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              target="_black" href="https://drive.google.com/file/d/1PwIrXBeFX46AaGrvlmLTnJnJDNjHwWI_/view?usp=sharing"
              download
            >
              {" "}
              Download Resume
            </a>
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <video
            id="vid"
            style={{ width: "100%" }}
            loop="true"
            autoplay="autoplay"
            muted
          >
            <source src={video} type="video/mp4" />
          </video> */}
        </Grid>
      </Grid>
    </Fragment>
  );
}
