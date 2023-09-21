import React, { useState } from "react";
import "../style/profiledropdown.css";
import DownArrow from "../svg/downArrow";
import LogOut from "../svg/logOut";

import { useNavigate } from "react-router-dom";

export const ProfileMenu = () => {
    let navigate = useNavigate(); 

    const [dropdownStatus, setDropdownStatus] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState("");

    const profileDropwdownAction = (_) => {
        setDropdownStatus(!dropdownStatus);
    };

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

    const user = JSON.parse(localStorage.getItem("User"));
    return (
        <div className="profile-header">
            <div className="profile-in">{user.firstname.charAt(0)}</div>
            <div>
                <h4
                    style={{
                        color: "#0A043C",
                        marginLeft: "50px",
                        marginTop: "3px",
                        marginBottom: "0",
        
                    }}
                >
                    {user.firstname} {user.lastname.charAt(0)} 
                </h4>
                
                <h6
                    style={{
                        color: "#0A043C",
                        marginLeft: "50px",
                        marginTop: "2px",
                        marginBottom: "0",
                        fontWeight: "500px",
                    }}
                >
                    Student 
                </h6>
                <div className="down-arrow-position"><button className="down-arrow-button" onClick={profileDropwdownAction}><DownArrow />
                
                
                { dropdownStatus &&
                // Render the dropdown menu content if the menu status is open
                <div className="profile-dropdown-menu"> 
                <button className="log-out-button" onClick={() => logout()}> <LogOut/> Log Out</button>
                </div>}
                
                </button> </div>

               
            </div>
        </div>
    );
};