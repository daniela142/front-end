import React, { useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "../../style/dashboard.css";
import "../../style/studentcourses.css";
import {CourseInfo} from "../teacher/CourseInfo";
import {ExamList} from "./ExamList";
import {PastExams} from "./PastExams";
import {ExamMenu} from "./ExamMenu";
import {Exam} from "./Exam";

export const StudentCourses = () => {

    // 0 = view course, 1 = do test
    let mode = 0;
    const url = useLocation().pathname;

    if (url.includes("menu")) mode = 1;
    if (url.includes("start")) mode = 2;

    const courses = () => {
        return (
            <div className="courses-container-s">
                <CourseInfo viewType={"student"} />
                <div className="exams-container">
                    <ExamList />
                    <PastExams />
                </div>
            </div>
        )
    }

    return (
        <div>
            {mode === 0 && courses() }
            {mode === 1 && <ExamMenu /> }
            {mode === 2 && <Exam /> }
        </div>
    );
}