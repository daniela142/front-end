import React from "react";
import "../../style/assessments.css";
import "../../fonts/font.css";

import { AssessmentItem } from './assessmentItem';

export const Assessments = () => {
    return (
        <div className="assessments-box">
            <label className="course-title">Assessments</label>

            <div className="headings">
                <label className="assessment-h1">Date</label>
                <label className="assessment-h2">Class</label>
                <label className="assessment-h3">Time</label>
            </div>

            <AssessmentItem/>
            <AssessmentItem/>
        </div>
    );
}