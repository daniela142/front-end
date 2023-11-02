import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../../style/exam.css";
import ExamIcon from "../../svg/examIcon";
import BadgeIcon from "../../svg/badgeIcon";

export const ExamEnd = ({marksArr, totalMarks}) => {

    useEffect(() => {
        async function getElo() {
            // do something with marksArr here
            // can also be converted to a number if you don't care about which specific questions the student got right:
            // marksArr.filter(val => val === true).length
        }
    }, [])

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
                Result: {marksArr.filter(val => val === true).length}/{totalMarks}
                <div className='rank-update-svg'>
                    <BadgeIcon fill='#ABABAB' />
                </div>
            </div>
        </div>
    );
}