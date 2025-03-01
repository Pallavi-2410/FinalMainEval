export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOK_FAILURE = "FETCH_BOOK_FAILURE";
export const ADD_BOOK_TO_USER_LIST = "ADD_BOOK_TO_USER_LIST";
export const FETCH_MY_BOOKS = "FETCH_MY_BOOKS";
export const UPDATE_BOOK_STATUS = "UPDATE_BOOK_STATUS";
export const UPDATE_BOOK_RATING = "UPDATE_BOOK_RATING";



export const fetchBooks = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://main-eval-project-default-rtdb.firebaseio.com/books.json`);
        const booksData = response.data;

        console.log(booksData, "books get");
        
        dispatch({ type: FETCH_BOOKS_REQUEST , payload: booksData})
    }catch(error) {
        console.error("Unable to fetch books", error)
    }
}