import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <Container>
         <h2 className='text-center mb-0 text-primary mt-3 fw-bolder'>Please Register!!!</h2>
         <Form className='w-50 mx-auto bg-info m-3 p-5 rounded-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Name</Form.Label>
               <Form.Control type="name" name="name" placeholder="Enter Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Photo URL</Form.Label>
               <Form.Control type="text" name="photo" placeholder="Enter photo url" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" name="acceptTerms" label="Accept terms & conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
               Login
            </Button>
            <br />
            <Form.Text className="text-white text-center d-block">
               Already have an account ? <Link to="/login">Login.</Link>
            </Form.Text>

            <Form.Text className="text-success">

            </Form.Text>
            <Form.Text className="text-danger">

            </Form.Text>
         </Form>
      </Container>
   );
};

export default Register;