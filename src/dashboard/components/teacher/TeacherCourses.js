import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";
import "../../style/teachercourses.css"
import {CourseInfo} from "./CourseInfo";
import {StudentList} from "./StudentList";

export const TeacherCourses = () => {

    return (
        <div className="courses-container-t">
            <div className="courses-info">
                <CourseInfo viewType={"teacher"}/>
            </div>
            <StudentList />
        </div>
    );
}