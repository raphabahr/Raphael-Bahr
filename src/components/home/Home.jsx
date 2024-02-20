import React from "react";
import "./home.css";
import Data from './Data';

const Home = () => {
  return (
    <section className='home section show-animate' id='home'>
      <div className='home__container container grid animate'>
        <div className="home__img animate"></div>

        <div className="home__content grid">
          <Data />
          <div className='home__pc-image'></div>
        </div>
      </div>
    </section>
  );
};

export default Home;