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
  const [examComplete, setExamComplete] = useState(false);

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
    if (test?.questions) {
      setQuestion(test.questions[0]);
      setIsLoading(false);
    }
  }, [test]);

  useEffect(() => {
    setQuestion(test?.questions?.[currentQuestion]);
  }, [currentQuestion]);

  const handleSubmit = (studentAnswer) => {
    console.log(studentAnswer);
    console.log(test.questions[currentQuestion]);
    // CheckBoxes validation
    if (test.questions[currentQuestion].type === "CheckBoxes") {
      if (compareCheckBoxes(studentAnswer, test.questions[currentQuestion].answers)) alert('Correct!');
      else alert('Incorrect!');
    }
    // MultiChoice/ShortAnswer validation
    else {
      if (studentAnswer[0] === test.questions[currentQuestion].answers[0]) alert('Correct!');
      else alert('Incorrect!');
    }
    if (currentQuestion + 1 === test.questions.length) {
      setExamComplete(true);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const compareCheckBoxes = (studentArr, correctArr) => {
    if (studentArr.length !== correctArr.length) return false;

    const studentSorted = studentArr.slice().sort();
    const correctSorted = correctArr.slice().sort();

    for (const i of studentSorted)
      if (studentSorted[i] !== correctSorted[i]) return false;

    return true;
  }

  return (
    <div className="exam">
      {isLoading ? <LoadingCircle /> : ""}
      <h1>{test?.name}</h1>
      <h2>Question {currentQuestion + 1}</h2>
      <div className="question-container" style={{ display: (examComplete ? 'none' : 'flex') }}>
        <Question handleSubmit={handleSubmit} question={question} />
        <div className="question-side">
          <div className="side-list">
            <h4>Questions</h4>
            <ol>
              <li>Question 1</li>
              <li>Question 2</li>
              <li>Question 3</li>
              <li>Question 4</li>
              <li>Question 5</li>
            </ol>
          </div>
          <div className="side-time">
            <h4>Time Remaining</h4>
            <p>30 mins 0 sec</p>
          </div>
        </div>
      </div>
      { examComplete && 'Exam Complete!' }
    </div>
  );
}



