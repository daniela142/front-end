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

    const handleKeypress = e => {
        if(e.key === "Enter"){
            SignIn();
        }
    };

    return(
        <div className="background">
            <div className="primary-box">
                <div className="title"><h1><Icon/> Académy</h1></div>
                    <div className="user-authentication-input">
                        <label html="email">Email Address/Username</label>
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
                            onChange={(e) => setPassword(e.target.value)} 
                            onKeyDown={handleKeypress}/>
                    </div>
                        <button 
                            style={{cursor: "pointer"}}
                            className="sign-in-button"
                            onSubmit={(e) => handleSubmit(e)}
                            onClick={(e) => handleSubmit(e)}>
                            Sign In
                        </button>
                    
                    <div className='sign-up-text'>
                        <p>Don't have an account? <text style={{color: "#3592c1", textDecoration: "underline", cursor: "pointer"}} onClick ={(e) => navigate("/signUp", {replace: true})}>Sign Up</text> </p>
                    </div>
            </div>
        </div>
    );

}