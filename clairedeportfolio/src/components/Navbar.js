import {  Toolbar, Button, Box } from "@material-ui/core"
import React, { useEffect } from "react";
import { ButtonGroup } from "@material-ui/core";

const Navbar = (props) => {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = (currentPage.name);
  }, [currentPage]);

  return (
    <Toolbar width="full-width" disableGutters>
    <Box  lg={{ 
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        }}  
    >
      <ButtonGroup size='large' color='primary' aria-label='large button group' variant='text'>
         
          {pages.map((Page) => (
            <Button size="large"
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {(Page.name)}
              </span>
            </Button>
          ))}
        
      </ButtonGroup>
    

    </Box>
    </Toolbar>
  )
}

export default Navbar