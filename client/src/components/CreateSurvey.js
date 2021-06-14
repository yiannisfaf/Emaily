import React from 'react';

import create from '../img/survey.svg';

const CreateSurvey = () => {
    return (
        //create survey - Create a survey that you wish to send out to your mailing list.
        <div className="section-create">
            <div className="create__content">
                <div className="create__container">
                    <div className="create__header">
                        Create a Survey
                    </div>
                    <div className="create__details">
                        Create a survey that you wish to send out to your mailing list.
                    </div>
                </div>
                <img 
                    className="create__image"
                    src={create} 
                    alt="auth" 
                    id="auth" 
                />
            </div>
        </div>
    );
};

export default CreateSurvey;