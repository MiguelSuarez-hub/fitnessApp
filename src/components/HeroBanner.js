import React from 'react'
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImg from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { md: '212px', xs: '70px'}, 
        ml: { sm: '50px'}
      }}
      position="relative"
      p="20px"
    >
      <Typography 
        color="#FF2625"
        fontWeight="600"
        fontSize="26px"
      >
        Fitness Club
      </Typography>
      <Typography 
        fontWeight="700"
        sx={{
          fontSize: { md: '44px', sm: '40px'}
        }}
        mb= "23px"
        mt="30px"
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={4}
      >
        Check out the most effective exercises.
      </Typography>
      <Button 
        variant='contained' 
        color="error" 
        href="#excercises"
        sx= {{
          backgroundColor: "#FF2625",
          padding: '10px'
        }}
      >Explore Excercises</Button>
      <Typography
        color="#FF2625"
        fontWeight="600"
        sx={{
          opacity: 0.1,
          display: { lg:'block', xs: 'none'}
        }}
        fontSize= "200px"
      >
        Excercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner