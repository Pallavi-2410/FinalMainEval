const initstate = {user : JSON.parse(localStorage.getItem("user")) || null}

export const authReducer = (state= initstate, action) => {
switch(action.type) {
    default:
        return state
}
}
