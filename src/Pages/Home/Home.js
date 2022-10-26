import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const Home = () => {
  const courses=useLoaderData()
  console.log(courses)
    return (
        <div>
          <h5>home</h5>
          <BrandCarousel></BrandCarousel>
          {/* <h3>digital{courses.length}</h3> */}
        </div>
    );
};

export default Home;