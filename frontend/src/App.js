import React, { useState, useRef } from 'react';
import './App.css';
import complogo from './assets/complogo.png';

function App() {
  const [emailValue, setEmailValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [customValue, setCustomValue] = useState('');
  const [result, setResult] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

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
      console.log(resultData.result);
      setResult(resultData.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    try {
      document.execCommand('copy');
      setCopySuccess('Copied!');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
      setCopySuccess('Copy failed');
    }
    e.target.focus();
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          <a href="">
            <img src={complogo} alt="Company logo" width={100} />
          </a>
          <h1>Welcome to Your Number One Smart Companion</h1>
        </div>
        <p>Let's get started!</p>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
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
                <select
                  id="dropdown"
                  value={selectedValue}
                  onChange={handleDropdownChange}
                >
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

            <button type="button" onClick={handleGeneratePrompt}>
              Generate Response
            </button>

            {result && (
              <div className="generated-response">
                <button type="button" onClick={copyToClipboard} className="copy-button">
                  Copy
                </button>
                {copySuccess && <p className="copy-success">{copySuccess}</p>}
                <form>
                  <textarea ref={textAreaRef} value={result} rows={10} readOnly />
                </form>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
