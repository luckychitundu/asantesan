import React, {useState} from 'react';
import './App.css';
// import Dropdown from './Dropdown.js';
// import EmailArea from './EmailArea.js';
// import CustomArea from './CustomArea.js';
// import EmailPromptGenerator from './EmailPromptGenerator.js';

function App() {
  const [emailValue, setEmailValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [customValue, setCustomValue] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  // Function to handle changes in the textarea
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

     // Function to handle changes in the textarea
  const handleCustomChange = (event) => {
    setCustomValue(event.target.value);
  };



  function handleGeneratePrompt() {
    if (emailValue && selectedValue && customValue) {
      // Generate the prompt based on user input
      const prompt = `Hello ${emailValue}! We appreciate your ${selectedValue} attitude. ${customValue}.`;

      // Set the generated prompt in the state
      setGeneratedPrompt(prompt);

    } else {
      // Handle case where not all required fields are filled
      alert('Please fill in all fields.');
    }
  }

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

    <div>
      {/* <label htmlFor="textarea">Enter Text:</label> */}
      <textarea
        id="textarea"
        value={emailValue}
        onChange={handleEmailChange}
        rows={12} // Set the number of rows if needed
        cols={50} // Set the number of columns if needed
        placeholder='Enter the email you are replying to here...'
      />
    </div>

    <div className='miniArea'>
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
      {/* <label htmlFor="textarea">Enter Text:</label> */}
      <textarea
        id="textarea"
        value={customValue}
        onChange={handleCustomChange}
        rows={8} // Set the number of rows if needed
        cols={50} // Set the number of columns if needed
        placeholder='I want the response to include...'
      />
    </div>
    </div>
    </div>


    <div>
        <button onClick={handleGeneratePrompt}>Generate Prompt</button>
      <div>
          <h3>Generated Prompt:</h3>
          <p>{generatedPrompt}</p>
      </div>
    </div>


    </>
  )
}

export default App