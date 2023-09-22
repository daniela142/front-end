import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/dashboard.css";
import { SearchBar } from "./searchbar";

import { StudentComponents } from "./student/StudentComponents";
import { TeacherComponents } from "./teacher/TeacherComponents";
import { SideBar } from "./sidebar";

export const Dashboard = _ => {
    let navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("User"));

    useEffect(() => {
        if (user === null) {
            localStorage.removeItem("User");
            navigate("/signIn");
        }
    }, []);

    function loadComponents() {
        if (user.usertype == "teacher") {
            return <TeacherComponents/>
        } else if (user.usertype == "admin") { 
            return <TeacherComponents/>
        } else {
            return <StudentComponents/>
        }
    }

    return (
        <div className="background">
            <SideBar/>

            <div style={{ width: "100%", marginLeft: "250px" }}>
                <div className="search">
                    <SearchBar />

                    <h1 className="name-header"> Hello, {user.firstname}</h1>
                </div>

                <div>
                    {
                        loadComponents()
                    }
                </div>
            </div>
        </div>
    );
}