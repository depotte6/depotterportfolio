import { Container, MenuItem, Toolbar, Button } from "@material-ui/core"
import React, { useEffect } from "react";
import { Tooltip } from "@material-ui/core";
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
    <Toolbar disableGutters>
  <Container className="navbar-wrapper">
      <ButtonGroup size="large" color="primary" aria-label="large button group" variant="text">
         
          {pages.map((Page) => (
            <Button
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
    

    </Container>
    </Toolbar>
  )
}

export default Navbar