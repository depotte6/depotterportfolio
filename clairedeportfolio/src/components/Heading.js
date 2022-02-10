import * as React from 'react';
import Typography from '@mui/material/Typography'
import ProductHeroLayout from './ProductHeroLayout';



export default function Heading() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Claire VanAssche DePotter
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 2, sm: 6 } }}
      >
       Full Stack Web Developer
      </Typography>
     
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    
    </ProductHeroLayout>
  );
}