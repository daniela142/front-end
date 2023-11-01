import React from "react";
import "../../style/courses.css";
import "../../fonts/font.css";

import CourseIcon from "../../svg/courseIcon";
import BadgeIcon from "../../svg/badgeIcon";

export const CourseItem = ({title}) => {
  return (
    <div className="course-item">
      <div className="course-icon">
        <CourseIcon />
        <label className="course-name">{title}</label>
      </div>

      <div className="course-value">
        <label className="course-num">2</label>
        <label className="course-num">235</label>
        <div className="course-badge">
          <BadgeIcon fill="purple" width="45" height="45"/>
        </div>
      </div>
    </div>
  );
};
