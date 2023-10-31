import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import LoadingCircle from "../LoadingCircle";

import "../../style/dashboard.css";
import "../../style/teachercourses.css"

import { CourseInfo } from "./CourseInfo";
import { StudentList } from "./StudentList";
import { TeacherCreateTest } from "./TeacherCreateTest";

import { RankingSystem } from "./rankingSystem";

export const TeacherCourses = ({ id }) => {
    const [course, setCourse] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getClassroom = async (classroom_id) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                global.route + `/api/classrooms/${classroom_id}`,
                { withCredentials: true }
            );
            setIsLoading(false);
            return response.data;
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            return null;
        }
    }

    useEffect(() => {
        async function fetchData() {
            setCourse(await getClassroom(id));
        }
        fetchData();
    }, [id]);

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
                        {isLoading ? <LoadingCircle /> : ""}
                        <CourseInfo viewType={"teacher"} courseName={course.name} courseDesc={course.description} />
                        <RankingSystem />
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
        <div className="courses-container-s">
            {isLoading ? <LoadingCircle /> : ""}
            {courses()}
        </div>
    )
}