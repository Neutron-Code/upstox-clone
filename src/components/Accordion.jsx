import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";
import accordion_data from "../data";

const embedYoutube = () => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        background: "#000",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src="https://www.youtube.com/embed/your-video-id"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      />
    </div>
  );
};

const embedList = (listItems) => {
  return (
    <ul>
      {listItems.map((value, index) => {
        return (
          <li key={index} style={{ margin: "0.5em 0em", padding: "0.5em 0em", color: '#494a4a'}}>
            {value}
          </li>
        );
      })}
    </ul>
  );
};

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "3rem" }}>
      <Typography fontWeight={600} fontSize={38}>
        Know more about Demat Account
      </Typography>
      <Typography marginTop={"0.5rem"} fontSize={18} letterSpacing={1}>
        Everything you need to know about opening a Demat Account
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

              <AccordionDetails>
                {item.text ? <Typography>{item.text}</Typography> : ""}

                {item.what === "youtube"
                  ? embedYoutube()
                  : item.what === "list"
                  ? embedList(item.list)
                  : ""}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
};

export default AccordionComponent;
