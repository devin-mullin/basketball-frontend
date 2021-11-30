import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTeams = createAsyncThunk(
    'teams/getTeams',
    async (thunkAPI) => {
        const res = await fetch('http://localhost:3000/teams').then(
            (data) => data.json()
        )
        return res
    })

export const teamSlice = createSlice({
    name: 'teams',
    initialState: [],
    reducers: {
        teamAdd: (state, action) => {
            state.push(action.payload)
        },
        teamRemove: (state, action) => {
            state.filter(team => team.id !== action.payload)
        }
    }
})

export const { teamAdd, teamRemove } = teamSlice.actions

export default teamSlice.reducer