import React from "react";
import "../../style/profile.css";
import "../../fonts/font.css";

import BadgeIcon from "../../svg/badgeIcon";

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem("User"));

    return (
        <div className="profile-box">
            <div className="profile-wrapper">
                <BadgeIcon width={150} height={150} fill={"orange"}/>
                <div className="profile-name">{user.firstname} {user.lastname}</div>
                <div className="profile-metric">
                    <div>Lowest</div>
                    <div>---</div>
                    <div>167</div>
                </div>
                <div className="profile-metric">
                    <div>Highest</div>
                    <div>---</div>
                    <div>700</div>
                </div>
                <div className="profile-metric">
                    <div>Average</div>
                    <div>---</div>
                    <div>420</div>
                </div>
            </div>
        </div>
    );
}