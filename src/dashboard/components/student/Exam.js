import React, { useState, useEffect } from 'react';
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
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(13);
  useEffect(() => {
    if (seconds === 0) {
      if (minutes === 0) return;

      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
  }, [minutes, seconds]);

  return (
    <div className="Exam">
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
    </div>
    <button onClick={handleSubmit}>Submit</button>


    <div className="App">
      <div className="questions-list">
        <h2>Questions</h2>
        <ul>
          <li>Question 1</li>
          <li>Question 2</li>
          <li>Question 3</li>
          <li>Question 4</li>
          <li>Question 5</li>
          <li>Question 6</li>
          <li>Question 7</li>
          <li>Question 8</li>
          <li>Question 9</li>
          <li>Question 10</li>
        </ul>
      </div>
      <div className="timer-section">
        <h2>Time Remaining</h2>
        <p>{`${minutes} mins ${seconds} sec`}</p>
      </div>
    </div>

  </div>

  );
}



