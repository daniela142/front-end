import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/dashboard.css";
import { SearchBar } from "./searchbar";
import { ProfileMenu } from './profiledropdown';

import { StudentComponents } from "./student/StudentComponents";
import { TeacherComponents } from "./teacher/TeacherComponents";
import { SideBar } from "./sidebar";
import {TeacherCourses} from "./teacher/TeacherCourses";
import {StudentCourses} from "./student/StudentCourses";

import { ExamMenu } from "./student/ExamMenu";
import { Exam } from "./student/Exam";

export const Dashboard = ({page}) => {
    const { id } = useParams();

    let navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("User"));

    useEffect(() => {
        if (user === null) {
            localStorage.removeItem("User");
            navigate("/signIn");
        }
    }, []);

    function loadComponents() {
        if (user && user.usertype == "teacher") {
            if (page === "dashboard") {
                return <TeacherComponents/>
            }
            if (page === "courses") {
                return <TeacherCourses/>
            }
            if (page === "grades") {
                return null
            }
            if (page === "settings") {
                return null
            }
            return <TeacherComponents/>
            // return <TeacherCourses />
        } else if (user && user.usertype == "admin") {
            return <TeacherComponents/>
        } else {
            if (page === 'dashboard') {
                return <StudentComponents/>
            }
            if (page === 'courses') {
                return <StudentCourses id={id}/>
            }
            if (page === "grades") {
                return null
            }
            if (page === "settings") {
                return null
            }
            if (page === "exam-menu") {
                return <ExamMenu id={id}/>
            }
            if (page === "exam-start") {
                return <Exam id={id}/>
            }
        }
    }

    return (
        <div className="background">
            <SideBar/>

            <div style={{ width: "100%", marginLeft: "250px" }}>        
                <div className="header">
                    <SearchBar />
                    <ProfileMenu />
                </div>
                {
                    page === "exam-start" ? '' : <h1 className="name-header"> Hello, {user && user.firstname}</h1>
                }
                <div>
                    {
                        loadComponents()
                    }
                </div>
            </div>
        </div>
    );
}