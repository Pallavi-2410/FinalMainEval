import { FETCH_BOOKS_REQUEST } from "../actions/bookActions";

const initstate = {books: []};

export const bookReducer = (state = initstate, action) => {
    switch(action.type){
        case FETCH_BOOKS_REQUEST :
            return {...state, books:action.payload}
        default:
            return state
    }

}
