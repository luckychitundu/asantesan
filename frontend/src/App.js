import React from 'react';
import './App.css';
import Dropdown from './Dropdown.js';
import EmailArea from './EmailArea.js';
import CustomArea from './CustomArea.js';
import EmailPromptGenerator from './EmailPromptGenerator.js';

function App() {
  return (
    <>
    <div>
      {/* Navigation Bar */}
      <nav>
        <ul className='navbar'>
          <li><a href="#asante">Asante</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div>
        <h1>Welcome to Your Number One Smart Companion</h1>
        <p>Lets get started!.</p>
      </div>
    </div>
    <h2>EMAIL RESPONSE GENERATOR</h2>
    <div className='textAreas'>
    <EmailArea />
    <div className='miniArea'>
      <Dropdown />
      <CustomArea />
    </div>
    </div>
    
    <div className='button'>
      <button>Generate Response</button>
    </div>

    </>
  )
}

export default App