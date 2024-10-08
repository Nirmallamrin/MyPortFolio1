import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Header/>
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element ={<Skills/>}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
      </div>
  )
}

export default App