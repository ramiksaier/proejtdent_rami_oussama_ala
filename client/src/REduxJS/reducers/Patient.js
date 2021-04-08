//import type

import {
    FAIL_PATIENT,
    GETONE_PATIENT,
    GET_PATIENT,
    LOAD_PATIENT,
  } from "../ACTIONTYPE/Patient";
  
  //initialstate
  const initialstate = {
    listpatient: [],
    error: null,
    load: false,
    user: {},
  };
  //pure function
  const patientReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case LOAD_PATIENT:
        return { ...state, load: true };
      case GET_PATIENT:
        return { ...state, load: false, listpatient: payload.list };
  
      case FAIL_PATIENT:
        return { ...state, load: false, errors: payload };
      case GETONE_PATIENT:
        return { ...state, user: payload };
  
      default:
        return state;
    }
  };
  export default patientReducer;
  