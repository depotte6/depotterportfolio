import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ClassNames } from '@emotion/react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import ProductHeroLayout from './ProductHeroLayout';
import { Container } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    contactContainer: {
        display: "transparent",
        background: "#233",
        height: "40vh",
      },
      heading: {
        color: "secondary",
        textAlign: "center",
        marginBottom: "1rem",
      },
     
      input: {
        color: "#fff",
      },
      button: {
        marginTop: "1rem",
        color: "secondary",
        borderColor: "teal",
      },
      field: {
        margin: "1rem 0rem",
      },
  }));


  const About = () => {
      const classes= useStyles();
    return <div>
        <ProductHeroLayout>
          <Container className={classes.contactContainer}>
            <Typography variant="h3" className={classes.heading}>About me</Typography>
       
        
          <Box>
            <Typography>Imaginative, dynamic Full Stack Web Developer. Passionate about creating responsive and aesthetic user experience.
Ability to work in faced-paced team settings with excellent communication, problem solving, and time management skills.
In my free time I enjoy feeding my creativity - painting, drawing, wood-working - just to name a few. In the summertime you will find me tending to my garden as well.
</Typography>
          </Box>
          </Container>
        </ProductHeroLayout>
  </div>;
};

export default About;
