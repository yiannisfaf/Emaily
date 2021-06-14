import React from 'react';

import background from '../img/nat-10.jpg';

const Landing = () => {
    return (
        <section className="section-landing">
            <img src={background} className="landing__image" alt="emaily background"/>
            <div className="landing__back">
                <h1 className="landing__heading">
                    Welcome to Emaily!
                </h1>
                <div className="landing__text">
                    The service that allows you to collect feedback from your users faster
                </div>
            </div>
        </section>
    );
};

export default Landing;