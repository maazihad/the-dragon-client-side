import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import NewsLatter from '../NewsLatter/NewsLatter';

const RightNav = () => {
   return (
      <div>
         <h4 className='text-center text-dark fs-3'>Login with</h4>
         <Button className='mb-2 w-100 py-3 rounded-0' variant="outline-primary"><FaGoogle /> Login with google</Button><br />
         <Button className='w-100 py-3 rounded-0' variant="outline-secondary"> <FaGithub /> Login with github</Button>


         <ListGroup className='mt-2 rounded-0'>
            <ListGroup.Item className='p-3 fs-5'> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
            <ListGroup.Item className='p-3 fs-5'> <FaTwitter></FaTwitter> twitter</ListGroup.Item>
            <ListGroup.Item className='p-3 fs-5'> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
         </ListGroup>

         <QZone></QZone>

         <NewsLatter></NewsLatter>
      </div>
   );
};

export default RightNav;