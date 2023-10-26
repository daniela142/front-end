import React, { useState } from 'react';
import "../../style/exam.css";



export const Exam = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (selectedOption === '32') {
      alert('Correct!');
    } else {
      alert('Incorrect');
    }
  };

  return (
    <div className="exam">
    <header>Introduction to Development Basics</header>
    <div className="question-box">
      <h2>Question 3</h2>
      <div className="question">
        How many teeth does the average human have?
        <form onSubmit={e => e.preventDefault()} className="options">
          {["62", "32", "9", "None of the above"].map(option => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={e => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          ))}
        </form>
      </div>
      <button className="submit-q" onClick={handleSubmit}>Submit</button>
    </div>

  </div>
);
}



