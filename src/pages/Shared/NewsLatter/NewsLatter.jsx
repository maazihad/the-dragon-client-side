import React from 'react';

import bgNewsLatter from "../../../assets/bg1.png";
import { Button } from 'react-bootstrap';

const NewsLatter = () => {
   return (
      <div className="position-relative">
         <img style={{ width: 320, }} className='w-full' src={bgNewsLatter} alt="" />
         <div className='position-absolute top-0 left-25 text-white text-center'>
            <h3>Create an Amazing NewsPaper</h3>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

            <Button className='mb-2 w-50 py-3 rounded-0' variant="danger">Learn more</Button>
         </div>
      </div>
   );
};

export default NewsLatter;