import React from 'react';
import "../../style/exammenu.css";
import {useLocation, useNavigate} from "react-router-dom";


export const ExamMenu = () => {

    const navigate = useNavigate();
    const url = useLocation().pathname;
    

  return (
    <div className="exam-container">
      <div className="exam-details-box">
        <h2>Introduction to Development Basics</h2>
        <div className="exam-info">
          <div><strong>Time Limit</strong>30 mins</div>
          <div><strong>Questions</strong>20</div>
          <div><strong>Date</strong>13/10/23</div>
          <div><strong>Time</strong>6:00PM</div>
        </div>
      </div>
      <div className="exam-rules">
        <h3>Examination Rules</h3>
          <p>In accordance with the rules for online examinations, students are required to maintain a silent, distraction-free environment throughout the entire duration of the exam. Communication with others via chat or messaging apps is strictly prohibited. Monitoring through cameras and microphones may be in place to ensure compliance, and any breach of these rules may result in disqualification. Accessing unauthorised resources, including external websites and notes, is not permitted. Students must also adhere to the specified time limits for each section of the exam. These regulations are enforced to uphold the integrity and fairness of online assessments and to ensure equitable opportunities for all participants.</p>
        </div>
        <button className="start-exam-button" onClick={() => navigate(url.replace('menu', 'start'))}>Start Exam</button>
      </div>      


  );
}

