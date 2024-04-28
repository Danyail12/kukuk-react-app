import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

export default function StepperListing(props) {
  const { t } = useTranslation();
  
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="d-block d-lg-flex p-0">
      <div className="col-12 col-lg-6">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {props.steps?.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption" >
                        {t(translations.LASTSTEP)}
                      </Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography style={{fontFamily:'Neue Haas Grotesk Display Pro',color:'#737373',fontSize:'1.1rem',fontWeight:'300'}}>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1, backgroundColor: "#90FF79" }}
                      >
                        {index === props.steps.length - 1
                          ? t(translations.FINISH)
                          : t(translations.CONTINUE)}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1, color: "#90FF79" }}
                      >
                        {t(translations.BACK)}
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === props.steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>{t(translations.ALLSTEPSCOMPLETED)}</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                {t(translations.RESET)}
              </Button>
            </Paper>
          )}
        </Box>
      </div>
      {props.src && <div className="col-12 col-lg-6 mb-5">
        <img
          className="float-end w-100 h-auto"
          src={props.src}
          alt="ReactangleSectionImage"
        />
      </div>}
    </div>
  );
}
