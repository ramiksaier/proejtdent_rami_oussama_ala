import { combineReducers } from "redux";
import doctorReducer from "./Docteur";
import editReducer from "../reducers/Edit";
import roleReducer from "../reducers/Role";

const rootReducer = combineReducers({
  doctorReducer,
  editReducer,
  roleReducer,
});
export default rootReducer;
