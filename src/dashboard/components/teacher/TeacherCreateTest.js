import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";
import "../../style/teachercreatetest.css";
import "../../fonts/font.css";
import BadgeIcon from "../../svg/badgeIcon";

export const TeacherCreateTest = () => {

  const [activeBadge, setActiveBadge] = useState(null);
  const badges = ['#518CFE', '#6D5ED2', '#5ED278', '#F4694C', '#F4D94C'];
  const inactiveBadge = '#ABABAB'

  const handleBadgeChange = (buttonId) => {
    setActiveBadge(buttonId);
  };

  function disableRadio(radioButton) {
    // Disable the radio button
    radioButton.disabled = true;
  }

  function duplicateMCQ() {
    // Find the element you want to duplicate by its ID
    var originalComponent = document.getElementById("mcq-form");

    // Create a new element (a clone) based on the original component
    var newComponent = originalComponent.cloneNode(true);

    // Update the ID or other attributes of the new component if necessary
    // newComponent.id = "newComponentID";

    // Append the new component to the parent container
    var container = document.getElementById("questions-container");
    container.appendChild(newComponent);

    //duplicateButtons();
  }

  function duplicateShortAnswer() {
    // Find the element you want to duplicate by its ID
    var originalComponent = document.getElementById("sa-form");

    // Create a new element (a clone) based on the original component
    var newComponent = originalComponent.cloneNode(true);

    // Update the ID or other attributes of the new component if necessary
    // newComponent.id = "newComponentID";

    // Append the new component to the parent container
    var container = document.getElementById("questions-container");
    container.appendChild(newComponent);

    // duplicateButtons();
  }

  // function duplicateButtons() {
  //     // Find the element you want to duplicate by its ID
  //     var originalComponent = document.getElementById("q-add-button1");

  //     // Create a new element (a clone) based on the original component
  //     var newComponent = originalComponent.cloneNode(true);

  //     // Update the ID or other attributes of the new component if necessary
  //     // newComponent.id = "newComponentID";

  //     // Append the new component to the parent container
  //     var container = document.getElementById("buttons");
  //     container.appendChild(newComponent);
  // }


  return (
    <div>
      <div className="background-style" id="questions-container">
        <div className="create-test-title">
          <input
            className="input-text"
            type="text"
            placeholder="Title of Quiz"
          ></input>
        </div>
        <div className="mcq-box" id="mcq-form">
          <div style={{ display: "flex" }}>
            <input
              className="question-input-text"
              type="text"
              placeholder="Question..."
            ></input>

            <div>
              {badges.map((badgeId) => (
                <button
                  className="badge-button"
                  key={badgeId}
                  // className={activeBadge === badgeId ? 'active' : ''}
                  onClick={() => handleBadgeChange(badgeId)}
                >
                  <BadgeIcon fill={activeBadge === badgeId ? badgeId : inactiveBadge} />
                </button>
              ))}
            </div>
          </div>
          <hr className="line"></hr>
          <div>
            <form>
              <input
                type="radio"
                id="option1"
                name="newradio"
                style={{
                  width: "18px",
                  height: "18px",
                  outline: "none",
                  border: "0.5px solid #6d6b6b;",
                  display: "block",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              ></input>
              <input
                className="question-option-text"
                style={{ marginTop: "-22px" }}
                type="text"
                placeholder="Option 1"
              ></input>

              <input
                type="radio"
                id="option2"
                name="newradio"
                style={{
                  width: "18px",
                  height: "18px",
                  outline: "none",
                  border: "0.5px solid #6d6b6b;",
                  display: "block",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              ></input>
              <input
                className="question-option-text"
                style={{ marginTop: "-22px" }}
                type="text"
                placeholder="Option 2"
              ></input>

              <input
                type="radio"
                id="option3"
                name="newradio"
                style={{
                  width: "18px",
                  height: "18px",
                  outline: "none",
                  border: "0.5px solid #6d6b6b;",
                  display: "block",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              ></input>
              <input
                className="question-option-text"
                style={{ marginTop: "-22px" }}
                type="text"
                placeholder="Option 3"
              ></input>

              <input
                type="radio"
                id="option4"
                name="newradio"
                style={{
                  width: "18px",
                  height: "18px",
                  outline: "none",
                  border: "0.5px solid #6d6b6b;",
                  display: "block",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              ></input>
              <input
                className="question-option-text"
                style={{ marginTop: "-22px" }}
                type="text"
                placeholder="Option 4"
              ></input>
            </form>
          </div>
        </div>

        <div className="short-answer-box" id="sa-form">
          <input
            className="question-input-text"
            type="text"
            placeholder="Question..."
          ></input>
          <button className="badge-button">
            <BadgeIcon />
          </button>
          <button className="badge-button">
            <BadgeIcon />
          </button>
          <button className="badge-button">
            <BadgeIcon />
          </button>
          <button className="badge-button">
            <BadgeIcon />
          </button>
          <button className="badge-button">
            <BadgeIcon />
          </button>
          <hr className="line"></hr>
          <div>
            <input
              className="sa-option-text"
              type="text"
              placeholder="Type your answer..."
            ></input>
          </div>
        </div>
      </div>

      <div id="buttons">
        <div id="form-clones" style={{ display: "block", paddingBottom: "50px" }}>
          <div className="add-mcq-question-box" onClick={duplicateMCQ}>
            <text className="add-question-button">
              + Add multiple choice question
            </text>
          </div>
          <div className="add-mcq-question-box" onClick={duplicateShortAnswer}>
            <text className="add-question-button">
              + Add short answer question
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};
