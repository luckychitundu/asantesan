import React, { useState } from 'react';
import './App.css';

function App() {
  const [emailValue, setEmailValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [customValue, setCustomValue] = useState('');
  const [result, setResult] = useState('');

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCustomChange = (event) => {
    setCustomValue(event.target.value);
  };

  const handleGeneratePrompt = async () => {
    if (emailValue === '' || selectedValue === '' || customValue === '') {
      alert('Please fill in all fields');
      return;
    }

    try {
      const dataToSend = { emailValue, selectedValue, customValue };
      const response = await fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const resultData = await response.json();
      setResult(resultData.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome to Your Number One Smart Companion</h1>
        <p>Let's get started!</p>
      </header>

      <nav className="navbar">
        <ul>
          {/* <li><a href="#asante">Asante</a></li> */}
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <div className="main-content">
        <h2>EMAIL RESPONSE GENERATOR</h2>

        <form>
          <div className="textAreas">
            <div>
              <textarea
                value={emailValue}
                onChange={handleEmailChange}
                rows={12}
                placeholder="Enter the email you are replying to here..."
              />
            </div>

            <div className="miniArea">
              <div>
                <label htmlFor="dropdown">Response Tone:</label>
                <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
                  <option value="">Select an option</option>
                  <option value="Professional">Professional</option>
                  <option value="Casual">Casual</option>
                  <option value="Creative">Creative</option>
                </select>
              </div>

              <div>
                <textarea
                  value={customValue}
                  onChange={handleCustomChange}
                  rows={8}
                  placeholder="I want the response to include..."
                />
              </div>
            </div>
          </div>

          <button onClick={handleGeneratePrompt}>Generate Response</button>
        </form>

        <div className="result">
          <h3>Generated Response:</h3>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
