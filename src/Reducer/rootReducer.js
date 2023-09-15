import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

export let rootReducer = combineReducers({ movie: movieReducer });
