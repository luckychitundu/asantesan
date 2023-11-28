import React, { useState } from 'react';

const Dropdown = (props) => {
  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Response Tone:</label>
      <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="Professional">Professional</option>
        <option value="Casual">Casual</option>
        <option value="Creative">Creative</option>
      </select>

    </div>
  );
};

export default Dropdown;
