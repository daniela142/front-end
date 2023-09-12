import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../fonts/font.css"
import "../style/sign-up.css";
import Icon from "../svg/icon";

export const SignUp = _ => {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(global.route + `/api/users`, {
                name: name,
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
            <div className="primary-box-sign-up">
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
                    <div className='user-authentication-input'>
                        <label>Username</label>
                        <input
                            name="username"
                            type="text"/>
                    </div>
                    <div className='user-authentication-input'>
                        <label>First Name</label>
                        <input
                            name="firstname"
                            type="text"/>
                    </div>
                    <div className='user-authentication-input'>
                        <label>Last Name</label>
                        <input
                            name="lastname"
                            type="text"/>
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
                            className="sign-up-button"
                            onSubmit={(e) => handleSubmit(e)}
                            onClick={(e) => handleSubmit(e)}>
                            Sign Up
                        </button>
                    </div>
            </div>
        </div>
    );

}