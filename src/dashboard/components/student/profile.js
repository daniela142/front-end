import React from "react";
import "../../style/profile.css";
import "../../fonts/font.css";

import ProfileIcon from "../../svg/profileIcon";

export const Profile = () => {
    return (
        <div className="profile-box">
            <label className="course-title">Profile</label>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <ProfileIcon />
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <label className="user-name">Daniel Abdelsayed</label>
            </div>
        </div>
    );
}