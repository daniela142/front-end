import React from "react";
import "../style/courses.css";
import "../fonts/font.css";

export const CourseBox = () => {
    return(
        <div >
                <div>
                <h2>Courses</h2>
                </div>
                <div className="course-headings">
                <p>Course Name
                <ul>
                    <li>Web Design</li>
                    <li>Development Basics</li>
                    <li>Data with Python</li>
                </ul>
                </p>
                <p>Tests Remaining
                <ul style={{fontFamily:"MuseoModerno"}}>
                    <li>2</li>
                    <li>1</li>
                    <li>3</li>
                </ul>
                </p>
                <p>Ranking
                  <ul style={{fontFamily:"MuseoModerno"}}>  
                    <li>12</li>
                    <li>5</li>
                    <li>30</li>
                </ul>
                </p>
                <p>Average
                <ul style={{fontFamily:"MuseoModerno"}}>  
                    <li>85%</li>
                    <li>63%</li>
                    <li>20%</li>
                </ul>
                </p>
                </div>
             </div>   
    );
}