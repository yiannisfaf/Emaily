import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


//takes 1)initial reducer and 2)initial state of app 3)middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//Takes two arguements, 1. route component 2. where we want to render route component
ReactDOM.render(
    //provider reads changes in store and updates components(App) with new state
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

