import React, { useState } from "react";
import "../style/profiledropdown.css";

export const ProfileMenu = () => {
    const [dropdownStatus, setDropdownStatus] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState("");

    const profileDropwdownAction = (_) => {
        setDropdownStatus(!dropdownStatus);
    };
    const user = JSON.parse(localStorage.getItem("User"));
    return (
        <div className="profile-header">
            <div className="profile-in">{user.firstname.charAt(0)}</div>
            <div>
                <h4
                    style={{
                        color: "#0A043C",
                        marginLeft: "20px",
                        marginTop: "3px",
                        marginBottom: "0",
                    }}
                >
                    {user.firstname} {user.lastname.charAt(0)}
                </h4>
                <h6
                    style={{
                        color: "#0A043C",
                        marginLeft: "20px",
                        marginTop: "2px",
                        marginBottom: "0",
                        fontWeight: "500px",
                    }}
                >
                    Student
                </h6>
            </div>
        </div>
    );
};