import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ClassNames } from '@emotion/react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';




const useStyles = makeStyles((theme) => ({
    contactContainer: {
        display: "block",
        background: "#233",
        height: "100vh",
      },
      heading: {
        color: "tomato",
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: "1rem",
      },
      form: {
        display: "block",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
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
        <Box component='div' className={ClassNames.contactContainer}>
            
            <Typography variant="h5" className={classes.heading}>
            About me
          </Typography>

       
        </Box>
  </div>;
};

export default About;
