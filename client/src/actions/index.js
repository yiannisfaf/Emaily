import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

//action creators:

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

//Stripe API Token handler function
export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');

    //payload is response from backend
    dispatch({ type: FETCH_USER, payload: res.data })
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
};