import React, { useState, useEffect } from 'react';
import "../../style/exam.css";
import axios from 'axios';


export const Exam = ({id}) => {
  const [test, setTest] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const getTest = async (test_id) => {
    try {
      const response = await axios.get(
        global.route + `/api/tests/${test_id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    async function fetchData() {
      setTest(await getTest(id));
    }
    fetchData();
  }, []);

  const handleSubmit = () => {
    if (selectedOption === '32') {
      alert('Correct!');
    } else {
      alert('Incorrect');
    }
  };

  return (
    <div className="exam">
      <header>{test?.name}</header>
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



