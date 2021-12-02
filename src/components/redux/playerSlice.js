import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPlayers = createAsyncThunk(
    'players/getPlayers', 
    async (thunkAPI)=> {
    const response = await fetch('http://localhost:3000/players').then(
    (data)=>data.json()
    )
    return response
}) 

export const playerSlice = createSlice({
    name: 'players',
    initialState: [],
    reducers: {
        playerAdd: (state, action) => {
            state.push(action.payload)
        },
        playerRemove: (state, action) => {
            state.filter(player => player.id !== action.payload)
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchPlayers.fulfilled, (state, action) => {

            state.push(action.payload)
        })
    },
})

const mapStateToProps = (state) => {
    return {
      categories: state.playerReducer
    }
 }

export const { playerAdd, playerRemove } = playerSlice.actions

export const selectPlayers = state=>state.players

export const selectPlayerById = (state, playerId) => 
state.players.find(player => player.id === playerId)

export default playerSlice.reducer