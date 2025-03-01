import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authreducer";
import { bookReducer } from "./reducers/bookReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer,
    book: bookReducer
})

export const store =createStore(rootReducer, applyMiddleware(thunk))