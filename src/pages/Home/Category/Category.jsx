import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

   // যে নামে রাউটের দেয়া হবে সে নাম ডিস্ট্রাকচার করতে হবে। 
   const { categoryId } = useParams();
   const categoryNews = useLoaderData();
   return (
      <div>
         {categoryId && <h2>This category News : {categoryNews.length}</h2>}
         {
            categoryNews.map(news => <NewsCard
               key={news._id}
               news={news}
            >

            </NewsCard>)
         }
      </div>
   );
};

export default Category;