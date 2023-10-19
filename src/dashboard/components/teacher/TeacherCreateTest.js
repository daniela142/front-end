import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";
<<<<<<< HEAD
import "../../style/teachercreatetest.css";
import "../../fonts/font.css"
=======
>>>>>>> af1506a2e49d7242c4a675d6fb5dcbf8c29f3f7a

export const TeacherCreateTest = () => {

    return (
<<<<<<< HEAD
       <div>
        <div className="create-test-title">
            <input className="input-text" 
                    type="text"
                    placeholder="Title of Quiz">
            </input>
        </div>
        <div className="mcq-box">
            <div>
            <input className="question-input-text"
                    type="text"
                    placeholder="Question..."> 
            </input>
            </div>
            <hr className="line"></hr>
            <div>
                <div className="option">
                <input className="question-option-text"
                        type="text"
                        placeholder="Option 1"></input>
                </div>
                <div className="option">
                <input className="question-option-text"
                        type="text"
                        placeholder="Option 2"></input>
                </div>
                <div className="option">
                <input className="question-option-text"
                        type="text"
                        placeholder="Option 3"></input>
                </div>
                <div className="option">
                <input className="question-option-text"
                        type="text"
                        placeholder="Option 4"></input>
                </div>
            </div>
        </div>

        <div className="short-answer-box">
            <input className="question-input-text"
                    type="text"
                    placeholder="Question..."></input>
             <hr className="line"></hr>
            <div>
                <input className="sa-option-text"
                    type="text"
                    placeholder="Type your answer...">
                </input>
            </div>              
        </div>
    </div> 
=======
        <div>
        </div>
>>>>>>> af1506a2e49d7242c4a675d6fb5dcbf8c29f3f7a
    );
}