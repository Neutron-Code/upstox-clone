import React from "react";
import styled from "styled-components";
import { Container, Typography, Box, Grid } from "@mui/material";

function Awards() {
  const data = [
    { src: "../../public/images/MCX.svg", year: 2019 },
    { src: "../../public/images/CDSL.svg", year: "2019, 2020" },
    { src: "../../public/images/india-fintech.svg", year: 2020 },
    { src: "../../public/images/CDSL-2.svg", year: 2021 },
  ];
  return (
    <>
      <Container maxWidth={"md"} sx={{ marginTop: "8rem" }}>
        <Typography variant="h3" textAlign={"center"} fontWeight={500} sx={{ marginBottom: '3rem'}}>
          Awards and Accholades
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {data.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      padding: "3em 2em",
                      color: "white",
                      borderRadius: "10px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    <div>
                      <img src={item.src} alt={"Image of the Award"} />
                    </div>

                    <div>
                      <Typography
                      sx={{marginTop: '1.5rem'}}
                        fontSize={16}
                        color={'GrayText'}
                      >
                        Most promising broking house of the year
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="p" color={"GrayText"} fontSize={14} fontWeight={700}>
                        {item.year}
                      </Typography>
                    </div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Awards;
