import { combineReducers } from "redux";
import doctorReducer from "./Docteur";
const rootReducer = combineReducers({ doctorReducer });
export default rootReducer;
