import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Footer from './components/Footer';
import This from './components/This';
import ResponsiveAppBar from './components/Navbar';
import Portfolio from './components/Portfolio';


//import This from './components/This';
//import MainStuff from './components/MainStuff';

function App() {

  return (
    <div className="App">
      <This />
      <Heading />
      <div>
        <ResponsiveAppBar />
      </div>
     
      <Portfolio />
    
      <Footer />
      

    </div>
  );
}

export default App;
