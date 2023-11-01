import React, { useState, useEffect, useRef } from "react";
import "../style/profiledropdown.css";
import DownArrow from "../svg/downArrow";
import LogOut from "../svg/logOut";

import { useNavigate } from "react-router-dom";
import LoadingCircle from "../../account/components/LoadingCircle";

export const ProfileMenu = () => {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("User"));
  // const user = useLoginCheck();

  const [dropdownStatus, setDropdownStatus] = useState(false);
  let menuref = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuref.current.contains(e.target)) {
        setDropdownStatus(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  function LogoutButton() {
    return (
      <li className="dropdownItem" onClick={() => logout()}>
        <div className="child">
          <LogOut />
        </div>
        <a className="child"> Log out</a>
      </li>
    );
  }

  const logout = async () => {
    setIsLoading(true);
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
      localStorage.removeItem("Classrooms");
      localStorage.removeItem("Tests");
      navigate("/signIn");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? <LoadingCircle /> : "" }
      <div
        ref={menuref}
        className="menu-trigger"
        onClick={() => {
          setDropdownStatus(!dropdownStatus);
        }}
      >
        <div className="profile-in">{user && user.firstname.charAt(0)}</div>
        <div>
          <h4 className="profile-name">
            {user && user.firstname} {user && user.lastname.charAt(0)}{" "}
          </h4>
          <h6 className="profile-type"> {user && (user.usertype.charAt(0).toUpperCase() + user.usertype.slice(1))}</h6>
        </div>
        <button className="profile-arrow">
          <DownArrow />
        </button>
      </div>

      <div
        className={`dropdown-menu ${dropdownStatus ? "active" : "inactive"}`}
      >
        <LogoutButton />
      </div>
    </div>
  );
};
