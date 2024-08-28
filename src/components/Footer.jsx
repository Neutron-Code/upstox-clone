import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(90 41 137)",
        padding: "2rem 1rem",
        marginTop: "auto",
        color: "white",
      }}
    >
      <Container
        maxWidth="lg"
        id="footer"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Container sx={{width: '300px', margin: 0}}>
          <LogoWrapper>
            <img
              src="../../public/images/upstox-footer-logo.png"
              alt="Logo"
              style={{ width: "6rem", display: "block" }}
            />

            <Typography variant="p" fontSize={12}>
              30th Floor, Sunshine Tower, Senapati Bapat Marg, Dadar (W),
              Mumbai, Maharashtra 400013
            </Typography>

            <div className="store-wrapper">
              <img
                src="../../public/images/play-store-download.svg"
                alt=""
                width={120}
              />
              <img
                src="../../public/images/app-store-download.svg"
                alt=""
                width={120}
              />
            </div>
          </LogoWrapper>
        </Container>

        <Grid container spacing={3} justifyContent="space-between" id='products'>
          {/* Products */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom color={'wheat'} fontSize={18}>
              Products
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Pro Web
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Pro Mobile
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Mututal Funds
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              IPOs
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Futures and Options
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Stocks
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Indices
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Uplink Developer API
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Upstox x Trading View
            </Typography>
          </Grid>

          {/* Company */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom color={'wheat'} fontSize={18}>
              Company
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Market Talk
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Brokerage Charges
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Refer and Earn
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Announcemnets
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Partner with us
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Press Release
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Bug Bounty Program
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Media Kit
            </Typography>
          </Grid>

          {/* Services */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom color={'wheat'} fontSize={18}>
              Services
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Demat Account
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Open Mutual Fund Account
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Trading Account
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Commodity Trading
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Equity Trading
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Download Forums
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Glossary
            </Typography>
            <Typography variant="body2" sx={{ margin: "12px 0px" }} fontSize={12}>
              Help Center
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={6} sm={3} md={2}  >
            <Typography variant="h6" gutterBottom fontSize={18} color={'wheat'}>
              Social Media
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "12px 0px;",
              }}
            >
              <FacebookIcon /> Facebook
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "12px 0px;",
              }}
            >
              <XIcon /> Twitter
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "12px 0px;",
              }}
            >
              <TelegramIcon /> Telegram
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "12px 0px;",
              }}
            >
              <LinkedInIcon /> LinkedIn
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "12px 0px;",
              }}
            >
              <YouTubeIcon />
              Youtube
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "12px 0px;",
              }}
            >
              <InstagramIcon /> Instagram
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

const LogoWrapper = styled.div`
  .store-wrapper {
    padding: 1em 0em;
    display: flex;
    flex-direction: column;
    gapX: 4rem;
    img{
        margin: 0.5em 0em;
    }
  }
`;
