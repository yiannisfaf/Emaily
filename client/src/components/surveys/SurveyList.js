import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="row">
                    <div className="survey-card" key={survey._id}>
                        <span className="survey-card__title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="survey-card__date">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                        <div className="survey-card__results">
                            <a className="yes" href="#">Yes: {survey.yes}</a>
                            <a className="no" href="#">No: {survey.no}</a>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div class="section-surveys">
                {this.renderSurveys()}
            </div>
        );
    }
}

//From our gloabl state object we want to return an object of surveys which contains the surveys of a user
function mapStateToProps({ surveys }) {
    return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);