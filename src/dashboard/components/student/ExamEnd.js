import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/exam.css";
import ExamIcon from "../../svg/examIcon";
import BadgeIcon from "../../svg/badgeIcon";
import BackArrow from "../../svg/backArrow";

export const ExamEnd = ({totalMarks}) => {

    return (
        <div className="end-container">
            <div className="end-info-box">
                <div>
                <ExamIcon />
                    <h2>Congratulations, you completed your exam!</h2>
                    <p>Please return to your course page to begin any other assessments remaining.</p>
                </div>
            </div>
            <div className="end-results-box">
                Result: ?/{totalMarks}
                <div className='rank-update-svg'>
                    <BadgeIcon fill='#ABABAB' />
                </div>
            </div>
            <div>
                <button className="return-course-button"> <BackArrow/> Return to Course Page</button>
            </div>
        </div>
    );
}