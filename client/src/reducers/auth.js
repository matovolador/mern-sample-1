/* eslint-disable import/no-anonymous-default-export */
import { AUTH, LOGOUT } from "../constants/actionTypes";
export default (state = {authData:null },action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            //console.log(action?.data)
            return {...state,authData: action?.data};
        default:
            return state;
    }

}