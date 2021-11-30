import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './Players/playerSlice'

export default configureStore({
    reducer: {
        player: playerReducer
    }
})