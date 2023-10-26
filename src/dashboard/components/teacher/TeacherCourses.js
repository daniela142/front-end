import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../style/dashboard.css";
import "../../style/teachercourses.css"
import {CourseInfo} from "./CourseInfo";
import {StudentList} from "./StudentList";
import {TeacherCreateTest} from "./TeacherCreateTest";
import { RankingSystem } from "./rankingSystem";

export const TeacherCourses = () => {

    // 0 = main courses page, 1 = create test, 2 = view test
    let mode = 0;
    const url = useLocation().pathname;

    if (url.includes("createtest")) mode = 1;

    const courses = () => {
        return (

        <div>
            {/* <div className="courses-container-t">
                <div className="courses-info">
                    <CourseInfo viewType={"teacher"}/>
                </div>
                <StudentList />
            </div> */}

            <div className="courses-container-t">
                <div className="courses-info">
                    <CourseInfo viewType={"teacher"}/>
                    <RankingSystem/>
                </div>
                <StudentList />
            </div>

            {/* <div>
                <RankingSystem/>
            </div> */}
            </div>
        );
    }

    return (
        <div>
            {mode === 0 && courses() }
            {mode === 1 && <TeacherCreateTest /> }
        </div>
    )
}