import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import { Container, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";



import budgetImg from '../images/budgetImg.jpg';
import teamImg from '../images/teamImg.jpg';
import comicImg from '../images/comicImg.jpg';
import scheduleImg from '../images/workDayImg.jpg';
import blogImg from '../images/techImg.jpg';
import fitnessImg from '../images/fitnessImg.jpg';

const projects = [
  {
    name: "Project 1",
    description: `Giving users a fast and easy way to track their money is important, 
    but allowing them to access that information anytime is even more important. 
    Having offline functionality is paramount to our applications success.`,
    image: budgetImg,
    link: 'https://dry-ocean-37259.herokuapp.com/',
    github: 'https://github.com/depotte6/BalancedBudget',
   
  },
  {
    name: "Project 2",
    description: `AS A manager
    I WANT to generate a webpage that displays my team's basic info
    SO THAT I have quick access to their emails and GitHub profiles`,
    image: teamImg,
    link: 'https://www.youtube.com/watch?v=I1KKDrWNzqk',
    github:'https://github.com/depotte6/Team-Profiles',
   
  },
  {
    name: "Project 3",
    description: `Using server side api's to retrieve info about characters from the Marvel Universe, and then finding additional info with a wikipedia api.
    The Marvel fan can search by character. They are then presented with an image and description(when available) sourced from Marvel.com and a random snippet from Wikipedia.com!`,
    image: comicImg,
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
    image: scheduleImg,
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
    image: fitnessImg,
    link: 'https://lit-basin-70494.herokuapp.com/?id=615a0200861ba40016feba6a',
    github: 'https://github.com/depotte6/TrackNFitness',
   
  },
  {
    name: "Project 6",
    description: `AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions!`,
    image: blogImg,
    link: 'https://boiling-mesa-06832.herokuapp.com/login',
    github: 'https://github.com/depotte6/Bloggy',
    
  },
];
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "transparent",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    margin: "12px",
    padding: "12px",
  },
  cardContainer: {
    maxWidth: 300,
    margin: "2px",
    padding: "2px",
    display: "flexbox",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
}));

function Project(props) {
  const classes= useStyles();
    return (
    <div>
      {projects.map((project, i) => (
      <Card 
      position="abosolute"
      color='white'
      >
        <Box>
                <Grid item xs={2} sm={4} md={3} columns={{ xs:4, sm:8, md:12 }} key={i}>
                  <Card className={classes.cardContainer}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Project 1"
                        height="60"
                        image={project.image}
                      />
                      <CardContent>
                        <Typography variant="h6" className={classes.heading} gutterBottom>
                          {project.name}
                        </Typography>
                        <Typography variant="body3" color="tomato">
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
                </Box>
            </Card>
      ))}</div>
      )}

  

export default Project;
