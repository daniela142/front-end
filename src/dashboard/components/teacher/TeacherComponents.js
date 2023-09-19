import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/dashboard.css";
import { TeacherBox } from "./summary";

export const TeacherComponents = _ => {
    return (
        <div>
            <div className="courses-box" >
                <TeacherBox />
            </div>
        </div>       
    );
}