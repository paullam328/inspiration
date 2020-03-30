import * as types from "../actions/types";

// state is: token

const initialToken = null;

const userCredentialSyncReducer = (state = initialToken, action) => {
    switch (action.type) {
        case types.LOG_OUT: {
            state = "";
        }
        break;
        case types.LOG_IN:  {
            //TODO: Generate jwt token here!
            state = "random Token";
        }
        break;
        case types.SYNC_CREDENTIALS: {
            state;
        }
        break;
    }
    return state; 
}

export default userCredentialSyncReducer;