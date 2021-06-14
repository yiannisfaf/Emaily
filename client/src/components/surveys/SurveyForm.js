import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field 
                    key={name}
                    component={SurveyField} 
                    type="text" 
                    label={label}
                    name={name}
                    />
        });
    }
    
    render() {
        return (
            <div className="row">
                <form className="form" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
                    {this.renderFields()}
                    <div className="form__buttons">
                        <Link to="/surveys" className="form__buttons__cancel">
                            Cancel
                        </Link>
                        <button type="submit" className="form__buttons__submit">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');
    
    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}


//reduxForm is very similar to connect in this way!
//validate runs every time user tries to submit the form
export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);