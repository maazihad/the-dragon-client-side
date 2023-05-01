import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import firstImg from "../../../assets/1.png";
import secondImg from "../../../assets/2.png";
import thirdImg from "../../../assets/3.png";


const EditorInsights = () => {
   return (
      <div>
         <CardGroup >
            <Card>
               <Card.Img variant="top" src={firstImg} />
               <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This content is a little bit longer.
                  </Card.Text>
               </Card.Body>
               <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
               </Card.Footer>
            </Card>
            <Card>
               <Card.Img variant="top" src={secondImg} />
               <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                     This card has supporting text below as a natural lead-in to
                     additional content.{' '}
                  </Card.Text>
               </Card.Body>
               <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
               </Card.Footer>
            </Card>
            <Card>
               <Card.Img variant="top" src={thirdImg} />
               <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This card has even longer content than the
                     first to show that equal height action.
                  </Card.Text>
               </Card.Body>
               <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
               </Card.Footer>
            </Card>
         </CardGroup>
      </div>
   );
};

export default EditorInsights;