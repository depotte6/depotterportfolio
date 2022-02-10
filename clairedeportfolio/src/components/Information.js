import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";


function Information() {
  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <h1>howdy</h1>
              </Grid>
              <Grid item xs={12} md={6}>
               <h1>hi</h1>
              </Grid>
              <Grid item xs={12} md={6}>
                <h1>hill</h1>
              </Grid>
              <Grid item xs={12} md={6}>
                <h1>yaww</h1>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
          <h2>hiya</h2>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Information;