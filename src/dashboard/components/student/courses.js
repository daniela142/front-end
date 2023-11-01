import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../style/dashboard.css";
import "../../style/courses.css";
import "../../fonts/font.css";

import { CourseItem } from "./courseItem";

export const Courses = () => {
    const [classrooms, setClassrooms] = useState(null);
    const [generate, setGenerate] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const classroomsData = JSON.parse(localStorage.getItem("Classrooms"));
            setClassrooms(classroomsData);
        }

        fetchData()
    }, [generate]);

    if (!classrooms) {
        setTimeout(() => {
            setGenerate("hi");
        }, 2000);
    }

    return (
        <div className="courses-box">
            <label className="course-title">Courses</label>

            <div className="headings">
                <label className="course-h1">Course name</label>
                <div className="course-h2">
                    <label className="course-h3">Tests remaining</label>
                    <label className="course-h3">Skill Ranking</label>
                    <label className="course-h3">Badge</label>
                </div>
            </div>

            <div className="scroll-box">
                <div className="scroll-box__wrapper">
                    <div className="scroll-box__container" role="list">
                        {classrooms !== null ? (
                            classrooms.map((course, index) => (
                                <CourseItem title={course.name} key={index} />
                            ))
                        ) : (
                                <div className="exam-list-text"><span className="loading-text">Loading Courses...</span></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
