import * as React from 'react';
import Typography from '@mui/material/Typography'
import ProductHeroLayout from './ProductHeroLayout';
import { Box } from '@material-ui/core';




export default function Heading() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
    <Box
      xs={{
        display: 'inline-block',
      }} >
      <Typography color="tomato" fontFamily="Courier" align="left" variant="h2" marked="center">
        Claire <br></br>VanAssche <br></br>DePotter
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h4"
        sx={{ mb: 2, mt: { sx: 2, sm: 6 } }}
      >
       
      </Typography>
     
      <Typography variant="h4" color="inherit" align="left" sx={{ mt: 2 }}>
      full stack web developer
      </Typography>
      
      </Box>
     
    </ProductHeroLayout>
  );
}