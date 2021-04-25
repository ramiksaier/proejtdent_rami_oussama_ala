//import type

import {
  CONF_DOCTOR,
  CURRENT_DOCTEUR,
  FAIL_DOCTORS,
  GETONE_DOCTORS,
  GET_DOCTORS,
  LOAD_DOCTORS,
  LOGIN_DOCTEUR,
  LOGOUT_DOCTOR,
  REGISTER_DOCTOR,
} from "../ACTIONTYPE/Docteur";

//initialstate
const initialstate = {
  listdoctors: [],
  load: false,
  user: {},
  doctor: null,
  isAuth: false,
  errors: [],
  status: false,
};
//pure function

const doctorReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOAD_DOCTORS:
      return { ...state, load: true };
    case REGISTER_DOCTOR:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        doctor: payload.docteur,
        isAuth: true,
        errors: [],
      };
    case GET_DOCTORS:
      return {
        ...state,
        load: false,
        listdoctors: payload.list,
        status: payload.list.status,
      };

    case FAIL_DOCTORS:
      return { ...state, load: false, errors: payload };
    case GETONE_DOCTORS:
      return { ...state, user: payload };

    case CONF_DOCTOR:
      return { ...state, status: true };

    case LOGIN_DOCTEUR:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        doctor: payload.user,
        isAuth: true,
        errors: [],
      };
    case CURRENT_DOCTEUR:
      return {
        ...state,
        load: false,
        doctor: payload,
        isAuth: true,
        errors: [],
      };
    case LOGOUT_DOCTOR:
      localStorage.removeItem("token");
      return {
        ...state,
        load: false,
        errors: [],
        doctor: {},
        isAuth: false,
      };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default doctorReducer;
