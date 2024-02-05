import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        {id:1, title: "Love DG", author: "Roman"},
        {id:2, title: " DG Bangla", author: "Roman Sarker"},
    ]
}

 export const booksSlice = createSlice({
    name: "books",
    initialState : initialBooks,
    reducers: {
        showBooks: (state) => state,
    }
})

export const {showBooks} = booksSlice.actions;
export default booksSlice.reducer;