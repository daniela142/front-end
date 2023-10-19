import React from "react";
import "../../style/dashboard.css";
import "../../style/courses.css";
import "../../fonts/font.css";

import { CourseItem } from "./courseItem";

export const Courses = () => {

    return (
        <div className="courses-box">
            <label className="course-title">Courses</label>

            <div className="headings">
                <label className="course-h1">Course name</label>
                <label className="course-h2">Tests remaining</label>
                <label className="course-h3">Ranking</label>
                <label className="course-h4">Grade</label>
                <label className="course-h5">Average</label>
            </div>
            
            

            <div className="scroll-box">
                <div className="scroll-box__wrapper">
                    <div className="scroll-box__container" role="list">
                        <CourseItem />
                        <CourseItem />
                        <CourseItem />
                        <CourseItem />
                        <CourseItem />
                        <CourseItem />
                    </div>
                </div>
            </div>
        </div>
    );
}