import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from '../EditorInsights/EditorInsights';

const News = () => {

   const news = useLoaderData();

   const { category_id, _id, title, details, image_url, author, total_view, rating } = news;

   return (
      <div>
         <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
               <Card.Title>{title}</Card.Title>
               <Card.Text>
                  {details}
               </Card.Text>
               <Link to={`/category/${category_id}`}>
                  <Button variant="danger rounded-0"> <FaArrowLeft /> All news in this category</Button>
               </Link>
            </Card.Body>
         </Card>
         <EditorInsights />
      </div>
   );
};

export default News;