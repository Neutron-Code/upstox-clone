import React from "react";
import styled from "styled-components";
import CR from "../../public/images/1cr.webp";
import circle from "../../public/images/trusted-circle.svg";
import mobile from "../../public/images/oda-main.webp";
import INDIA from "../../public/images/indian-flag.svg";
import {
  Hidden,
  Typography,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";

function Hero() {
  return (
    <>
      <HeroContainer id="heroContainer">
        <HeroText id="heroText">
          <div className="first" id="first">
            <p>INVEST RIGHT, INVEST NOW</p>

            <div>
              <img src={CR} alt="One Crore Users" id="cr" />
              <img src={circle} alt="Trust" id="trust" />
            </div>
          </div>

          <div className="second" id="second">
            <Typography
              variant="h2"
              fontSize={"4rem"}
              fontWeight={"500"}
              id="heroHtmlText"
            >
              Open a Free Demat Account in 2 mins
            </Typography>
          </div>

          <div className="third" id="third">
            <div className="ipo-info">
              <Typography
                variant="h3"
                sx={{ color: "rgb(90 41 137)" }}
                fontWeight={500}
              >
                ₹0
              </Typography>
              <div>
                <p>AMC & charges* on Mutual Funds and IPO</p>
              </div>
            </div>

            <div className="brokeage">
              <Typography
                variant="h3"
                sx={{ color: "rgb(90 41 137)" }}
                fontWeight={500}
              >
                ₹20
              </Typography>
              <div>
                <p>Per order on Equity, F&O, Commodity and Currency</p>
              </div>
            </div>
          </div>

          <div className="fourth" id="fourth">
            <Grid container spacing={2}>
              <Grid item lg={6} sm={12}>
                <div className="contact">
                  <TextField id="textContact"
                    placeholder="+91 Enter your Mobile Number"
                    variant="outlined"
                    type="search"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "40px",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={INDIA}
                            alt="India Flag"
                            style={{ width: "20px" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </Grid>

              <Grid item md={5} lg={6} sm={12}>
                <div className="openDemat" id="openDemat">
                  <OpenDematButton>Open Free Demat Account</OpenDematButton>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="fifth" id="fifth">
            <span>
              By submitting your contact details, you authorize Upstox to
              contact you even if you are registered on DND & conduct online KYC
              for trading & demat account opening as per KRA regulations and
              PMLA guidelines.
            </span>
          </div>
        </HeroText>

        <Hidden lgDown>
          <HeroImg>
            <img src={mobile} alt="Invest Now here" />
          </HeroImg>
        </Hidden>
      </HeroContainer>
    </>
  );
}

export default Hero;

const HeroContainer = styled.div`
  padding: 5em 0em 0em 4em;
  display: flex;
`;

const HeroText = styled.div`
  .first {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    align-items: center;
    position: relative;
    top: 35px;
    left: 15px;
    padding-left: 1em;
    max-width: 100%;
    margin-left: 3rem;

    p {
      letter-spacing: 3px;
      font-size: 1rem;
    }

    #cr {
      max-width: 130px;
      position: absolute;
    }

    #trust {
      width: 120px;
    }
  }

  div.second {
    max-width: 100%;
    padding-left: 1em;
    margin-left: 3rem;
  }

  div.third {
    display: flex;
    gap: 1rem;
    margin-left: 3rem;
    padding: 1rem;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      max-width: 60%;
    }
  }

  .fourth {
    margin-left: 3rem;
    padding: 1em;
  }

  .fifth{
    margin-left: 4rem;
    font-size: 0.62rem;
    color: #c0c4c1;
    max-width: 380px;
  }
`;

const HeroImg = styled.div`
  max-width: 45%;
  img {
    height: 600px;
  }
`;

const OpenDematButton = styled.button`
  background: rgb(90 41 137);
  color: white;
  border-radius: 30px;
  padding: 16px 32px;
  font-weight: bold;
  border: 0px;
  width: 100%;

  &:hover{
    background: rgba(90 41 137 0.8)
  }
`;
