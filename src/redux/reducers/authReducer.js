import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/authActions"

const initstate = {user : JSON.parse(localStorage.getItem("user")) || null}

export const authReducer = (state= initstate, action) => {
    console.log(state, action, "authreducer")
switch(action.type) {
    case LOGIN_SUCCESS:
        localStorage.setItem("user",JSON.stringify(action.payload))
        return {...state, user: action.payload}
    case LOGOUT_SUCCESS:
        localStorage.removeItem("user")
        return {...state, user: null}
    default:
        return state
}
}
