import { combineReducers } from "redux";

import { useReducer } from "react";
import { userReducer } from "./user.reducer";

export const  rootReducer= ({
user:userReducer
})