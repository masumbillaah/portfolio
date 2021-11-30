import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./Labtabs.css";

const steps = [
  {
    label: "Educational life",
    description: `I am from Comilla. I have completed my School level from Adda umedia high school. I gave SSC from this school. I Successfully Passed Secondary school certificate with result 4.88 out of 5.00 in the year 2012. Then I took admission in Milestone college for Higher secondary school certificate. in the year 2014 I completed my H.S.C with reesult 5.00 out of 5.00. After i have started my Bsc in Computer science and engineering at Daffodil international university. I have completed my graduation with CGPA 3.73 out of 4.00 in the year 2020. I wish to take Phd from Japan.`,
  },
  {
    label: "Professional life",
    description:
      "At the time of graduation, I have started learning Programming. My first language was PHP. I have completed a Course related to WordPress in SoftTech It and then I started freelancing. Then I completed a Graphic and UI design course from  Shikhbsobai. After completing this course I got an opportunity to join  Shikhbesobai as a UI design support mentor. I was there for 4/5 months. Due to corona, I left this job. After 2/3 months I got a job in instructory. I launched 2 courses on instructory platform. I have more than 400+ students in 2 courses. One is front-end web development and another is WordPress theme development. I am now an online instructor and in the meantime, I have completed an international MERN stack web development course with a 98%+ positive rating.",
  },
  {
    label: "My hobbies",
    description: `I love programming. I spent more then 12 hours daily for learnig and practicing. I love to learn new technology. Besides this i love to play cricket and fishing. `,
  },
];

export default function LabTabs() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontFamily: "lobster",
          fontSize: "50px",
        }}
      >
        Life Style
      </h1>
      <Box sx={{ maxWidth: 800 }} style={{ margin: " 30px auto 50px" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      style={{ fontFamily: "poppins" }}
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}
