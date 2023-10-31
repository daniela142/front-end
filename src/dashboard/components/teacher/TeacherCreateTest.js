import React, { useState } from "react";
import "../../style/dashboard.css";
import "../../style/teachercreatetest.css";
import "../../fonts/font.css";
import BadgeIcon from "../../svg/badgeIcon";
import axios from "axios";

import LoadingCircle from "../LoadingCircle";
import { useNavigate, useLocation } from "react-router-dom";

export const TeacherCreateTest = () => {
  const navigate = useNavigate();
  const url = useLocation().pathname;

  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timeLimit, setTimeLimit] = useState(60);

  const [questions, setQuestions] = useState([
    {
      question: "",
      type: "MultipleChoice",
      options: ["", "", "", ""],
      answer: "0",
      badge: "#518CFE",
    },
    {
      question: "",
      type: "ShortAnswer",
      answer: "",
      badge: "#518CFE",
    },
  ]);

  const [showDatetimeBox, setShowDatetimeBox] = useState(false);

  const badges = ["#518CFE", "#6D5ED2", "#5ED278", "#F4694C", "#F4D94C"];
  const inactiveBadge = "#ABABAB";

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleBadgeChange = (buttonId, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].badge = buttonId;
    setQuestions(updatedQuestions);
  };

  const handleRadioChange = async (index, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answer = optionIndex.toString();
    setQuestions(updatedQuestions)
  }

  const duplicateMCQ = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.push({
      question: "",
      type: "MultipleChoice",
      options: ["", "", "", ""],
      answer: "0",
      badge: "#518CFE",
    });
    setQuestions(updatedQuestions);
  };

  const duplicateShortAnswer = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.push({
      question: "",
      type: "ShortAnswer",
      answer: "",
      badge: "#518CFE",
    });
    setQuestions(updatedQuestions);
  };

  const handleNext = async () => {
    const allElementsFilled = questions.every((question) => (
      question.question && (question.type === "MultipleChoice" ? question.options.every(option => option) : question.answer) && title && question.answer
    ));

    if (allElementsFilled) {
      setShowDatetimeBox(true);
    } else {
      alert("Please fill out all elements before proceeding.");
    }
  }

  const handleBack = async () => {
    setShowDatetimeBox(false);
  }

  const createQuestions = async () => {
    const newObjectIds = [];

    for (let i = 0; i < questions.length; i++) {
      let elo;
      switch (questions[i].badge) {
        case "#518CFE":
          elo = 200;
          break;
        case "#6D5ED2":
          elo = 400;
          break;
        case "#5ED278":
          elo = 600;
          break;
        case "#F4694C":
          elo = 800;
          break;
        case "#F4D94C":
          elo = 1000;
          break;
        default:
          elo = 200;
          break;
      }

      try {
        let formattedOptions = null;
        
        if (questions[i].type === "MultipleChoice")
          formattedOptions = questions[i].options.map(option => option.toString());

        const response = await axios.post(
          global.route + `/api/questions`,
          {
            name: questions[i].question,
            type: questions[i].type,
            options: formattedOptions,
            answers: [questions[i].answer],
            elo: elo,

          },
          { withCredentials: true }
        );

        const newObjectId = response.data._id;
        newObjectIds.push(newObjectId);
      } catch (error) {
        console.error(error);
      }
    }

    await Promise.all(newObjectIds);
    return newObjectIds;
  }

  const createTest = async () => {
    setIsLoading(true);

    try {
      const questionsArr = await createQuestions();
      setIsLoading(false);

      const response = await axios.post(
        global.route + `/api/tests`,
        {
          name: title,
          description: "no description yet",
          questions: questionsArr,
          datetime: new Date(date + "T" + time),
          time_limit: timeLimit,
        },
        { withCredentials: true }
      );
      setIsLoading(false);

      const parentPath = url.slice(0, url.lastIndexOf('/'));
      navigate(parentPath, { replace: true });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return (
    <div>
      {isLoading ? <LoadingCircle /> : ""}
      {showDatetimeBox ? (
        <div>
          <div>
            <div className="date-time-box">
              <form style={{ display: "grid" }}>
                <label className="date-time-input-label">Exam Date:
                  <input
                    className="date-time-input-box"
                    style={{ width: "40%" }}
                    type="date"
                    onChange={handleDateChange}>
                  </input>

                  <hr className="line" />

                </label>
                <label className="date-time-input-label">Exam Time:
                  <input
                    className="date-time-input-box"
                    style={{ width: "40%" }}
                    type="time"
                    onChange={handleTimeChange}>
                  </input>
                </label>

                <hr className="line" />

                <label className="date-time-input-label">Time Limit (minutes):
                  <input
                    className="date-time-input-box"
                    style={{ width: "40%" }}
                    type="number"
                    placeholder={60}
                    onChange={(e) => setTimeLimit(e.target.value)}>
                  </input>
                </label>
              </form>
            </div>
            <div style={{ display: "flex", flexDirection: "column", float: "right" }}>
              <button
                className="test-publish-button"
                onClick={() => createTest()}>
                Publish
              </button>
              <button
                className="test-publish-button"
                onClick={() => handleBack()}>
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div id="questions-container">
            <div className="create-test-title">
              <input
                className="input-text"
                type="text"
                placeholder="Title of Quiz"
                defaultValue={title}
                onChange={
                  (e) => {
                    setTitle(e.target.value);
                  }}
              />
            </div>
            {
              questions.map((question, index) => (
                <div key={index}>
                  {question.type === "MultipleChoice" ? (
                    <div className="mcq-box">
                      <div style={{ display: "flex" }}>
                        <input
                          className="question-input-text"
                          type="text"
                          placeholder="Question..."
                          value={question.question}
                          onChange={(e) => {
                            const updatedQuestions = [...questions];
                            updatedQuestions[index].question = e.target.value;
                            setQuestions(updatedQuestions);
                          }}
                        />
                        <div>
                          {badges.map((badgeId) => (
                            <button
                              className="badge-button"
                              key={badgeId}
                              onClick={() => handleBadgeChange(badgeId, index)}
                            >
                              <BadgeIcon
                                fill={
                                  question.badge === badgeId
                                    ? badgeId
                                    : inactiveBadge
                                }
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <hr className="line" />
                      <div>
                        <form>
                          {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                              <input
                                type="radio"
                                id={`option${optionIndex}`}
                                name={`radio${index}`}
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  outline: "none",
                                  border: "0.5px solid #6d6b6b",
                                  display: "block",
                                  alignItems: "center",
                                  marginTop: "20px",
                                }}
                                defaultChecked={optionIndex === 0}
                                onChange={() => {
                                  handleRadioChange(index, optionIndex)
                                }}
                              />
                              <input
                                className="question-option-text"
                                style={{ marginTop: "-22px" }}
                                type="text"
                                placeholder={`Option ${optionIndex + 1}`}
                                value={option}
                                onChange={(e) => {
                                  const updatedQuestions = [...questions];
                                  updatedQuestions[index].options[optionIndex] =
                                    e.target.value;
                                  setQuestions(updatedQuestions);
                                }}
                              />
                            </div>
                          ))}
                        </form>
                      </div>
                    </div>
                  ) : (
                    <div className="short-answer-box">
                      <div style={{ display: "flex" }}>
                        <input
                          className="question-input-text"
                          type="text"
                          placeholder="Question..."
                          value={question.question}
                          onChange={(e) => {
                            const updatedQuestions = [...questions];
                            updatedQuestions[index].question = e.target.value;
                            setQuestions(updatedQuestions);
                          }}
                        />
                        <div>
                          {badges.map((badgeId) => (
                            <button
                              className="badge-button"
                              key={badgeId}
                              onClick={() => handleBadgeChange(badgeId, index)}
                            >
                              <BadgeIcon
                                fill={
                                  question.badge === badgeId
                                    ? badgeId
                                    : inactiveBadge
                                }
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <hr className="line" />
                      <div>
                        <input
                          className="sa-option-text"
                          type="text"
                          placeholder="Type your answer..."
                          value={question.answer}
                          onChange={(e) => {
                            const updatedQuestions = [...questions];
                            updatedQuestions[index].answer = e.target.value;
                            setQuestions(updatedQuestions);
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))
            }
          </div>

          <div id="buttons">
            <div
              id="form-clones"
              style={{ display: "block", paddingBottom: "20px" }}
            >
              <div className="add-mcq-question-box" onClick={duplicateMCQ}>
                <text className="add-question-button">
                  + Add multiple choice question
                </text>
              </div>
              <div
                className="add-mcq-question-box"
                onClick={duplicateShortAnswer}
              >
                <text className="add-question-button">
                  + Add short answer question
                </text>
              </div>
            </div>
          </div>

          <div>
            <button
              className="test-next-button"
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
