import React from 'react'
import MainSlider from './MainSlider';
import Service from './Service';
import About from './About';
import Vehicle from './Vehicle';
import Booking from './Booking';
import Team from './Team';
import FunReview from './FunReview';
import Benefit from './Benefit';

function Home() {
  return (
    <div>
   <MainSlider/>
   <Service />
   <About />
   <Benefit/>
   <Vehicle />
   <Booking/>
   <FunReview />
   <Team/>

</div>
  )
}

export default Home
