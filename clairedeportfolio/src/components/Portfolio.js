import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@mui/material";



const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "transparent",
    height: "100vh",
    position: "relative",
    margin: "12px",
    padding: "12px",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "20px",
    padding: "20px",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
}));

const projects = [
  {
    name: "Project 1",
    description: `Giving users a fast and easy way to track their money is important, 
    but allowing them to access that information anytime is even more important. 
    Having offline functionality is paramount to our applications success.`,
    image: '',
    link: 'https://dry-ocean-37259.herokuapp.com/',
    github: 'https://github.com/depotte6/BalancedBudget',
   
  },
  {
    name: "Project 2",
    description: `AS A manager
    I WANT to generate a webpage that displays my team's basic info
    SO THAT I have quick access to their emails and GitHub profiles`,
    link: 'https://www.youtube.com/watch?v=I1KKDrWNzqk',
    github:'https://github.com/depotte6/Team-Profiles',
   
  },
  {
    name: "Project 3",
    description: `Using server side api's to retrieve info about characters from the Marvel Universe, and then finding additional info with a wikipedia api.

    The Marvel fan can search by character. They are then presented with an image and description(when available) sourced from Marvel.com and a random snippet from Wikipedia.com!`,
    link: 'https://depotte6.github.io/comic-call/',
    github: 'https://github.com/depotte6/comic-call',
    
  },
  {
    name: "Project 4",
    description: `User Story
    AS AN employee with a busy schedule
    I WANT to add important events to a daily planner
    SO THAT I can manage my time effectively
    !`,
    link: 'https://depotte6.github.io/DailyDocket/',
    github: 'https://github.com/depotte6/DailyDocket',
    
  },
  {
    name: "Project 5",
    description: `Track your fitness with this app.
    Add exercices to your most recent workout plan.
    Add new exercises to a new workout plan
    View combined weight of multiple exercises from the past seven workouts
    on the stats page
    View total duration of each workout from past seven workouts on the stats page.!`,
    link: 'https://lit-basin-70494.herokuapp.com/?id=615a0200861ba40016feba6a',
    github: 'https://github.com/depotte6/TrackNFitness',
   
  },
  {
    name: "Project 6",
    description: `AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions!`,
    link: 'https://boiling-mesa-06832.herokuapp.com/login',
    github: 'https://github.com/depotte6/Bloggy',
    
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    
    <Box component="div" className={classes.mainContainer}>
        <Container padding-top="12px">
         <Typography variant ="h4" className={classes.heading}>
        Projects
      </Typography>
      </Container>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" className={classes.heading} gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="tomato">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
                <a href={project.link}>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </a>
                <a href={project.github}>
                <Button size="small" color="primary">
                  Github Repo
                </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
   
  );
};

export default Portfolio;