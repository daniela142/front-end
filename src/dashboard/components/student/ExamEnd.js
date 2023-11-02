import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../../style/exam.css";
import ExamIcon from "../../svg/examIcon";
import BadgeIcon from "../../svg/badgeIcon";
import LoadingCircle from "../LoadingCircle";
import BackArrow from "../../svg/backArrow";

export const ExamEnd = ({marksArr, eloArr, totalMarks}) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const user = JSON.parse(localStorage.getItem("User"));

    let tempElo;

    const [eloGained, setEloGained] = useState();
    const [eloColour, setEloColour] = useState("#008000")

    const badges = ["#518CFE", "#6D5ED2", "#5ED278", "#F4694C", "#F4D94C"];
    const [selectedBadge, setSelectedBadge] = useState("#518CFE");

    const updateElo = async(elo, questionElo, answeredCorrect) => {
        try {

            const response = await axios.put(
                global.route + `/api/users/${user._id}`,
                {
                    elo: elo,
                    questionElo: questionElo,
                    answeredCorrect: answeredCorrect,
                },
                { withCredentials: true }
            );

            const eloDifference = Math.abs(response.data.elo - tempElo);
            setEloGained(eloDifference);
            setEloColour(user.elo >= tempElo ? "#008000" : "#880808");

            localStorage.setItem("User", JSON.stringify(response.data));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    }

    useEffect(() => {
        async function getElo() {
            // do something with marksArr here
            // can also be converted to a number if you don't care about which specific questions the student got right:
            // marksArr.filter(val => val === true).length

            tempElo = user?.elo

            setEloGained(0);

            await marksArr.map((mark, index) => {
                updateElo(user.elo, eloArr[index], marksArr[index]);
            })

            switch (true) {
                case user.elo >= 0 && user.elo <= 200:
                    setSelectedBadge(badges[0]);
                    break;
                case user.elo >= 201 && user.elo <= 400:
                    setSelectedBadge(badges[1]);
                    break;
                case user.elo >= 401 && user.elo <= 600:
                    setSelectedBadge(badges[2]);
                    break;
                case user.elo >= 601 && user.elo <= 800:
                    setSelectedBadge(badges[3]);
                    break;
                case user.elo >= 801 && user.elo <= 1000:
                    setSelectedBadge(badges[4]);
                    break;
                default:
                    setSelectedBadge(badges[0]);
                    break;
            }
        }
        getElo();
    }, [])

    return (
        <div className="end-container">
            {isLoading ? <LoadingCircle /> : ""}
            <div className="end-info-box">
                <div>
                <ExamIcon />
                    <h2>Congratulations, you completed your exam!</h2>
                    <p>Please return to your course page to begin any other assessments remaining.</p>
                </div>
            </div>
            <div className="end-results-box">
                Result: {marksArr.filter(val => val === true).length}/{totalMarks}
                <div className='rank-update-svg'>
                    <BadgeIcon fill={selectedBadge} />
                </div>
                <text style={{color:eloColour}}>+ {eloGained}</text>
            </div>
            <div>
                <button className="return-course-button" onClick={() => navigate("/dashboard")}> <BackArrow/> Return to Home</button>
            </div>
        </div>
    );
}