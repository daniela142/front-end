import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";
import "../../style/studentcourses.css";
import {CourseInfo} from "../teacher/CourseInfo";
import {ExamList} from "./ExamList";
import {PastExams} from "./PastExams";

export const StudentCourses = () => {
    return (
        <div className="courses-container-s">
            <CourseInfo viewType={"student"} />
            <div className="exams-container">
                <ExamList />
                <PastExams />
            </div>
        </div>
    );
}