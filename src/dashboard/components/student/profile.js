import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/profile.css";
import "../../fonts/font.css";

import ProfileIcon from "../../svg/profileIcon";

export const Profile = () => {
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("User"));

    return (
        <div className="profile-box">
            <label className="course-title">Profile</label>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <ProfileIcon />
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <label className="user-name">{user && user.firstname} {user && user.lastname}</label>
            </div>
        </div>
    );
}