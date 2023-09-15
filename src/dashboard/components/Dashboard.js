import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/dashboard.css";
import { SearchBar } from "./searchbar";

export const Dashboard = _ => {
    let navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("User"));

    useEffect(() => {
        if (user === null) {
            localStorage.removeItem("User");
            navigate("/signIn");
        }
    }, []);

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
        <div className="background">
            <div className="sidebar">
                    <button
                        className="next-button"
                        onClick={() => logout()}>
                        Sign out
                    </button>
                </div>
            <div className="search">
                    <SearchBar/>
            </div>
            <div>
            
            </div>
            
             </div>
    );
}