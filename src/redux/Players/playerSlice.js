import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
    name: 'players',
    initialState: [],
    reducers: {
        playerAdd(state, action){
            state.push(action.payload)
        },
        playerRemove(state, action){
            return state.filter(player => player.id !== action.payload)
        }
    }
})

export const { playerAdd, playerRemove } = playerSlice.actions

export default playerSlice.reducer