import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import Icon from "../svg/icon";
import "../style/sidebar.css";

// icons
import DashboardIcon from "../svg/sidebar/dashboardIcon";
import CourseIcon from "../svg/sidebar/coursesIcon";
import CalendarIcon from "../svg/sidebar/calendarIcon";
import GradesIcon from "../svg/sidebar/gradesIcon";
import SettingsIcon from "../svg/sidebar/settingsIcon";
import ThinArrowIcon from "../svg/sidebar/thinArrowIcon";
import DownArrowIcon from "../svg/sidebar/downArrowIcon";

export const SideBar = () => {
    let navigate = useNavigate();
    const location = useLocation().pathname;

    const coursesMenu = useRef(null);

    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    const user = JSON.parse(localStorage.getItem("User"));
    const classrooms = JSON.parse(localStorage.getItem('Classrooms')) || [];
    const tests = JSON.parse(localStorage.getItem('Tests')) || [];

    const getTest = async (test_id) => {
        try {
            const response = await axios.get(
                global.route + `/api/tests/${test_id}`,
                { withCredentials: true }
            );
            
            // tests.push(response.data);
            // localStorage.setItem('Tests', JSON.stringify(tests));

            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const getClassroom = async (classroom_id) => {
        try {
            const response = await axios.get(
                global.route + `/api/classrooms/${classroom_id}`,
                { withCredentials: true }
            );

            // classrooms.push(response.data);
            // localStorage.setItem('Classrooms', JSON.stringify(classrooms));

            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    useEffect(() => {
        async function fetchData() {
            if (user != null) {
                const classroomPromises = user.classroom_ids.map(classroom_id =>
                    getClassroom(classroom_id)
                );

                try {
                    const classroomsArr = await Promise.all(classroomPromises);
                    setCourses(classroomsArr);

                    let temp = [];
                    for (let i = 0; i < classroomsArr.length; i++) {
                        for (let j = 0; j < classroomsArr[i].test_ids.length; j++) {
                            temp.push(classroomsArr[i].test_ids[j]);
                        }
                    }

                    const testPromises = temp.map(test_id =>
                        getTest(test_id)
                    );

                    const testsArr = await Promise.all(testPromises)
                    setExams(testsArr);

                    localStorage.removeItem('Classrooms');
                    localStorage.setItem('Classrooms', JSON.stringify(classroomsArr));
                    
                    // localStorage.removeItem('Tests');
                    localStorage.setItem('Tests', JSON.stringify(testsArr));
                } catch (error) {
                    console.error(error);
                }
            }
        }
        fetchData();
    }, []);


    function expandCourses() {
        if (!coursesMenu.current.style.maxHeight) {
            coursesMenu.current.style.maxHeight = coursesMenu.current.scrollHeight + 'px';
        }
        else {
            coursesMenu.current.style.maxHeight = "";
        }
    }

    const handleClick = async (_id) => {
        navigate(`/courses/${_id}`);
        // window.location.reload(false);
    }

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <Icon />
                <div>
                    <label className="sidebar-h">
                        Académy
                    </label>
                </div>
            </div>

            <ul className="sidebar-list">
                <li className={'sidebar-item ' + (location.includes('/dashboard') ? 'sidebar-active' : '')} onClick={() => navigate('/dashboard')}>
                    <DashboardIcon />
                    <span>Dashboard</span>
                </li>
                <li className={'sidebar-courses ' + (location.includes('/courses') ? 'sidebar-active' : '')}>
                    <div className="courses-header" onClick={expandCourses}>
                        <div className="header-text">
                            <CourseIcon />
                            <span>Courses</span>
                        </div>
                        <div className="header-arrow">
                            <DownArrowIcon />
                        </div>
                    </div>
                    <ul className='courses-menu' ref={coursesMenu}>
                        {courses.map((course, index) => {
                            return (<li className={'course-item ' + (location.includes(`courses/${course._id}`) ? 'course-active' : '')} onClick={() => handleClick(course._id)}>
                                <span>{course.name}</span>
                                <div>
                                    <ThinArrowIcon />
                                </div>
                                {/*<ThinArrowIcon />*/}
                                {/*<div style={{visibility: 'hidden'}}>*/}
                                {/*    <ThinArrowIcon />*/}
                                {/*</div>*/}
                            </li>);
                        })}
                    </ul>
                </li>
                {/*<li className={'sidebar-item ' + (location.includes('/calendar') ? 'sidebar-active' : '')}>*/}
                {/*    <CalendarIcon />*/}
                {/*    <span>Calendar</span>*/}
                {/*</li>*/}
                <li className={'sidebar-item ' + (location.includes('/grades') ? 'sidebar-active' : '')} onClick={() => navigate(`/grades`)}>
                    <GradesIcon />
                    <span>Grades</span>
                </li>
                <li className={'sidebar-item ' + (location.includes('/settings') ? 'sidebar-active' : '')} onClick={() => navigate(`/settings`)}>
                    <SettingsIcon />
                    <span>Settings</span>
                </li>
            </ul>

            {/*<button*/}
            {/*    className="next-button"*/}
            {/*    onClick={() => logout()}>*/}
            {/*    Sign out*/}
            {/*</button>*/}
        </div>
    );
}