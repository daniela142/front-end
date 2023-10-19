import React, { useState, useRef } from 'react';
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

    const courses = [
        {
            name: 'Web Design',
            id: '123',
        },
        {
            name: 'Development Basics',
            id: '456',
        },
        {
            name: 'Data With Python',
            id: '789',
        },
    ];

    function expandCourses() {
        // console.log(coursesMenu.current.style);
        if (!coursesMenu.current.style.maxHeight) {
            coursesMenu.current.style.maxHeight = coursesMenu.current.scrollHeight + 'px';
        }
        else {
            coursesMenu.current.style.maxHeight = "";
        }
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
                            return (<li className={'course-item ' + (location.includes(`/${course.id}`) ? 'course-active' : '')} onClick={() => navigate(`/courses/${course.id}`)}>
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