import React from "react";
import styled from "styled-components";
import {
  Typography,
  Stepper,
  Container,
  Step,
  StepLabel,
  Grid,
  CardMedia,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import LockOpenIcon from "@mui/icons-material/LockOpen";
 
function StepsStepper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const steps = [
    {
      alt: "Step 1 Image",
      src: "../../public/images/kyc-step.webp",
      text: "Verify KYC and bank details",
    },

    {
      alt: "Step 2 Image",
      src: "../../public/images/e-sign.webp",
      text: "eSign your form and documents",
    },

    {
      alt: "Step 3 Image",
      src: "../../public/images/mobile-phone.svg",
      text: "Download the app & start trading",
    },

    {
      alt: "Step 4 Image",
      src: "../../public/images/success-coin.webp",
      text: "",
    },
  ];
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StepperAccount id="stepperAcc">
          <Typography variant="h4" fontWeight={500}>
            Open a Free Demat Account in 2 mins
          </Typography>
          <Typography variant="p" fontSize={12} color={"gray"}>
            Quick & Secure Onboarding
          </Typography>
        </StepperAccount>
      </Container>

      <Container maxWidth="md">
        <Grid container justifyContent={"center"}>
          <Stepper
            orientation={isMobile ? "vertical" : "horizontal"}
            sx={{ gap: 2 }}
          >
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel>
                    <CardMedia
                      component="img"
                      alt={step.alt}
                      src={step.src}
                      style={{ width: 65 }}
                    />
                    <Typography
                      variant="p"
                      fontSize={18}
                      color={"black"}
                      fontWeight={600}
                    >
                      {step.text}
                    </Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Grid>

        <RegulatorySpan>
          <LockOpenIcon />
          <Typography color={"gray"}>
            All data is stored safely with encryption as per regulatory
            guidelines.
          </Typography>
        </RegulatorySpan>
      </Container>
    </>
  );
}

export default StepsStepper;

const StepperAccount = styled.div`
  max-width: 300px;
`;

const RegulatorySpan = styled.div`
  margin-top: 3rem;
  padding: 3rem 0rem;
  display: flex;
  gap: 18px;
`;
