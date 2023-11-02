import React from "react";
import "../../style/assessments.css";
import "../../fonts/font.css";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const AssessmentItem = ({title, datetime, time_limit}) => {
    const date = new Date(datetime);
    const dateEnd = new Date(datetime)
    
    dateEnd.setMinutes(dateEnd.getMinutes() + time_limit);

    const day = date.getDate();
    const dayName = date.toLocaleString('en-US', { weekday: 'long' })
    const month = date.toLocaleString('en-US', { month: 'short' })

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';

    const hoursEnd = dateEnd.getHours();
    const minutesEnd = dateEnd.getMinutes();
    const amOrPmEnd = hoursEnd >= 12 ? 'pm' : 'am';

    const hours12 = hours % 12 || 12;
    const hours12End = hoursEnd % 12 || 12;

    return (
        <div>
            <div className="assessment-item">
                <div className="date-container">
                    <div style={{ textAlign: "center", height: "30%", marginBottom:"5px" }}>
                        <label className="date-1"> {dayName} </label>
                    </div>
                    <div style={{ textAlign: "center", height: "40%" , marginBottom:"3px" }}>
                        <label className="date-2"> {day} </label>
                    </div>
                    <div style={{ textAlign: "center", height: "30%", marginTop: "-4px" }}>
                        <label className="date-1"> {month.toUpperCase()} </label>
                    </div>
                </div>

                <div className="class-container">
                    <div style={{ marginLeft: "6.54px", marginTop: "-2px" }}>
                        <div>
                            <label className="class-heading"> {title} </label>
                        </div>
                        <div style={{ marginTop: "-2px" }}>
                            <label className="class-sub"> Exam </label>
                        </div>
                    </div>

                    <div className="time-container">
                        <label className="time-heading">{`${hours12}:${minutes}${amOrPm}`}-{`${hours12End}:${minutesEnd}${amOrPmEnd}`} </label>
                    </div>
                </div>
            </div>

            <div style={{width:"706px", height:"2px", marginTop:"19px", backgroundColor: "#EEEEEE"}}/>
        </div>
    );
}