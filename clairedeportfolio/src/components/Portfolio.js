import React from 'react';
import { Stack } from '@mui/material';
import { Box, Grid } from '@material-ui/core';
import Cards from './Card';



const Portfolio = (props) => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Cards.map(card => {
          <Grid item xs={12} md={6} lg={4} key={card.name}>
            <Cards card={card} />
          </Grid>
        })}
      </Grid>
    </Box>
  );
    </div>
  )
}

export default Portfolio