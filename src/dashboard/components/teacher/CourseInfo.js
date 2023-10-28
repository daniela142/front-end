import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../style/teachercourses.css";
import "../../style/courseinfo.css";
import CourseIcon from "../../svg/courseIcon";
import ArrowIcon from "../../svg/arrowIcon";


export const CourseInfo = ({ viewType, courseName, courseDesc }) => {
    const navigate = useNavigate();
    const url = useLocation().pathname;
    const course = {
        name: courseName,
        desc: courseDesc,
    };

    return (
    <div>
        <div className="info-box">
            <div>
                <CourseIcon />
            </div>
            <div>
                <h1 className="course-title">{course.name}</h1>
                <p>{course.desc}</p>
                <div className="course-btn-group" style={{display: viewType === 'teacher' ? 'flex' : 'none'}}>
                    <button className="course-btn-clear"><span>View Tests</span><ArrowIcon /></button>
                    <button className="course-btn-fill" onClick={() => navigate(`${url}/createtest`)}><span>Create Test</span><ArrowIcon /></button>
                </div>
            </div>
        </div>
    </div>
    );
}