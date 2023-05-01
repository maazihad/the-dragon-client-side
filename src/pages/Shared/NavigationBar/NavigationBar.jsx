import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleLogOut = () => {
      logOut()
         .then()
         .catch((err) => {
            console.log(err.message);
         });
   };

   return (
      <Container>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">

                     <Link to="/category/0">Home</Link>

                     <Nav.Link href="#pricing">About</Nav.Link>
                     <Nav.Link href="#pricing">Career</Nav.Link>

                  </Nav>
                  <Nav className="d-flex align-items-center">
                     {
                        user &&
                        <Nav.Link href="#deets">
                           <FaUserCircle className='fs-2' />
                        </Nav.Link>
                     }

                     {
                        user
                           ? <Button onClick={handleLogOut} variant="primary">Logout</Button>
                           : <Link to="/login">
                              <Button variant="primary">Login</Button>
                           </Link>
                     }

                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar >
      </Container>
   );
};

export default NavigationBar;