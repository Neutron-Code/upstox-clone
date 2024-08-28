import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";

function Charges() {
  const data = [
    { amount: "0", title: "Account Opening", subtitle: "Demat + Trading" },
    { amount: "0", title: "Commission", subtitle: "Mutual Funds and IPOs" },
    {
      amount: "0",
      title: "Demat AMC",
      subtitle: "Account Maintainance Charges",
    },
    {
      amount: "20",
      title: "Brokerage",
      subtitle: "Equity, F&O, Commodity and Currency Orders",
    },
  ];
  return (
    <Wrapper>
      <Container maxWidth={'lg'}>
        <Pricing id="pricing">
          <div id="priceText" style={{maxWidth: '600px'}}>
            <Typography variant="h3" color={"white"} fontWeight={600}>
              Transparent Pricing With No Hidden Charges
            </Typography>
            <Typography color={"white"} variant="p" fontSize={20}>
              Place trades at just ₹20 per order
            </Typography>

            <ViewPricing>View Pricing</ViewPricing>
          </div>

          <div>
            <img
              src="../../public/images/pricing.webp"
              alt="pricing"
              style={{ width: "10em" }}
            />
          </div>
        </Pricing>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {data.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "rgb(41 19 84)",
                      padding: '3em 2em',
                      color: "white",
                      borderRadius: "10px",
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '200px',
                    }}
                  >
                    <div style={{display: 'flex'}}>
                      <Typography variant="sup" fontWeight={600}>₹</Typography>
                      <Typography variant="h3" fontWeight={500}>{item.amount}</Typography>
                    </div>

                    <div>
                      <Typography color={"white"} fontWeight={500} fontSize={26}>
                        {item.title}
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="p" color={"smoke"} fontSize={16}>
                        {item.subtitle}
                      </Typography>
                    </div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Typography color={'#cccc'} sx={{marginTop: '3em'}}>* Zero AMC Is Applicable For Customers Onboarded After August 2021.</Typography>
      </Container>
    </Wrapper>
  );
}

export default Charges;

const Wrapper = styled.div`
  padding: 2em;
  background-color: rgb(90 41 137);
`;

const Pricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  padding: 1em;

  #priceText {
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media(max-width: 800px){
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ViewPricing = styled.div`
  border: 0;
  border-radius: 30px;
  background-color: rgb(41 19 84);
  color: white;
  width: fit-content;
  padding: 1em 2em;
  font-weight: bold;
`;
