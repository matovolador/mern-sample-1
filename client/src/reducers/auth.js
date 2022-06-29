/* eslint-disable import/no-anonymous-default-export */
import { AUTH, LOGOUT } from "../constants/actionTypes";
export default (state = {authData:null },action) => {
    switch (action.type) {
        case AUTH:
            console.log(action?.data)
            return state;
        default:
            return state;
    }

}