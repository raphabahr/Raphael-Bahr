import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills sections animate" id="skills">
      <h2 className='section__title'>Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container continer grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills