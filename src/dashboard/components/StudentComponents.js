import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/dashboard.css";
import { SearchBar } from "./searchbar";
import { CourseBox } from "./courses";
import { TeacherBox } from "./teacherBox";

export const StudentComponents = _ => {
    return (
        <div>
            <div className="courses-box" >
                <CourseBox />
            </div>
        </div>       
    );
}