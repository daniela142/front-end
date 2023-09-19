import React from "react";
import "../../style/courses.css";
import "../../fonts/font.css";
import "../../style/summary.css"

export const Summary = () => {

    return (
        <div className="summary-box">
            <label className="summary-title">Dashboard</label>

            <div className="summary-container">
                <div className="active-courses">
                    <div>
                        <label className="title"> Active Courses </label>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "9px" }}>
                        <label className="value"> 2 </label>
                    </div>
                </div>

                <div className="total-courses">
                    <div>
                        <label className="title"> Total Courses </label>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "9px" }}>
                        <label className="value"> 5 </label>
                    </div>
                </div>
            </div>

            <div className="summary-container">
                <div className="total-students">
                    <div>
                        <label className="title"> Total Students </label>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "9px" }}>
                        <label className="value"> 45 </label>
                    </div>
                </div>

                <div className="completed-courses">
                    <div>
                        <label className="title"> Active Courses </label>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "9px" }}>
                        <label className="value"> 2 </label>
                    </div>
                </div>
            </div>
        </div>
    );
}