import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/teachercourses.css";
import "../../style/courseinfo.css";
import InfoIcon from "../../svg/infoIcon";
import ArrowIcon from "../../svg/arrowIcon";

export const CourseInfo = ({viewType}) => {

    const course = {
        name: 'Development Basics',
        desc: `Laravel is a PHP based web framework for building high-end web applications using its significant and graceful syntaxes. It comes with a robust collection of tools and provides application architecture. Laravel is a PHP based web framework for building high-end web applications using its significant and graceful syntaxes. It comes with a robust collection of tools and provides application architecture. Laravel is a PHP based web framework for building high-end web applications using its significant and graceful syntaxes. It comes with a robust collection of tools and provides application architecture. Laravel is a PHP based web framework for building high-end web applications using its significant and graceful syntaxes. It comes with a robust collection of tools and provides application architecture.`,
    };

    return (
        <div className="info-box">
            <div>
                <InfoIcon />
            </div>
            <div>
                <h1 className="course-title">{course.name}</h1>
                <p>{course.desc}</p>
                <div className="course-btn-group" style={{display: viewType === 'teacher' ? 'flex' : 'none'}}>
                    <button className="course-btn-clear"><span>View Tests</span><ArrowIcon /></button>
                    <button className="course-btn-fill">Create Test<ArrowIcon /></button>
                </div>
            </div>
        </div>
    );
}