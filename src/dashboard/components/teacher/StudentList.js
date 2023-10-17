import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/teachercourses.css";
import ProfileIcon from "../../svg/profileIcon";

const user = JSON.parse(localStorage.getItem("User"));

export const StudentList = () => {

    const students = [
        {
            name: 'John Doe',
            id: '123',
        },
        {
            name: 'Jane Doe',
            id: '456',
        },
        {
            name: 'John Doe',
            id: '789',
        },
    ];

    return (
    <div className="students-box">
            <h1 className="students-title">Students</h1>
       
            <ul className='student-list'>
                {students.map((student, index) => {
                    return (
                    <li className="student">{student.name}</li>);
                })}
            </ul>
        </div>
   
    );
}