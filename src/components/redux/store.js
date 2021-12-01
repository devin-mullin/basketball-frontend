import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlice'
import teamReducer from './teamSlice'
import myTeamReducer from './myTeamSlice'

export default configureStore({
    reducer: {
        players: playerReducer,
        teams: teamReducer,
        myTeams: myTeamReducer
    }
})
