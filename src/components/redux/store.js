import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlice'
import teamReducer from './teamSlice'
import myTeamReducer from './myTeamSlice'
import myTeamPlayerReducer from './myTeamPlayerSlice'
import { reducer as searchReducer, reduxSearch } from 'redux-search'

export default configureStore({
    reducer: {
        players: playerReducer,
        teams: teamReducer,
        myTeams: myTeamReducer,
        myTeamPlayers: myTeamPlayerReducer,
        search: searchReducer
    }
})

