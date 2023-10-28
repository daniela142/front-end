import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../style/dashboard.css";
import "../../style/studentcourses.css";

import {CourseInfo} from "../teacher/CourseInfo";
import {ExamList} from "./ExamList";
import {PastExams} from "./PastExams";

import LoadingCircle from "../LoadingCircle";

export const StudentCourses = ({id}) => {
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

    return (
        <div className="courses-container-s">
            {isLoading ? <LoadingCircle /> : ""}
            <CourseInfo viewType={"student"} courseName={course.name} courseDesc={course.description} />
            <div className="exams-container">
                <ExamList testIds={course?.test_ids} />
                <PastExams />
            </div>
        </div>
    );
}