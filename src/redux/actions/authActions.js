import { auth } from "@/firebaseConfig/firebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { authReducer } from "../reducers/authreducer";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

export const login = (email, password) => async(dispatch) => {
    try{
        const loggedUser = await createUserWithEmailAndPassword(auth, email, password);
        const user = loggedUser.user;
        dispatch({type:LOGIN_SUCCESS, payload:user});
    } catch(error) {
        console.error ("Failed login", error)
    }
}
export const logout = () => async (dispatch) => {
    try{
        await signOut(authReducer);
        dispatch({type: LOGOUT_SUCCESS})
    }catch(error) {
        console.error("Failed Logout", error)
    }
}