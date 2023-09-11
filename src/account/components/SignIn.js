//import React, {useEffect, useState} from "react";
import "../fonts/font.css"
import "../style/sign-in.css";
import Icon from "../svg/icon";

export const SignIn = _ => {
    return(
        <div className="background">
            <div className="primary-box">
                <div className="title"><h1><Icon/> Académy</h1></div>
                    <div className="user-authentication-input">
                        <label html="email">Email Address</label>
                        <input type="text" placeholder="johndoe@gmail.com"/>
                    </div>
                    <div className="user-authentication-input">
                        <label html="password">Password</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <button className="sign-in-button">Log In</button>
                    </div>
            </div>
        </div>
    );

}