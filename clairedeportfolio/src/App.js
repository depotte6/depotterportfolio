import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Heading from './components/Heading';
import Footer from './components/Footer';
import This from './components/This';
import ResponsiveAppBar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/About";

function App() {

  return (
    <div className="App">
      <This />
      <Heading />
      <div>
        <ResponsiveAppBar />
      </div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />

      </Routes>
      
      </BrowserRouter>
      
      <About />
     
      <Portfolio />
    
      <Footer />
      

    </div>
  );
}

export default App;
