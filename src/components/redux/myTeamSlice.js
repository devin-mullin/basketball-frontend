import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'

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
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            state.filter(team => team.id !== action.payload)
            return state
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchMyTeams.fulfilled, (state, action) => {

            state.push(action.payload);
        })
    },
})



export const {add, remove} = myTeamSlice.actions

export const selectMyTeams = (state) => state.myTeams

export const selectMyTeamById = (state, myTeamId) => 
state.myTeams[0].find(myTeam => myTeam.user_id === myTeamId)

export default myTeamSlice.reducer
