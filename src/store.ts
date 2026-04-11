import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './slices/search'

export const store = configureStore({
    reducer:{
        searchKey:searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


