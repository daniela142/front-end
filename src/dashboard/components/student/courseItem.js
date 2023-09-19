import React from "react";
import "../../style/courses.css";
import "../../fonts/font.css";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import CourseIcon from "../../svg/courseIcon";

export const CourseItem = () => {
    return (
        <div className="course-item">
            <div className="course-icon">
                <div style={{width: "63px", height: "63px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <CourseIcon/>
                </div>
            </div>

            <label className="course-name">Web Design</label>
            <label className="course-tests">1</label>
            <label className="course-ranking">5</label>
            <label className="course-grade">A-</label>
            {/* <label className="course-average">85%</label> */}

            <div style={{
                width: "44px", display: "flex", alignItems: "center"}}>
                <CircularProgressbar 
                    value={66} 
                    text={`${66}%`} 
                    strokeWidth={20}
                    styles={buildStyles({
                        textSize: '20px',
                        fontWeight: 'bold',
                        pathTransitionDuration: 0.5,
                        pathColor: `#48CA5D`,
                        textColor: '#000000',
                        trailColor: '#EBEBEB',
                    })} />
            </div>
            
        </div>
    );
}