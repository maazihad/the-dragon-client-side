import React from 'react';
import logo from "../../../assets/logo.png";
import moment from 'moment';

import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
   return (
      <Container>
         <div className="text-center">
            <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>

            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
         </div>

         <div className='d-flex'>
            <Button variant="danger">latest</Button>
            <Marquee speed={70} pauseOnHover={true} className="text-danger">
               Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
         </div>

         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                     <Nav.Link href="#features">Home</Nav.Link>
                     <Nav.Link href="#pricing">About</Nav.Link>
                     <Nav.Link href="#pricing">Career</Nav.Link>

                  </Nav>
                  <Nav className="d-flex align-items-center">
                     <Nav.Link href="#deets">Profile</Nav.Link>
                     <Nav.Link eventKey={2} href="#memes">
                        <Button variant="primary">Login</Button>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar >
      </Container >
   );
};

export default Header;