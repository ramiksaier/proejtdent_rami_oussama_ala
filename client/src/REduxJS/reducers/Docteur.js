//import type

import { FAIL_DOCTORS, GET_DOCTORS, LOAD_DOCTORS } from "../ACTIONTYPE/Docteur";

//initialstate
const initialstate = {
  listdoctors: [],
  error: null,
  load: false,
};
//pure function
const doctorReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOAD_DOCTORS:
      return { ...state, load: true };
    case GET_DOCTORS:
      return { ...state, load: false, listdoctors: payload.list };

    case FAIL_DOCTORS:
      return { ...state, load: false, errors: payload };

    default:
      return state;
  }
};
export default doctorReducer;
