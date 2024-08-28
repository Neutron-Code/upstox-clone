import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Slider from "react-slick";
import { Avatar, Container, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
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
  const images = [
    {
      text: "Start SIP Now",
      imgName: "Mutual Funds",
      src: "../../public/images/c1.webp",
      description:
        "Enjoy Top Rated Mutual Funds shortlisted based on in-depth risk and return analysis and save up to 2% commissions by investing in them",
    },

    {
      text: "Invest Now",
      imgName: "Stocks",
      src: "../../public/images/c2.webp",
      description:
        "View Most Active and Top Trending Stocks, Today’s Gainers & Losers in the market along with key company insights, fundamental data and technical analysis",
    },

    {
      text: "Start Trading",
      imgName: "Futures and Option",
      src: "../../public/images/c3.webp",
      description:
        "Analyse trends and get trading ideas from our Option Chain with Greeks, PCR, Max Pain. Also view Futures Heatmaps and enjoy a dedicated F&O Discover section",
    },

    {
      text: "Apply Now",
      imgName: "IPO",
      src: "../../public/images/c4.webp",
      description:
        "Enjoy pre-applying and applying to the latest IPOs at ₹0* commissions. Simple UPI based process from your mobile",
    },

    {
      text: "Start Trading",
      imgName: "Comodities",
      src: "../../public/images/c5.webp",
      description:
        "Identify commodity trading opportunities easily via Smartlists and advanced tools for analysis and charting. And enjoy commodity mini Futures to trade.",
    },

    {
      text: "",
      imgName: "Currencies",
      src: "../../public/images/c6.webp",
      description:
        "Enjoy real-time currency specific news, advanced charting tools and more to trade in USD-INR, EURO-INR, GBP-INR, JPY-INR F&O contracts",
    },

    {
      text: "Subscribe Now",
      imgName: "SGBs",
      src: "../../public/images/c7.webp",
      description:
        "Invest in these Government securities denominated in Gold and enjoy gold price appreciation, 2.5% interest and tax benefit",
    },
  ];

  return (
    <>
      <Wrapper>
        <Container sx={{}}>
          <Grid
            container
            spacing={2}
            minHeight={30}
            sx={{ padding: "2rem 0rem" }}
          >
            <Grid
              container
              xs
              display="flex"
              justifyContent="center"
              gap={"10px"}
              alignItems="center"
            >
              <Avatar
                src="../../images/1cr_Coin.webp"
                sx={{ width: "60px", height: "60px" }}
              />
              <span id="iconText">Loved & Trusted by 1cr+ Indians</span>
            </Grid>
            <Grid
              container
              xs
              display="flex"
              justifyContent="center"
              gap={"10px"}
              alignItems="center"
            >
              <Avatar
                src="../../images/app-rating-coin.webp"
                sx={{ width: "60px", height: "60px" }}
              />
              <span id="iconText">Average App Rating</span>
            </Grid>
            <Grid
              container
              xs
              display="flex"
              justifyContent="center"
              gap={"10px"}
              alignItems="center"
            >
              <Avatar
                src="../../images/ratan-tata.svg"
                sx={{ width: "60px", height: "60px" }}
              />
              <span id="iconText">Backed by Ratan Tata</span>
            </Grid>
          </Grid>
        </Container>

        <StartInvesting id="invest">
          <Container>
            <Typography
              variant="h3"
              fontWeight={"500"}
              id="startInvesting"
              color={"white"}
            >
              One Demat Account, Multiple Investment Options
            </Typography>
          </Container>

          <OpenAccount id="invest_btn">Start investing for FREE</OpenAccount>
        </StartInvesting>

        <Slider {...settings}>
          {images.map((img, index) => {
            return (
              <Card key={index}>
                <CardData>
                  <CardImage>
                    <img src={img.src} alt="" width={140} />

                    <span style={{color: 'black'}}>
                        {index+1}/7
                    </span>
                  </CardImage>

                  <CardTitle>
                    <h3>{img.imgName}</h3>
                  </CardTitle>

                  <CardDescription>
                    <p>{img.description}</p>
                  </CardDescription>

                  <CardCTA>
                    <span style={{ color: "rgb(90 41 137)", cursor: 'pointer' }}>{img.text}</span>
                    <span style={{color: 'rgb(90 41 137)'}}>
                        {img.text ? <ArrowForwardIcon /> : ''}
                        
                    </span>
                  </CardCTA>
                </CardData>
              </Card>
            );
          })}
        </Slider>
      </Wrapper>
    </>
  );
}

export default CustomCarousel;

const Wrapper = styled.div`
  background: rgb(90 37 141);
  margin: 0.25em 0em;
  width: 100vw;

  span {
    color: white;
  }
`;

const StartInvesting = styled.div`
  background-color: rgb(97 57 159);
  padding: 5rem 7rem;
  display: flex;
  gap: 4rem;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
`;

export const OpenAccount = styled.button`
  border-radius: 40px;
  background-color: rgb(41 19 84);
  border: 0px;
  color: white;
  font-weight: bold;
  width: 22rem;
  padding: 1.5em 0em;
  font-size: 0.9rem;

  &:hover {
    background-color: rgb(90 41 137);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
`;
const CardData = styled.div`
  padding: 0em 1em 1em 1em;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    span{
        margin-top: 12px;
        border-radius: 50%;
        background-color: #ccc;
        padding: 8px;
    }
    
`;
const CardTitle = styled.div`
  margin-bottom: 1em;
  font-size: 1.1rem;
`;

const CardDescription = styled.div`
  p {
    color: grey;
    text-align: justify;
    font-size: 0.9rem;
  }
`;

const CardCTA = styled.div`
  margin-top: 1em;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1.5rem
`;