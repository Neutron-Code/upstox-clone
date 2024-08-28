import React from "react";
import styled from "styled-components";
import { Card, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      text: "Day by day upstox is improving this app just mind-blowing. very smooth and very user friendly for an option trader.",
      author: "Subhankar Das",
    },
    {
      text: `The new Upstox upgrade is great. Company Financials, Charts, News are all in one place. Helped me avoid jumping across apps. Now, I'd like to keep Upstox always running without logging out!`,
      author: "Shiva Prasad",
    },
    {
      text: `In my opinion upstox is the best app I have ever used. Because its customer service is unsurpassed and provides easy interface for users . That's why anyone can run and understand this app without any problem. This app should be the first choice for beginners. And everything from investing`,
      author: "Arabinda Panda",
    },
    {
      text: `Such a brilliant and user friendly interface for investors and traders both ... Best treding experience, I just can't imagine to shift in any other brokers.`,
      author: "Debojit Raha",
    },
  ];
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="md" sx={{ marginTop: "6em", paddingTop: "3em" }}>
        <ReviewWrapper>
          <img src="../../public/images/heart.svg" alt="heart" width={50} />
          <Typography variant="h3" fontWeight={500}>
            From All Over India
          </Typography>
        </ReviewWrapper>

        <SliderWrapper id='slidewrapper'>
          <Slider {...settings}>
            {data.map((data, index) => {
              return (
                <Card key={index} sx={{ padding: "1em 10em" }}>
                  <CardText>
                    <img
                      src="../../public/images/quote.svg"
                      alt="Quotes"
                      width={30}
                      style={{
                        position: "absolute",
                        top: "70px",
                      }}
                    />
                    <p style={{ fontSize: "22px", marginTop: "2rem" }}>
                      {data.text}
                    </p>

                    <p id="author">{data.author}</p>
                  </CardText>
                </Card>
              );
            })}
          </Slider>
        </SliderWrapper>
      </Container>
    </div>
  );
}

export default Review;

const ReviewWrapper = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;
`;

const SliderWrapper = styled.div`
  border: 0;
  box-shadow: 0;
  margin: 0;

  .MuiPaper-root {
    padding: 0em 8em 2rem 3em;
    border-radius: 10px;
    box-shadow: none;
    text-align: justify;
    z-index: -1;
    margin-top: 4em;

    @media(max-width: 768px){
        padding: 12px;
    }
  }

  .slick-list {
    position: relative;
  }
  .slick-list::before,
  .slick-list::after {

    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 100;
    pointer-events: none;
    background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.5));
    border-radius: 10px;
  }

  .slick-list::before {
    left: 0;
    background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.1));
  }

  .slick-list::after {
    right: 0;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1));
  }
`;

const CardText = styled.div`
    min-height: 100%
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #author{
    margin-top: 6em;
  }
`;
