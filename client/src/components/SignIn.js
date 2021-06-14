import React from 'react';

import auth from '../img/auth.svg';

const SignIn = () => {
    return (
        //signin - To get started it's as easy as signing in with your Google account.
        <div className="section-signin">
            <div className="signin__content">
                <img 
                    className="signin__image"
                    src={auth} 
                    alt="auth" 
                    id="auth" 
                />
                <div className="signin__container">
                    <div className="signin__header">
                        Sign In
                    </div>
                    <div className="signin__details">
                        To get started it's as easy as signing in with your Google account.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;