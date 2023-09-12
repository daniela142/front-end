import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            <div className="primary-box">
                <div className="title">
                    <h1>Dashboard page</h1>
                </div>

                <div>
                    <button
                        className="sign-out-button"
                        onClick={() => logout()}>
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
}