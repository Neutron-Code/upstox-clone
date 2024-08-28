import React, { useState } from "react";
import {
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OpenAccount } from "./Carousel";
import styled from 'styled-components'

function FAQ() {
  const accordion_data = [
    {
      accordionTitle:
        "What is a Demat account? And what is the full form of Demat Account?",
      text: `A Demat account is an electronic account used to hold and manage your investments in a digital format. It's essential for buying, selling, and holding various financial securities like Stocks, Bonds, Mutual Funds, and more.

    The full form of Demat Account is ‘Dematerialized Account. It's like a digital wallet for your stocks and investments.`,
    },

    {
      accordionTitle: "Why should I have a Demat account?",
      text: `A Demat account gets rid of paper share certificates, making investing and trading easier and safer. It lets you access your investments easily, keeps better records, and allows smooth online transactions.`,
    },
    {
      accordionTitle: `Can I have two Demat accounts?
`,
      text: `No, you can't have two Demat accounts with the same broker. However, you can have multiple Demat accounts with different brokers if needed.`,
    },
    {
      accordionTitle: "Do I have to pay for using the platforms?",
      text: `You can explore Upstox without opening an account. However, an account is required for buying or selling stocks, trading in F&O, or investing in mutual funds. The process of opening an account is free, and charges only apply when you place an order.`,
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container maxWidth="md" sx={{ marginTop: "3rem", padding: '3rem 0rem'}}>
      <Typography fontWeight={600} fontSize={36} textAlign={'center'}>
        Frequently Asked Questions about Demat Account
      </Typography>

      <Box sx={{ width: "100%", marginTop: "3rem" }}>
        {accordion_data.map((item, index) => {
          return (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                borderBottom: "1px solid #e0e0e0",
                padding: "1em 0em",
                boxShadow: "none",
                borderTop: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="h5" fontWeight={500}>
                  {item.accordionTitle}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>{item.text}</AccordionDetails>
            </Accordion>
          );
        })}

        <ViewMoreFAQ>View More FAQs</ViewMoreFAQ>
      </Box>
    </Container>
  );
}

export default FAQ;

const ViewMoreFAQ = styled(OpenAccount)`
    background-color: rgb(90 37 141);
    margin-top: 1em;
    padding: 1.3em 0em;
    width: 12rem;
    border-radius: 28px;
`   