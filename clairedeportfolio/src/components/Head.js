import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Divider,
  Box,
  Hidden,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Navbar from "./Navbar";
import { Icon } from '@mui/material';
import ProductHeroLayout from './ProductHeroLayout';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: grey[900],
    textAlign: "center", // near-black: #212121
    "& h1": { color: grey[50] }, // near-white: #fafafa,
    "& .MuiCardHeader-root": { display: "inline" },
    "& .MuiCardHeader-avatar": { marginTop: theme.spacing(4) },
    "& .MuiCardActions-root": { display: "flex", justifyContent: "center" },
    "& .MuiAvatar-root": {
      margin: "0 auto",
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
}));

const Head = () => {
  const { root } = useStyles();
  const { palette } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container className={root} disableGutters={true}>
        <CssBaseline />
        <Card component={Paper}>
          <CardHeader
            avatar={<Avatar alt="" src="https://via.placeholder.com/96x96" />}
          />
               <ProductHeroLayout
      sxBackground={{
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
    <Box
      xs={{
        display: 'inline-block',
      }} >
      <Typography color="secondary" fontFamily="Courier" align="left" variant="h3" marked="center">
        Claire <br></br>VanAssche <br></br>DePotter
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h4"
        sx={{ mb: 2, mt: { sx: 2, sm: 6 } }}
      >
       
      </Typography>
     
      <Typography variant="h5" color="inherit" align="left" sx={{ mt: 2 }}>
      full stack web developer
      </Typography>
      
      </Box>
     
    </ProductHeroLayout>
        </Card>
        <CardActions>
          <IconButton href="https://github.com/depotte6">
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </CardActions>
     
      </Container>
    </ThemeProvider>
  );
};

export default Head;