import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../style/dashboard.css"
import "../../style/assessments.css";
import "../../fonts/font.css";

import { AssessmentItem } from './assessmentItem';

export const Assessments = () => {
    const [tests, setTests] = useState(null);
    const [generate, setGenerate] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const testsData = JSON.parse(localStorage.getItem("Tests"));
            setTests(testsData);
        }

        fetchData()
    }, [generate]);

    if (!tests) {
        setTimeout(() => {
            setGenerate("hi");
        }, 2000);
    }

    return (
        <div className="assessments-box">
            <label className="course-title">Assessments</label>

            <div>
                <label className="assessment-h1">Date</label>
                <label className="assessment-h2">Class</label>
                <label className="assessment-h3">Time</label>
            </div>

            <div className="scroll-box">
                <div className="scroll-box__wrapper">
                    
                    <div className="scroll-box__container" role="list">
                        {tests !== null ? (
                            tests.map((test, index) => (
                                <AssessmentItem key={index} title={test?.name} datetime={test?.datetime} time_limit={test?.time_limit} />
                            ))
                        ) : (
                            <div className="exam-list-text"><span className="loading-text">Loading Assessments...</span></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}