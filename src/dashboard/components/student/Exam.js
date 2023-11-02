import React, { useState, useEffect } from 'react';
import "../../style/exam.css";
import axios from 'axios';
import LoadingCircle from "../LoadingCircle";
import {Question} from "./Question";
import CorrectIcon from "../../svg/correctIcon";
import IncorrectIcon from "../../svg/incorrectIcon";
import {ExamEnd} from "./ExamEnd";

export const Exam = ({id_exam}) => {
  const [test, setTest] = useState({});
  const [question, setQuestion] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [examComplete, setExamComplete] = useState(false);

  const [showResult, setShowResult] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

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

  const handleSubmit = async (studentAnswer) => {
    // CheckBoxes validation
    if (test.questions[currentQuestion].type === "CheckBoxes") {
      if (compareCheckBoxes(studentAnswer, test.questions[currentQuestion].answers)) await setIsCorrect(true);
      else await setIsCorrect(false);
    }
    // MultiChoice/ShortAnswer validation
    else {
      if (studentAnswer[0] === test.questions[currentQuestion].answers[0]) await setIsCorrect(true);
      else await setIsCorrect(false);
    }
    await showResultPopop();
    if (currentQuestion + 1 === test.questions.length) {
      setExamComplete(true);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const showResultPopop = async () => {
    return new Promise((res) => {
      setShowResult(1);
      setTimeout(() => {
        setShowResult(2);
        setTimeout(() => {
          setShowResult(0);
          res();
        }, 250)
      }, 1500);
    });
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
      { isCorrect && <div className={`result-popup ${!showResult ? 'hidden' : ''}`}><div><CorrectIcon />Correct</div></div> }
      { !isCorrect && <div className={`result-popup ${!showResult ? 'hidden' : ''}`}><div><IncorrectIcon />Incorrect</div></div> }
      <h1>{test?.name}</h1>
      { !examComplete && <h2>Question {currentQuestion + 1}</h2> }
      <div className="question-container" style={{ display: (examComplete ? 'none' : 'flex') }}>
        <Question handleSubmit={handleSubmit} question={question} />
        <div className="question-side">
          <div className="side-list">
            <h4>Questions</h4>
            <ul className="question-list">
              {
                test?.questions?.map((question, index) => (
                  <li className={index === currentQuestion ? 'bold-question' : ''} style={{marginBottom:"5px"}}>Question {index+1}</li>
                ))
              }
            </ul>
          </div>
          <div className="side-time">
            <h4>Time Remaining</h4>
            <p style={{marginLeft:"45px"}}>{test?.time_limit} mins 0 secs  </p>
          </div>
        </div>
      </div>
      { examComplete && <ExamEnd totalMarks={ test.questions.length } /> }      <div style={{backgroundColor: "#F5F5F5", width:"100%", height:"200px"}}>

      </div>
    </div>
  );
}



