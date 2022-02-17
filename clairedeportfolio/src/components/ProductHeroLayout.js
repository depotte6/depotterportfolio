import * as React from 'react';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '45vh',
    minHeight: 200,
    maxHeight: 200,
  },
}));



function ProductHeroLayout(props) {
  const {  children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 5,
          display: 'flexbox',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
       
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
       
    
      </Container>
    </ProductHeroLayoutRoot>
  );
}



export default ProductHeroLayout;