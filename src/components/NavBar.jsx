import React from "react";
import styled from "styled-components";
import logo from "../../public/images/mobile-text-logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { Hidden } from "@mui/material";
import { Badge } from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";

export function NavBarSmall() {
  return (
    <Hidden lgUp>
      <Container>
        <Logo src={logo} alt="Upstox" />

        <Options>
          <SearchIcon fontSize="medium" />

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "20px",
              borderColor: "rgb(90 41 137)",
              color: "rgb(90 41 137)",
              "&:hover": {
                backgroundColor: "#e7e4f5",
              },
            }}
          >
            Sign in
          </Button>

          <Menu>
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </Menu>
        </Options>
      </Container>
    </Hidden>
  );
}

export function NavBarLarge() {
  return (
    <Hidden lgDown>
      <ContainerLg>
        <First>
          <LogoLg src={logo} alt="Upstox" />

          <ul>
            <li>Invest</li>
            <li>Trade</li>
            <li>
              <span>News</span>
              <Badge
                badgeContent="New"
                sx={{
                  position: "relative",
                  padding: "0px 0px",
                  "& .MuiBadge-badge": {
                    backgroundColor: "rgb(90 41 137)",
                    color: "white",
                    border: 0,
                    position: "absolute",
                    left: "-10px",
                    padding: "1px 13px",
                    borderRadius: "4px",
                    fontSize: "8px",
                  },
                }}
              />
            </li>
            <li className="connector">Uplearn</li>
            <li>About Us</li>
            <li>Partner with us</li>
            <li>Pricing</li>
          </ul>
        </First>

        <Second>
          <TextField
            variant="outlined"
            type="search"
            placeholder="Seach any stock, Eg: (MRF)"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#ebebeb",
              border: "1px solid black",
              borderRadius: "6px",
              "& .MuiOutlinedInput-input": {
                padding: "6px",
              },
            }}
          />

          <CTABtn>Open a Demat Account</CTABtn>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "20px",
              borderColor: "rgb(90 41 137)",
              color: "rgb(90 41 137)",
              "&:hover": {
                backgroundColor: "#e7e4f5",
              },
            }}
          >
            Sign in
          </Button>
        </Second>
      </ContainerLg>
    </Hidden>
  );
}

const Container = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  background: white;
  z-index: 10;
`;

const ContainerLg = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  width: 100vw;
  position: fixed;
  z-index: 10;
  background: white;
  -webkit-box-shadow: 6px 0px 51px -28px rgba(0,0,0,0.75);

  ul {
    display: flex;
    list-style: none;
    gap: 2em;
    font-size: 14px;
    font-weight: 400;
    .connector {
      position: relative;
      left: 16px;
    }

    li {
      cursor: pointer;
    }
    li:hover {
      color: rgb(90 41 137);
    }
  }
`;

const First = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Second = styled.div`
  display: flex;
  gap: 1.2em;
`;

const CTABtn = styled.button`
  padding: 8px 16px;
  background-color: rgb(90 41 137);
  color: white;
  border: 0;
  border-radius: 20px;
  font-weight: bold;
`;

const Logo = styled.img`
  max-width: 200px;
`;

const LogoLg = styled.img`
  max-width: 100px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Menu = styled.div`
  div {
    border: 4px;
    width: 25px;
    border-color: black;
    background: black;
    padding: 1px;
    margin: 6px 0px;
  }

  div.second {
    margin: 6px 8px;
  }
`;
