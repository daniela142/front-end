import React from "react";
import "../../style/dashboard.css";
import "../../style/studentcourses.css";
import {CourseInfo} from "../teacher/CourseInfo";
import {ExamList} from "./ExamList";
import {PastExams} from "./PastExams";
import { OverallMark } from "./OverallMark";

export const StudentCourses = () => {
    return (
        <div className="courses-container-s">
            <CourseInfo viewType={"student"} />
            <div className="exams-container">
                <ExamList />
                <PastExams />
            </div>
            <OverallMark />
        </div>
    );
}