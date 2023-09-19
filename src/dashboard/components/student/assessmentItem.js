import React from "react";
import "../../style/courses.css";
import "../../fonts/font.css";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const AssessmentItem = () => {
    return (
        <div>
            <div className="assessment-item">
                <div >
                    <div style={{ textAlign: "center", height: "30%" }}>
                        <label className="date-1"> Tomorrow </label>
                    </div>
                    <div style={{ textAlign: "center", height: "40%" }}>
                        <label className="date-2"> 09 </label>
                    </div>
                    <div style={{ textAlign: "center", height: "30%", marginTop: "-4px" }}>
                        <label className="date-1"> APRIL </label>
                    </div>
                </div>

                <div className="class-container">
                    <div style={{ marginLeft: "16.54px", marginTop: "-2px" }}>
                        <div>
                            <label className="class-heading"> Database and Information Systems </label>
                        </div>
                        <div style={{ marginTop: "-2px" }}>
                            <label className="class-sub"> Master of Computer Science </label>
                        </div>
                    </div>

                    <div className="time-container">
                        <label className="time-heading">8:30am-1:00pm</label>
                    </div>
                </div>
            </div>

            <div style={{width:"706px", height:"2px", marginTop:"19px", backgroundColor: "#EEEEEE"}}/>
        </div>
    );
}