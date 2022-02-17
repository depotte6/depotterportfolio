import * as React from 'react';
import { makeStyles  } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
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
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    backgroundColor: "tomato",
    margin: "auto",
    height: 350,
    width: 330,
    display: "inline-block",
    position: "relative",
  },
  heading: {
    color: "black",
    textAlign: "left",
    textTransform: "uppercase",
    variant: "p",
    padding: 0,
    margin: 1,
  },
  description: {
    color: "emerald",
    textAlign: "left",
    variant: "p",
  }
}));

export default function Cards(props) {
  const classes= useStyles();

  return (
 
  <Grid container spacing={2}>
    {projects.map((project) => (
      <Grid item xs={12} sm={4} key={project.name}>
        <Card
        sx={{ maxWidth: 350, maxHeight: 350, border: 2,  
        borderColor: 'primary', borderRadius: '16px', boxShadow: 3 }}
        className={classes.cardContainer}
        >
          
        
          <CardMedia
            component="img"
            height="38%"
            image={project.image}
            alt={project.name}
          />
            <CardHeader
            className={classes.heading}
            title={project.name}
          />
          <CardContent>
            <Typography className={classes.description}>
              {project.description}
            </Typography>
          </CardContent>
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
   
    ))
    })
    </Grid>
 
)
  }