import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: { searchKey: '', page: 0 },
    reducers: {
        set_search_key: (state, action) => {
            state.searchKey = action.payload
        },
        next_page: (state) => {
            state.page += 1
        }
    },
})

export const { set_search_key } = searchSlice.actions
export const { next_page } = searchSlice.actions

export default searchSlice.reducer