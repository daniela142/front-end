import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";
import "../../style/teachercreatetest.css";
import "../../fonts/font.css"

export const TeacherCreateTest = () => {

    return (
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
                <div>
                <input type="radio" style={{width:"18px", height:"18px", outline:"none", border:"0.5px solid #6d6b6b;", display:"block", alignItems:"center", marginTop:"20px"}}></input>
                <input className="question-option-text"
                        style={{marginTop:"-22px"}}
                        type="text"
                        placeholder="Option 1"></input>
                </div>
                <div>
                <input type="radio" style={{width:"18px", height:"18px", outline:"none", border:"0.5px solid #6d6b6b;", display:"block", alignItems:"center", marginTop:"20px"}}></input>
                <input className="question-option-text"
                        style={{marginTop:"-22px"}}
                        type="text"
                        placeholder="Option 2"></input>
                </div>
                <div>
                <input type="radio" style={{width:"18px", height:"18px", outline:"none", border:"0.5px solid #6d6b6b;", display:"block", alignItems:"center", marginTop:"20px"}}></input>
                <input className="question-option-text"
                        style={{marginTop:"-22px"}}
                        type="text"
                        placeholder="Option 3"></input>
                </div>
                <div>
                <input type="radio" style={{width:"18px", height:"18px", outline:"none", border:"0.5px solid #6d6b6b;", display:"block", alignItems:"center", marginTop:"20px"}}></input>
                <input className="question-option-text"
                        style={{marginTop:"-22px"}}
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
        <div style={{display:"block"}}>
        <div className="add-mcq-question-box">
            <button className="add-question-button"> + Add multiple choice question</button>
        </div>
        <div className="add-mcq-question-box">
            <button className="add-question-button"> + Add short answer question</button>
        </div>
        </div>
        
    </div> 
    );
}