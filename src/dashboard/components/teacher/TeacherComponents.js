import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";

import { Summary } from "./summary";
import { TeacherAssessments } from "../teacher/TeacherAssessments";
import { Profile } from "../student/profile";
import { Schedule } from "./schedule";

export const TeacherComponents = _ => {
    return (
        <div style={{display:"flex", alignItems: "center" }}>
            <div>
                <Summary />
                <div><TeacherAssessments /></div>
            </div>
            <Schedule/>
        </div>   
    );
}