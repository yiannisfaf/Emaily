import React from 'react';

import card from '../img/card.svg';

const AddTokens = () => {
    return (
        //Add tokens - To send out surveys you need tokens. You can buy these from our store.
        <div className="section-tokens">
            <div className="tokens__content">
                <img 
                    className="tokens__image"
                    src={card} 
                    alt="card" 
                    id="card" 
                />
                <div className="tokens__container">
                    <div className="tokens__header">
                        Add Tokens
                    </div>
                    <div className="tokens__details">
                        To send out surveys you need tokens. You can buy these from our store.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTokens;