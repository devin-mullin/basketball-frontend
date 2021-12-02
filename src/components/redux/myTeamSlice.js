import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMyTeams = createAsyncThunk(
    'user_teams/getMyTeams', 
    async (thunkAPI)=> {
    const response = await fetch('http://localhost:3000/user_teams').then(
    (data)=>data.json()
    )
    return response
}) 


export const myTeamSlice = createSlice({
    name: 'myTeams',
    initialState: [],
    reducers: {
        myTeamAdd: (state, action) => {
            state.myTeams.push(action.payload)
        },
        myTeamRemove: (state, action) => {
            state.myTeams.filter(team => team.id !== action.payload)
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchMyTeams.fulfilled, (state, action) => {

            state.push(action.payload)
        })
    },
})
    
export const {myTeamAdded, myTeamUpdated} = myTeamSlice.actions

export const selectMyTeams = state=>state.myTeams

export const selectMyTeamById = (state, myTeamId) => 
state.myTeams.find(myTeam => myTeam.id === myTeamId)

export default myTeamSlice.reducer
