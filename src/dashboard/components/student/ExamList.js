import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../style/studentcourses.css";
import ArrowIcon from "../../svg/arrowIcon";
import axios from "axios";

export const ExamList = ({ testIds }) => {
    const [tests, setTests] = useState([]);

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
            let testsArr = [];

            if (testIds && testIds.length) { // Check if testIds is defined and has length
                for (let i = 0; i < testIds.length; i++) {
                    testsArr.push(await getTest(testIds[i]));
                }
            }

            setTests(testsArr);
        }
        fetchData();
    }, [testIds]);

    return (
        <div className="exam-list-box">
            <h1>Examinations</h1>
            <ul className='exam-list'>
                {tests.map((test, index) => {
                    return (<li className="exam-list-item" onClick={() => navigate(`/courses/tests/${test?._id}/menu`)}>{test?.name}<ArrowIcon /></li>);
                })}
            </ul>
        </div>
    );
}
