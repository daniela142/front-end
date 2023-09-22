import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";
import {CourseInfo} from "./CourseInfo";
import {StudentList} from "./StudentList";

export const TeacherCourses = () => {

    return (
        <div className="courses-container">
            <CourseInfo />
            <StudentList />
        </div>
    );
}