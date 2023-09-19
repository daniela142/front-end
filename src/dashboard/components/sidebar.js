import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Icon from "../svg/icon";
import "../style/sidebar.css";

// icons
import DashboardIcon from "../svg/sidebar/dashboardIcon";
import CourseIcon from "../svg/sidebar/coursesIcon";
import CalendarIcon from "../svg/sidebar/calendarIcon";
import GradesIcon from "../svg/sidebar/gradesIcon";
import SettingsIcon from "../svg/sidebar/settingsIcon";

export const SideBar = () => {
    let navigate = useNavigate();

    const logout = async () => {
        try {
            const response = await fetch(global.route + `/api/users/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            localStorage.removeItem("User");
            navigate("/signIn");
        } catch (err) {
            //console.log(err);
        }
    };

    return (
        <div className="sidebar">
            <div style={{ display: "flex", marginLeft: "29px" }}>
                <Icon />
                <div>
                    <label className="sidebar-h">
                        Académy
                    </label>
                </div>
            </div>

            <div style={{ display: "flex", marginTop: "40px", marginLeft: "37px" }}>
                <DashboardIcon />
                <div className="subh-container">
                    <label className="sidebar-subh">Dashboard</label>
                </div>
            </div>

            <div style={{ display: "flex", marginTop: "35px", marginLeft: "37px" }}>
                <CourseIcon />
                <div className="subh-container">
                    <label className="sidebar-subh">Courses</label>
                </div>
            </div>

            <div style={{ display: "flex", marginTop: "35px", marginLeft: "37px" }}>
                <CalendarIcon />
                <div style={{ marginLeft: "-3px", marginTop: "1px" }}>
                    <label className="sidebar-subh">Calendar</label>
                </div>
            </div>

            <div style={{ display: "flex", marginTop: "35px", marginLeft: "37px" }}>
                <GradesIcon />
                <div style={{ marginLeft: "0px", marginTop: "0px" }}>
                    <label className="sidebar-subh">Grades</label>
                </div>
            </div>

            <div style={{ display: "flex", marginTop: "35px", marginLeft: "37px" }}>
                
                <SettingsIcon />
                <div style={{ marginLeft: "-5px", marginTop: "1px" }}>
                    <label className="sidebar-subh">Settings</label>
                </div>
            </div>

            <button
                className="next-button"
                onClick={() => logout()}>
                Sign out
            </button>
        </div>
    );
}