import { combineReducers } from 'redux';
import userReducer from './userSlice.jsx';
import authReducer from './authSlice';
const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

export default rootReducer;