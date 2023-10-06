import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/studentcourses.css";
import ArrowIcon from "../../svg/arrowIcon";

export const PastExams = () => {

    const exams = [
        {
            name: 'Past Exam 1',
            id: '123',
            score: 12,
            maxScore: 20,
        },
        {
            name: 'Past Exam 2',
            id: '456',
            score: 18,
            maxScore: 20,
        },
        {
            name: 'Past Exam 3',
            id: '789',
            score: 15,
            maxScore: 20,
        },
    ];

    return (
        <div className="exam-history-box">
            <h1>Exam History</h1>
            <ul className='exam-history'>
                {exams.map((exam, index) => {
                    return (<li className="exam-history-item"><span>{exam.name}</span><span>{`${exam.score}/${exam.maxScore}`}</span></li>);
                })}
            </ul>
        </div>
    );
}