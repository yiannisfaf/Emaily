import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ label, name }) => {
        return (
            <div className="form" key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <div className="form__buttons">
                <button className="form__buttons__cancel" onClick={onCancel}>
                    Back
                </button>
                <button onClick={() => submitSurvey(formValues, history)} className="form__buttons__submit">
                    Send Survey
                </button>
            </div>
        </div>
    );
};

//state arguement is the object of the current state
function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}


export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));