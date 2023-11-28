// // EmailPromptGenerator.jsx
// import React, { useState } from 'react';

// const EmailPromptGenerator = ({email, tone, preferentialText}) => {
//   const [email, setEmail] = useState('');
//   const [tone, setTone] = useState('');
//   const [preferentialText, setPreferentialText] = useState('');
//   const [generatedPrompt, setGeneratedPrompt] = useState('');

//   const handleGeneratePrompt = () => {
//     if (email && tone && preferentialText) {
//       // Generate the prompt based on user input
//       const prompt = `Hello ${email}! We appreciate your ${tone} attitude. ${preferentialText}.`;

//       // Set the generated prompt in the state
//       setGeneratedPrompt(prompt);

//       // Display the prompt (you might want to use a modal or another UI element)
//       alert(prompt);
//     } else {
//       // Handle case where not all required fields are filled
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleGeneratePrompt}>Generate Prompt</button>

//       <div>
//         <h3>Generated Prompt:</h3>
//         <p>{generatedPrompt}</p>
//       </div>
//     </div>
//   );
// };

// export default EmailPromptGenerator;
