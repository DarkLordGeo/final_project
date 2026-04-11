import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:'searchSlice',
    initialState:{searchKey:''},
    reducers: {
        set_search_key: (state,action) => {
            state.searchKey = action.payload
        }
    },
})

export const {set_search_key} = searchSlice.actions

export default searchSlice.reducer