
import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Education from './components/Education/Education.jsx';
// import Contact from './components/Contact/Contact.jsx';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <Skills/>
        <Education/>
        {/* <Contact/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
