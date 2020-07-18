import { FETCH_USER } from '../actions/types';

//make sure authReducer returns either null (initialState) if nothing happens, false (|| false)
//if request is done and user is not logged in or action.payload (user model) if user is logged in.
export default function (state = null, action) {
    //console.log(action);
    switch (action.type) {
        case FETCH_USER:
            //action.payload is the user model (googleID and mongoDB ID)
            return action.payload || false;
        default:
            return state;
    }
}