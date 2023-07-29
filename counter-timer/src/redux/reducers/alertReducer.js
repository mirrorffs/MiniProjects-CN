const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
const notySlice = createSlice({
    name: 'noty',
    initialState: INITIAL_STATE,
    reducers:{
        reset:(state,action)=>{
            state.message=null
        },
    },
    extraReducers:{
        'timer/startTimer':(state,action)=>{
            state.message='Timer has started.'
        },
        'timer/pauseTimer':(state,action)=>{
            state.message='Timer is paused.'
        },
        'timer/resetTimer':(state,action)=>{
            state.message='Timer set to 0.'
        },
    

    }
})
// export the alert reducer function here
export const notyReducer = notySlice.reducer
export const notyActions = notySlice.actions
export const notySelector = state=> state.notyReducer.message
// create and export alert selector function here
