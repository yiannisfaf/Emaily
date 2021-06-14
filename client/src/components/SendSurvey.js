import React from 'react';

import send from '../img/envelope.svg';

const SendSurvey = () => {
    return (
        <div className="section-send">
            <div className="send__content">
                <div className="send__container">
                    <div className="send__header">
                        Send Out A Survey
                    </div>
                    <div className="send__details">
                        You're done! Your survey has been sent to your users and now you can sit back and relax!
                    </div>
                </div>
                <img 
                    className="send__image"
                    src={send} 
                    alt="send" 
                    id="send" 
                />
            </div>
        </div>
    );
};

export default SendSurvey;


//Send out survey - You're done! Your survey has been sent to your users and now you can sit back and relax!
