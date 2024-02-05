import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/BooksSlice";
const store = configureStore({
    reducer:{
        bookReducer: bookReducer,
    }
})
export default store;