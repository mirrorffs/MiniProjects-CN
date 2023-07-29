
// const redux = require("redux");
// import * as redux from "redux";
// import { combineReducers } from "redux";

import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";

//redux store
// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

//toolkit store
export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer
    }
})

