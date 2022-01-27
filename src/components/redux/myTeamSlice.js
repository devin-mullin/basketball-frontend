import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMyTeams = createAsyncThunk(
    'user_teams/getMyTeams', 
    async (thunkAPI)=> {
    const response = await fetch('https://nameless-ravine-11360.herokuapp.com/user_teams').then(
    (data)=>data.json()
    )
    return response
}) 

let initialState = []


export const myTeamSlice = createSlice({
    name: 'myTeams',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            state.filter(team => team.id !== action.payload)
            return state
        },
        byId: (state, id) => {
            let myTeam = state.find(myTeam=>myTeam.user_id === id)
            return myTeam
        },
        add_player: (state, action) => {
            let thisState = state[0].find(myTeam=>myTeam.user_id === state.user_id)
            thisState.players.push(action.payload)
            return thisState
        },
        removePlayer: (state, action)=> {
            let thisState = state.find(myTeam=>myTeam.user_id === state.user_id)
            thisState[0].players.filter(player=>player.id !== action.payload)
            return thisState
        }
        },

    extraReducers: (builder) => {

        builder.addCase(fetchMyTeams.fulfilled, (initialState, action) => {

            initialState.push(action.payload);
        })
    },
})



export const {add, remove, byId, addPlayer, removePlayer} = myTeamSlice.actions

export const selectMyTeams = (state) => state.myTeams


export default myTeamSlice.reducer
