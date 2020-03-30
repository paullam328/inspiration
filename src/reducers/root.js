import { combineReducers } from 'redux';
import userCredentialSyncReducer from './userCredentialSync';

const rootReducer = combineReducers({
    userCredentialSync: userCredentialSyncReducer
});

export default rootReducer;