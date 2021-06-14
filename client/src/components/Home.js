import React from 'react';

import Header from './Header';
import Hero from './Hero';
import SignIn from './SignIn';
import CreateSurvey from './CreateSurvey';
import AddTokens from './AddTokens';
import SendSurvey from './SendSurvey';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <SignIn />
            <CreateSurvey />
            <AddTokens />
            <SendSurvey />
            <Footer />
        </div>
    );
};

export default Home;