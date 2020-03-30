import * as types from "./types"

export function logIn() {
    console.log("Redux: user has logInED");
    return{
        type: types.LOG_IN
    }
}

export function logOut() {
    return{
        type: types.LOG_OUT
    }
}

export function syncCredentials() {
    return{
        type: types.SYNC_CREDENTIALS
    }
}