import React from 'react'

import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WhatsAppButton from './components/common/WhatsAppButton';

const App = () => {
  return (
    <div className=" text-slate-100 min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App