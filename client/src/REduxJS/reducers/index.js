import { combineReducers } from "redux";
import doctorReducer from "./Docteur";
import editReducer from "../reducers/Edit";
import roleReducer from "../reducers/Role";
import patientReducer from "./Patient"

const rootReducer = combineReducers({
  doctorReducer,
  editReducer,
  roleReducer,
  patientReducer,
});
export default rootReducer;
