import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
    </div>
  )
}

export default App;
