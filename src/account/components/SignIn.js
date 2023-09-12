import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../fonts/font.css"
import "../style/sign-in.css";
import Icon from "../svg/icon";

export const SignIn = _ => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(global.route + `/api/users/auth`, {
                email: email,
                password: password
            }, { withCredentials: true });
            localStorage.setItem("User", JSON.stringify(response.data));
            navigate("/", { replace: true });
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className="background">
            <div className="primary-box">
                <div className="title"><h1><Icon/> Académy</h1></div>
                    <div className="user-authentication-input">
                        <label html="email">Email Address</label>
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@gmail.com"/>
                    </div>
                    <div className="user-authentication-input">
                        <label html="password">Password</label>
                        <input 
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button 
                            className="sign-in-button"
                            onSubmit={(e) => handleSubmit(e)}
                            onClick={(e) => handleSubmit(e)}>
                            Log In
                        </button>
                    </div>
            </div>
        </div>
    );

}