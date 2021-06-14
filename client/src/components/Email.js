import React from 'react';

const Email = () => {
    return (
        <div className="letter-image">
            <div className="animated-mail">
                <div className="animated-mail__back-fold"></div>
                <div className="animated-mail__letter">
                    <div className="animated-mail__letter-border"></div>
                    <div className="animated-mail__letter-title"></div>
                    <div className="animated-mail__letter-context"></div>
                    <div className="animated-mail__letter-stamp">
                        <div className="animated-mail__letter-stamp-inner"></div>
                    </div>
                </div>
                <div className="animated-mail__top-fold"></div>
                <div className="animated-mail__body"></div>
                <div className="animated-mail__left-fold"></div>
            </div>
            <div className="shadow"></div>
        </div>
    );
};

export default Email;