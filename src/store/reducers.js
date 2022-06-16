import { combineReducers } from "redux"

import { flufWorldReducer } from "./flufWorld/reducer"
export const reducers = combineReducers({
  flufWorldData: flufWorldReducer,
})