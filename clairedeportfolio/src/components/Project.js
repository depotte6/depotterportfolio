import React from 'react';
import Card from '@material-ui/core';


function Project(props) {
    return (
      <Card 
      position="abosolute"
      color="black"
      >
        <div position="absolute"></div>
        <>
          <div color="white">
            <div >
              <h2>{props.title}</h2>
              <div>
                <a href={props.demoUrl} target="_blank">
                 
                </a>
                <a href={props.codeUrl} target="_blank">
        
                </a>
              </div>
            </div>
          </div>
          <small >
            Stack: {props.description}
          </small>
          <img  src={props.imgUrl} alt={props.title} />
        </>
      </Card>
    );
  }
  

export default Project;
