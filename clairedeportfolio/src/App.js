import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Heading from './components/Heading';
import Footer from './components/Footer';
import This from './components/This';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/About";
import Page from "./components/Page";
import Cards from "./components/Card";
import Head from "./components/Head";


function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);



  return (
    
    <div className="App">
      <This />
      <Head />
      <div>
        <Navbar pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
   
      </div>

      <div>
      <Page currentPage={currentPage}></Page>
      </div>

      <BrowserRouter>
      <Routes>
      <Route exact path="/" />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />

      </Routes>
      
      </BrowserRouter>
      

     
  
    
      <Footer />
      

    </div>
  );
}

export default App;
