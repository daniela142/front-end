import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";
import {Courses} from "./courses";
import {Assessments} from "./assessments";
import {Profile} from "./profile";

export const StudentComponents = _ => {
    return (
        <div style={{display: "flex", alignItems: "center" }}>
            <div>
                <Courses />
                <Assessments />
            </div>
            <Profile/>
        </div>       
    );
}