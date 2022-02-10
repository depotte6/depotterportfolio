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
        color: "tomato",
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: "1rem",
      },
     
      input: {
        color: "#fff",
      },
      button: {
        marginTop: "1rem",
        color: "tomato",
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
            <Typography variant="h3" className={classes.heading}>Hi</Typography>
          </Container>
          <h3> About me</h3>
        </ProductHeroLayout>
  </div>;
};

export default About;
