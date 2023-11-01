import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/profile.css";
import "../../fonts/font.css";

import BadgeIcon from "../../svg/badgeIcon";

export const Profile = () => {
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("User"));

    const badges = ["#518CFE", "#6D5ED2", "#5ED278", "#F4694C", "#F4D94C"];
    const [selectedBadge, setSelectedBadge] = useState("#518CFE");

    useEffect(() => {
        switch (true) {
            case user.elo >= 0 && user.elo <= 200:
                setSelectedBadge(badges[0]);
                break;
            case user.elo >= 201 && user.elo <= 400:
                setSelectedBadge(badges[1]);
                break;
            case user.elo >= 401 && user.elo <= 600:
                setSelectedBadge(badges[2]);
                break;
            case user.elo >= 601 && user.elo <= 800:
                setSelectedBadge(badges[3]);
                break;
            case user.elo >= 801 && user.elo <= 1000:
                setSelectedBadge(badges[4]);
                break;
            default:
                setSelectedBadge(badges[0]);
                break;
        }
    }, []);

    return (
        <div className="profile-box">
            <div className="profile-wrapper">
                <BadgeIcon width={150} height={150} fill={selectedBadge} />
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