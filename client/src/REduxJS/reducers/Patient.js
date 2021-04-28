//import type

import {
  CURRENT_PATIENT,
  FAIL_PATIENT,
  GETONE_PATIENT,
  GET_PATIENT,
  LOAD_PATIENT,
  LOGIN_PATIENT,
  LOGOUT_PATIENT,
  REGISTER_PATIENT,
} from "../ACTIONTYPE/Patient";

//initialstate
const initialstate = {
  listpatient: [],
  load: false,
  user: {},
  patient: {},
  isAuth: false,
  errors: [],
};
//pure function
const patientReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOAD_PATIENT:
      return { ...state, load: true };
    case REGISTER_PATIENT:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        patient: payload.patient,
        isAuth: true,
        errors: [],
      };
    case LOGIN_PATIENT:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        patient: payload.user,
        isAuth: true,
        errors: [],
      };

    case CURRENT_PATIENT:
      return {
        ...state,
        load: false,
        patient: payload,
        isAuth: true,
        errors: [],
      };
    case GET_PATIENT:
      return { ...state, load: false, listpatient: payload.list };

    case FAIL_PATIENT:
      return { ...state, load: false, errors: payload };
    case GETONE_PATIENT:
      return { ...state, user: payload };
    case LOGOUT_PATIENT:
      localStorage.removeItem("token");
      return {
        ...state,
        load: false,
        errors: [],
        patient: {},
        isAuth: false,
      };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };

    default:
      return state;
  }
};
export default patientReducer;
