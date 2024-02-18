import React from 'react';
import './App.css';
import 'boxicons';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Projects from './components/projects/Projects';
import Animation from './components/animation/Animation';
import Timeline from './components/timeline/Timeline';

const App = () => {
  return (
    <>
      <Animation />
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Timeline />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App;
