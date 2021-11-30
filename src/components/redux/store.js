import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlice'
import teamReducer from './teamSlice'

export default configureStore({
    reducer: {
        players: playerReducer,
        teams: teamReducer
    }
})
