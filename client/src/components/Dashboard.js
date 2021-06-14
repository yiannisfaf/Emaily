import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div className="btn-floating">
                <Link to="/surveys/new" className="btn-floating__button">
                    <div className="btn-floating__icon">&#43;</div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;