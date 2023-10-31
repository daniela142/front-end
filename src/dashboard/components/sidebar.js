import React, {useState, useRef, useEffect} from 'react';
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

    const user = JSON.parse(localStorage.getItem("User"));

    const getClassroom = async (classroom_id) => {
        try {
            const response = await axios.get(
                global.route + `/api/classrooms/${classroom_id}`,
                { withCredentials: true }
            );
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    useEffect( () => {
        async function fetchData() {
            if (user != null) {
                let classroomsArr = [];
                for(let i =0; i < user.classroom_ids.length; i++) {
                    classroomsArr.push(await getClassroom(user.classroom_ids[i]));
                }
                setCourses(classroomsArr);
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

    const handleClick = async(_id) => {
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