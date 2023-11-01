import React, { useEffect, useState } from 'react';
import "../../style/exammenu.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

import LoadingCircle from "../LoadingCircle";
import BadgesRow from "../../svg/badgesRow";

export const ExamMenu = ({id_exam}) => {
  const [test, setTest] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const url = useLocation().pathname;

  const getTest = async (test_id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        global.route + `/api/tests/${test_id}`,
        { withCredentials: true }
      );
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    async function fetchData() {
      setTest(await getTest(id_exam));
    }
    fetchData();
  }, []);

  return (
    <div className="exam-container">
      {isLoading ? <LoadingCircle /> : ""}
      <div className="exam-details-box">
        <h2>{test?.name}</h2>
        <div className="exam-info">
          <div><strong>Time Limit</strong>30 mins</div>
          <div><strong>Questions</strong>20</div>
          <div><strong>Date</strong>13/10/23</div>
          <div><strong>Time</strong>6:00PM</div>
        </div>
      </div>
      <div className="exam-rules">
        <h3>Examination Rules</h3>
        <p>In accordance with the rules for online examinations, students are required to maintain a silent, distraction-free environment throughout the entire duration of the exam. Communication with others via chat or messaging apps is strictly prohibited. Monitoring through cameras and microphones may be in place to ensure compliance, and any breach of these rules may result in disqualification. Accessing unauthorised resources, including external websites and notes, is not permitted. Students must also adhere to the specified time limits for each section of the exam. These regulations are enforced to uphold the integrity and fairness of online assessments and to ensure equitable opportunities for all participants.</p>
      </div>
      <div className="ranking-system">
        <h3>Ranking System</h3>
        <div className="badge-group">
          <BadgesRow/>
        </div>
      </div>
      <button className="start-exam-button" onClick={() => navigate(url.replace('menu', 'start'))}>Start Exam</button>
    </div>


  );
}

