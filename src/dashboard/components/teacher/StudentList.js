import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/teachercourses.css";
import ProfileIcon from "../../svg/profileIcon";

export const StudentList = () => {

    const students = [
        {
            name: 'Student A',
            id: '123',
        },
        {
            name: 'Student B',
            id: '456',
        },
        {
            name: 'Student C',
            id: '789',
        },
    ];

    return (
        <div className="students-box">
            <h1 className="students-title">Students</h1>
            <ul className='student-list'>
                {students.map((student, index) => {
                    return (<li className="student">{student.name}</li>);
                })}
            </ul>
        </div>
    );
}