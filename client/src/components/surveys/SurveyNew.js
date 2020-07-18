//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    //another way of defining state of component with less code:
    state = { showReviewForm: false };

    renderContent() {
        if(this.state.showReviewForm) {
            return <SurveyFormReview
                        onCancel={() => this.setState({ showReviewForm: false })}
                    />;
        }

        return <SurveyForm 
                    onSurveySubmit={() => this.setState({ showReviewForm: true })}
                />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);