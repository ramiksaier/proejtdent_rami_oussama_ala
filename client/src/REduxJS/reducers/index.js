import { combineReducers } from "redux";
import doctorReducer from "./Docteur";
import editReducer from "../reducers/Edit";
import roleReducer from "../reducers/Role";
import patientReducer from "./Patient";
import confirmReducer from "./Confirmation";
import rendezvousReducer from "./Rendezvous";
import adminReducer from "./Admin";

const rootReducer = combineReducers({
  doctorReducer,
  editReducer,
  roleReducer,
  confirmReducer,
  patientReducer,
  adminReducer,
  rendezvousReducer,
});
export default rootReducer;
