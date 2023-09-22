import React, { useState, useEffect, useRef } from "react";
import "../style/profiledropdown.css";
import DownArrow from "../svg/downArrow";
import LogOut from "../svg/logOut";

import { useNavigate } from "react-router-dom";

export const ProfileMenu = () => {
    let navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("User"));

    const [dropdownStatus, setDropdownStatus] = useState(false);
    let menuref = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuref.current.contains(e.target)) {
                setDropdownStatus(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    function LogoutButton() {
        return (
            <li className='dropdownItem' onClick={() => logout()}>
                <div className='child'>
                    <LogOut />
                </div>
                <a className='child'> Log out</a>
            </li>
        )
    }

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
        <div className="menu-container" ref={menuref}>
            <div className="menu-trigger" onClick={() => { setDropdownStatus(!dropdownStatus) }}>
                <div className="profile-in">{user.firstname.charAt(0)}</div>

                <h4 className="profile-name"> {user.firstname} {user.lastname.charAt(0)} </h4>
                <h6 className="profile-type"> Student</h6>

                <button className="profile-arrow">
                    <DownArrow />
                </button>
            </div>

            <div className={`dropdown-menu ${dropdownStatus ? 'active' : 'inactive'}`}>
                <LogoutButton />
            </div>
        </div>
    );
};
