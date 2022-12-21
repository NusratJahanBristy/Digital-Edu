import React from 'react';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import DealerCompany from '../RegisterSection/DealerCampany/DealerCompany';
import RegisterSection from '../RegisterSection/RegisterSection';

const Home = () => {
  return (
    <div>
      <BrandCarousel></BrandCarousel>
      <RegisterSection></RegisterSection>
      <DealerCompany></DealerCompany>

    </div>
  );
};

export default Home;