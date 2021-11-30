import { Container } from "@mui/material";
import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Aboutme from "./Components/Pages/Aboutme/Aboutme/Aboutme";
import Projects from "./Components/Pages/Projects/Projects";

const useStyles = makeStyles({
  fonts: {
    fontFamily: "poppins",
    color: "white",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container>
      <BrowserRouter>
        <div className={classes.fonts}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
