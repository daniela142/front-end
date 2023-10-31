import React, { useState } from "react";
import "../../style/dashboard.css";
import "../../style/teachercreatetest.css";
import "../../fonts/font.css";
import BadgeIcon from "../../svg/badgeIcon";

export const TeacherCreateTest = () => {
  const [questions, setQuestions] = useState([
    {
      type: "mcq",
      question: "",
      options: ["", "", "", ""],
      badge: null,
    },
    {
      type: "shortAnswer",
      question: "",
      answer: "",
      badge: null,
    },
  ]);

  const [showDatetimeBox, setShowDatetimeBox] = useState(false);

  const badges = ["#518CFE", "#6D5ED2", "#5ED278", "#F4694C", "#F4D94C"];
  const inactiveBadge = "#ABABAB";

  const handleBadgeChange = (buttonId, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].badge = buttonId;
    setQuestions(updatedQuestions);
  };

  const resetMCQ = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      type: "mcq",
      question: "",
      options: ["", "", "", ""],
      badge: null,
    };
    setQuestions(updatedQuestions);
  };

  const resetShortAnswer = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      type: "shortAnswer",
      question: "",
      answer: "",
      badge: null,
    };
    setQuestions(updatedQuestions);
  };

  const duplicateMCQ = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.push({
      type: "mcq",
      question: "",
      options: ["", "", "", ""],
      badge: null,
    });
    setQuestions(updatedQuestions);
  };

  const duplicateShortAnswer = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.push({
      type: "shortAnswer",
      question: "",
      answer: "",
      badge: null,
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      {!showDatetimeBox ? (
        <div>
          <div id="questions-container">
            <div className="create-test-title">
              <input
                className="input-text"
                type="text"
                placeholder="Title of Quiz"
              />
            </div>
            {questions.map((question, index) => (
              <div key={index}>
                {question.type === "mcq" ? (
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
            ))}
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
              onClick={() => setShowDatetimeBox(true)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {showDatetimeBox ? (
        <div>
          <div>
           <div className="date-time-box">
            <form style={{display:"grid"}}>
              <label className="date-time-input-label">Exam Date:
              <input 
              className="date-time-input-box"
              style={{width:"40%"}}
              type="date">
              </input>

              <hr className="line" />

              </label>
              <label className="date-time-input-label">Exam Time:
              <input 
              className="date-time-input-box"
              style={{width:"40%"}}
              type="time">
              </input>
              </label>

              <hr className="line" />

              <label className="date-time-input-label">Time Limit:
              <input 
              className="date-time-input-box"
              style={{width:"40%"}}
              type="text"
              placeholder="60 Minutes">
              </input>
              </label>
            </form>
           </div>
            <button className="test-publish-button">Publish</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
