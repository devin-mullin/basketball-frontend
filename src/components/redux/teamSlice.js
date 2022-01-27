import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let initialState = []


export const fetchTeams = createAsyncThunk(
        'teams/getTeams',
        async (thunkAPI) => {
            const res = await fetch('https://nameless-ravine-11360.herokuapp.com/teams').then(
                (data) => data.json()
            )
            return res
        })

export const teamSlice = createSlice({
    name: 'teams',
    initialState: initialState,
    reducers: {
        teamLoad: (state, action) => {
            state = action.payload
            },
         },
    extraReducers: (builder) => {
        builder.addCase(fetchTeams.fulfilled, (state, action) => {

            state.push(action.payload)
        })
    }

})

export const selectAllTeams = state => state.teams 

export const selectTeamById = state => state.teams 

export const { teamLoad } = teamSlice.actions 

export default teamSlice.reducer