import React, { useState } from 'react';

const EmailArea = () => {
  // State to manage the textarea value
  const [emailareaValue, setEmailareaValue] = useState('');

  // Function to handle changes in the textarea
  const handleEmailareaChange = (event) => {
    setEmailareaValue(event.target.value);
  };

  return (
    <div>
      {/* <label htmlFor="textarea">Enter Text:</label> */}
      <textarea
        id="textarea"
        value={emailareaValue}
        onChange={handleEmailareaChange}
        rows={12} // Set the number of rows if needed
        cols={50} // Set the number of columns if needed
        placeholder='Enter the email you are replying to here...'
      />
    </div>
  );
};

export default EmailArea;
