import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "../../style/studentcourses.css";
import ArrowIcon from "../../svg/arrowIcon";

export const ExamList = () => {

    const navigate = useNavigate();
    const url = useLocation().pathname;

    const exams = [
        {
            name: 'Introduction to Development Basics',
            id: '123',
        },
        {
            name: 'Development Basics Exam 2',
            id: '456',
        },
        {
            name: 'Development Basics Final Exam',
            id: '789',
        },
    ];

    return (
        <div className="exam-list-box">
            <h1>Examinations</h1>
            <ul className='exam-list'>
                {exams.map((exam, index) => {
                    return (<li className="exam-list-item" onClick={() => navigate(`${url}/exam/${exam.id}/menu`)}>{exam.name}<ArrowIcon /></li>);
                })}
            </ul>
        </div>
    );
}