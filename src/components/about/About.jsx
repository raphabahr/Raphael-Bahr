import React from 'react';
import "./about.css";
import AboutImg from "../../assets/aboutme.jpg";
import CV from "../../assets/Raphael.pdf";
import Info from './Info.jsx';

const About = () => {
  return (
    <section className="about section animate" id="about">
      <h2 className='section__title '>About Me</h2>
      <span className="section__subtitle ">My Introduction</span>

      <div className='about__container container grid animate'>
        <img src={AboutImg} alt="" className='about__img' />

        <div className='about__data animate'>
          <Info />

          <p className="about__description animate">I have acquired skills in various programming languages, such as JS, Typescript, C# and PHP, and I have experience with SASS, Bootstrap, React, React Native, MySQL, and WordPress. Through academic and personal projects, I have developed my ability to creatively and efficiently solve problems.</p>
          <a download="" href={CV} className="button button--flex animate"> Download CV
          </a>
        </div>
      </div>
    </section>
  )
};

export default About