import React, { useState, useEffect } from 'react';
import "../../style/exam.css";
import axios from 'axios';
import LoadingCircle from "../LoadingCircle";
import {Question} from "./Question";

export const Exam = ({id_exam}) => {
  const [test, setTest] = useState({});
  const [question, setQuestion] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const getTest = async (test_id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        global.route + `/api/tests/${test_id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    async function fetchData() {
      setTest(await getTest(id_exam));
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(test);
    if (test?.questions) {
      setQuestion(test.questions[0]);
      setIsLoading(false);
    }
    // console.log(question);
  }, [test]);

  useEffect(() => {
    setQuestion(test?.questions?.[currentQuestion]);
  }, [currentQuestion]);

  const handleSubmit = (studentAnswer) => {
    // need different logic for CheckBoxes and ShortAnswer
    if (studentAnswer[0] === test.questions[currentQuestion].answers[0]) {
      alert('Correct!');
    } else {
      alert('Incorrect');
    }
    // console.log("to next q: " + (currentQuestion + 1));
    // setQuestion(test.questions[currentQuestion + 1]);
    setCurrentQuestion(currentQuestion + 1);
    console.log(question);
    // setQuestion(test.questions[++currentQuestion]);
  };

  return (
    <div className="exam">
      {isLoading ? <LoadingCircle /> : ""}
      <h1>{test?.name}</h1>
      <h2>Question {currentQuestion + 1}</h2>
      <div className="question-container">
        <Question handleSubmit={handleSubmit} question={question} />
        {/*<div className="question-box">*/}
        {/*  <h3 className="question-text">How many teeth does the average human have?</h3>*/}
        {/*  <form onSubmit={e => e.preventDefault()} className="options">*/}
        {/*    {["62", "32", "9", "None of the above"].map(option => (*/}
        {/*      <label key={option}>*/}
        {/*        <input*/}
        {/*          type="radio"*/}
        {/*          value={option}*/}
        {/*          checked={selectedOption === option}*/}
        {/*          onChange={e => setSelectedOption(e.target.value)}*/}
        {/*        />*/}
        {/*        {option}*/}
        {/*      </label>*/}
        {/*    ))}*/}
        {/*  </form>*/}
        {/*  <button className="submit-q" onClick={handleSubmit}>Submit</button>*/}
        {/*</div>*/}
        <div className="question-side">
          <div className="side-list">
            <h4>Questions</h4>
            <ul className="question-list">
              <li>Question 1</li>
              <li>Question 2</li>
              <li>Question 3</li>
              <li>Question 4</li>
              <li>Question 5</li>
              <li>Question 6</li>
              <li>Question 7</li>
              <li>Question 8</li>
            </ul>
          </div>
          <div className="side-time">
            <h4>Time Remaining</h4>
            <p style={{marginLeft:"45px"}}>30 mins 0 sec</p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: "#F5F5F5", width:"100%", height:"200px"}}>

      </div>
    </div>
  );
}



