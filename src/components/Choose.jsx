import React from "react";
import styled from "styled-components";
import { OpenAccount } from "./Carousel";
import { Container, Typography, Grid, Paper } from "@mui/material";

function ChooseUs() {
  const images = [
    {
      src: "../../public/images/liked.svg",
      title: "Loved & Trusted by 1 Crore+ Customers",
      description:
        "And one of India’s highest rated trading apps with 4.4 average star rating",
    },
    {
      src: "../../public/images/device.svg",
      title: "Easy Accessibility",
      description:
        "Login to the Upstox Android and iOS mobile app, web platform and TradingView advanced web platform with just your biometrics and mobile number. Enjoy QR code logins on web.",
    },
    {
      src: "../../public/images/swtich.svg",
      title: "Switch Between 2 Modes",
      description:
        "Upstox For Investors for a magically simplified investing experience and Upstox Pro For Traders for advanced and powerful trading made simple",
    },
    {
      src: "../../public/images/star-badge.svg",
      title: "Best-in Class Trading & Investing Tools",
      description:
        "Effortlessly discover Stocks and Mutual Funds via smartlists. Discover Futures and Options from a one of a kind Option Chain. And enjoy the latest news, historical data, fundamental data and summarised technical analysis for informed decisions.",
    },
  ];
  return (
    <Container
      maxWidth="md"
      sx={{
        boxShadow: "6px 0px 51px -28px rgba(0,0,0,0.75)",
        borderRadius: "12px",
        margin: '4rem auto',
        padding: '0em 0em 3em 0em'
      }}
    >
      <Container
        id="chooseUs"
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          padding: "4rem 2rem",

          position: "relative",
        }}
      >
        <Benifits src="../../public/images/benifits.svg" />
        <div>
          <Typography variant="h3" fontWeight={500} maxWidth="80%">
            Why Open An Upstox Demat Account
          </Typography>
          <Typography
            variant="p"
            color={"gray"}
            fontSize={20}
          >
            You can Invest, Trade, Learn & Track Your Wealth all from one
            account.
          </Typography>
        </div>

        <div>
          <OpenAccountBtn>Start investing for FREE</OpenAccountBtn>
        </div>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {images.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Paper elevation={0} style={{ padding: "16px" }}>
                  <div>
                    <img src={item.src} alt={item.title} />
                  </div>

                  <div>
                    <Typography variant="h6" fontSize={22}>
                      {item.title}
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="p"
                      color={"gray"}
                      id="textDescription"
                      sx={{
                        textAlign: "justify",
                        wordSpacing: "3px",
                        padding: "1em 0em",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
}

export default ChooseUs;

export const OpenAccountBtn = styled(OpenAccount)`
  background-color: rgb(90 41 137);
  padding: 1.1rem 0rem;
  width: 12rem;
  z-index: 12;

  @media(max-width: 868px){
    margin: 3em 0em;
  }
`;

const Benifits = styled.img`
  position: absolute;
  top: 0;
  right: -25px;
  height: 14rem;
  width: 14rem;
  z-index: -1;
`;
