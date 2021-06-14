//import statements allowed due to Webpack and Babel
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Home from './Home';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Email from './Email';


//called a functional component as it has an arrow function:
class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        AsyncLoading().then(() => this.setState({ loading: false }));
        this.props.fetchUser();
    }
    
    render() {
        const { loading } = this.state;

        if (loading) {
            return <Email />;
        }

        return (
            <BrowserRouter>
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        );
    }
};

function AsyncLoading() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1100));
}

//1. mapStateToProps 2. Action creators
export default connect(null, actions)(App);