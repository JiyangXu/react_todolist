import { createStore, combineReducers } from "redux";
import { todos } from "./todos/reducer";

const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
