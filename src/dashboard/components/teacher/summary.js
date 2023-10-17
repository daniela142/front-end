import React from "react";
import "../../style/courses.css";
import "../../fonts/font.css";
import "../../style/summary.css"
import { Line } from "rc-progress";
import CourseIcon from "../../svg/courseIcon";

export const Summary = () => {

    return (
        <div className="summary-box">
            <div className="summary-title">Course Progress</div>
        
           <div> 
            <div className="course-row">
            <CourseIcon/>
            <text style={{display:"inline-flex", marginLeft:"20px"}}>Web Design</text>
            <Line percent={87} strokeWidth={3} strokeColor="#5855D6" style={{ marginTop:"30px", marginLeft:"-90px", height:"13px", display:"inline-flex"}}/> <text style={{position:"relative", marginTop:"25px", marginLeft:"10px"}}>87%</text>
            </div>
            <div className="course-row">
            <CourseIcon/>
            <text style={{display:"inline-flex", marginLeft:"20px"}}>Development Basics</text>
            <Line percent={63} strokeWidth={3} strokeColor="#5855D6" style={{ marginTop:"30px", marginLeft:"-148px", height:"13px", display:"inline-flex"}}/> <text style={{position:"relative", marginTop:"25px", marginLeft:"10px"}}>63%</text>
            </div>
            <div className="course-row">
            <CourseIcon/>
            <text style={{display:"inline-flex", marginLeft:"20px"}}>Data with Python</text>
            <Line percent={71} strokeWidth={3} strokeColor="#5855D6" style={{ marginTop:"30px", marginLeft:"-125px", height:"13px", display:"inline-flex"}}/> <text style={{position:"relative", marginTop:"25px", marginLeft:"10px"}}>71%</text>
            </div>
            
           </div>
           
        </div>
    );
}