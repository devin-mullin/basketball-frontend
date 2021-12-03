import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import { connect, Provider, useDispatch, useSelector } from "react-redux";

let initialState = {
    teams: {
        id: '',
        full_name: '',
        abrv: '',
        simple_name: '',
        location: '',
        players: {
            id: '',
            name: '',
            pos: '',
            age: '',
        }
    }
    
    } 



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
    initialState: initialState,
    reducers: {
        teamLoad: (state, action) => {
            state.teams = action.payload
            },
         },
    extraReducers: {
        [fetchTeams.pending]: (state)=> {
            state.loading = true
        },
        [fetchTeams.fulfilled]: (state, {payload})=>{
            state.loading = false
            state.teams = payload
        },
        [fetchTeams.rejected]: (state)=>{
            state.loading = false
        }
    }

})

export const selectAllTeams = state => state.teams 

export const selectTeamById = state => state.teams 

export const { teamLoad } = teamSlice.actions 

export default teamSlice.reducer