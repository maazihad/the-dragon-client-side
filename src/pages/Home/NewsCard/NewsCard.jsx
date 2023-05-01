import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
   const { _id, title, details, image_url, author, total_view, rating } = news;
   return (
      <div>
         <Card className="mb-3 rounded-0">
            <Card.Header className='d-flex align-items-center'>
               <div>
                  <Image style={{ width: '40px' }} src={author?.img} roundedCircle />
               </div>
               <div className='ps-2 flex-grow-1'>
                  <b className='m-0 ms-2'>{author?.name}</b>
                  <p className='m-0 ms-2'><small>{moment(author?.published_date).format("yyyy-MM-D")}</small></p>
               </div>
               <div>
                  <FaRegBookmark className='fs-4 mx-2' />
                  <FaShareAlt className='fs-4 mx-2' />
               </div>
            </Card.Header>
            <Card.Body>
               <Card.Title>{title}</Card.Title>
               <Card.Img variant="top" src={image_url} />
               <Card.Text>
                  {
                     details.length < 250
                        ? <>{details}</>
                        : <>{details.slice(0, 250)} ... <Link to={`/news/${_id}`}>Read more</Link></>
                  }
               </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
               <div className="d-flex">
                  <div className='flex-grow-1'>
                     <Rating className='fs-5'
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar className='text-warning' />}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaStar />}
                     />
                     <span className='ms-2'>
                        {
                           rating?.number
                        }
                     </span>
                  </div>
                  <div>
                     <FaEye /> {total_view}
                  </div>
               </div>
            </Card.Footer>
         </Card>
      </div>
   );
};

export default NewsCard;