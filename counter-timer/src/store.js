import { configureStore } from "@reduxjs/toolkit";

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");
// import and include the alert reducer function inside the store
import { notyReducer } from "./redux/reducers/alertReducer";
export const store = configureStore({
  reducer: { timerReducer, counterReducer, notyReducer }
});
