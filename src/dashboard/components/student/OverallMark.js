import React from "react";
import "../../style/courseinfo.css";
import BadgeIcon from "../../svg/badgeIcon";


export const OverallMark = () => {

    return (
    <div className="mark-box">
        <div className="mark-box-wrapper">
          <BadgeIcon width={75} height={75} fill={"orange"}/>
          <div className="mark-wrapper">
            <div>Overall Course Mark</div>
            <div>---</div>
            <div>15/20</div>
          </div>
        </div>
    </div>
    );
}