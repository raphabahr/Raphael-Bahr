import React, { useEffect } from 'react';
import "./home.css";
import Data from './Data';
import { gsap } from "gsap";
import SplitType from 'split-type';

const Home = () => {
  useEffect(() => {
    const myText = new SplitType('#my-text');

    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.3,
      duration: 0.1
    });
  }, []);

  return (
    <section className='home section show-animate' id='home'>
      <div className='home__container container grid animate'>
        <div className="home__img animate"></div>

        <div className='name'>
          <h1 id='my-text'>Raphael Bahr</h1>
        </div>

        <div className="home__content grid">
          <Data />
          <div className='home__pc-image'></div>
        </div>
      </div>
    </section>
  );
};

export default Home;