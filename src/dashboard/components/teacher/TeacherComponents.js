import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";

import { Summary } from "./summary";
import { Assessments } from "../student/assessments";
import { Profile } from "../student/profile";

export const TeacherComponents = _ => {
    return (
        <div style={{display: "flex", alignItems: "center" }}>
            <div>
                <Summary />
                <Assessments />
            </div>
            <Profile/>
        </div>   
    );
}