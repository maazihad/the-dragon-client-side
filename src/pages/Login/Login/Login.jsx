import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
   return (
      <Container>
         <h2 className='text-center mb-0 text-primary mt-3 fw-bolder'>Please Login !!!</h2>
         <Form className='w-50 mx-auto bg-info m-3 p-5 rounded-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
               Login
            </Button>
            <br />
            <Form.Text className="text-white text-center d-block">
               Dont Have an Account ? <Link to="/register">Register.</Link>
            </Form.Text>

            <Form.Text className="text-success">

            </Form.Text>
            <Form.Text className="text-danger">

            </Form.Text>
         </Form>
      </Container>
   );
};

export default Login;