import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../style/studentcourses.css";
import ArrowIcon from "../../svg/arrowIcon";
import axios from "axios";

export const ExamList = ({ testIds }) => {
    const [tests, setTests] = useState([]);

    // 1 = started loading; 2 = finished loading, tests found; 3 = finished loading, no tests
    const [testsStatus, setTestsStatus] = useState(0);

    const navigate = useNavigate();
    const url = useLocation().pathname;

    const getTest = async (test_id) => {
        try {
            const response = await axios.get(
                global.route + `/api/tests/${test_id}`,
                { withCredentials: true }
            );
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    useEffect(() => {
        async function fetchData() {
            setTestsStatus(1);
            let testsArr = [];

            if (testIds && (Object.keys(testIds[0]).length !== 0)) { // Check if testIds is defined and has length
                for (let i = 0; i < testIds.length; i++) {
                    testsArr.push(await getTest(testIds[i]));
                }
                setTestsStatus(2);
            }
            else {
                if (testIds !== undefined) {
                    setTestsStatus(3);
                }
            }

            setTests(testsArr);
        }
        fetchData();
    }, [testIds]);

    return (
        <div className="exam-list-box">
            <h1>Examinations</h1>
            { testsStatus === 1 && <div className="exam-list-text"><span className="loading-text">Loading Exams...</span></div> }
            { testsStatus === 2 &&
                <ul className='exam-list'>
                    {tests.map((test, index) => {
                        return (<li className="exam-list-item" onClick={() => navigate(`${url}/tests/${test?._id}/menu`)}>{test?.name}<ArrowIcon /></li>);
                    })}
                </ul>
            }
            { testsStatus === 3 && <div className="exam-list-text"><span className="loading-text">You have no upcoming exams!</span></div> }
        </div>
    );
}
