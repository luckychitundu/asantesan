import React, { useState } from 'react';

const CustomArea = () => {
  // State to manage the textarea value
  const [customareaValue, setCustomareaValue] = useState('');

  // Function to handle changes in the textarea
  const handleCustomareaChange = (event) => {
    setCustomareaValue(event.target.value);
  };

  return (
    <div>
      {/* <label htmlFor="textarea">Enter Text:</label> */}
      <textarea
        id="textarea"
        value={customareaValue}
        onChange={handleCustomareaChange}
        rows={8} // Set the number of rows if needed
        cols={50} // Set the number of columns if needed
        placeholder='I want the response to include...'
      />
    </div>
  );
};

export default CustomArea;
