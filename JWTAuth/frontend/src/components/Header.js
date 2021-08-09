import React, { useEffect } from "react";
import {Container,Form,FormControl,Nav,Navbar,NavDropdown} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Redirect,Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header({props}) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const logoutHandler = () => {
    removeCookie('token');
  };

  const location = useLocation();
  console.log('props',location.pathname);
  if (location.pathname == "/") return null;
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Main Menu</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {(
              <>
                <NavDropdown title={`LogOut`} id="collasible-nav-dropdown">
                
                  <NavDropdown.Item onClick={logoutHandler}>
                  <Link to="/">
                    Logout
                    </Link>
                  </NavDropdown.Item>
                
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
