import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getTeamPlayers = createAsyncThunk(
    "user_team_players/get",
    async (thunkAPI)=> {
      const response = await fetch('http://localhost:3000/user_team_players').then(
      (data)=>data.json()
      )
      return response
  }) 

  export const myTeamPlayerSlice = createSlice({
    name: 'myTeamPlayers',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            state.filter(player => player.id !== action.payload)
        }
    },
    extraReducers: (builder) => {

      builder.addCase(getTeamPlayers.fulfilled, (state, action) => {

          state.push(action.payload)
      })
  },
})

export const { add, remove } = myTeamPlayerSlice.actions

export default myTeamPlayerSlice.reducer
