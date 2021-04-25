//import type

import {
  FAIL_RENDEZVOUS,
  GETONE_RENDEZVOUS,
  GET_RENDEZVOUS,
  LOAD_RENDEZVOUS,
} from "../ACTIONTYPE/Rendezvous";

//initialstate
const initialstate = {
  listrendezvous: [],
  error: null,
  load: false,
  user: {},
  rendezvous: {},
};
//pure function
const rendezvousReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOAD_RENDEZVOUS:
      return { ...state, load: true };
    case GET_RENDEZVOUS:
      return { ...state, load: false, listrendezvous: payload.list };

    case FAIL_RENDEZVOUS:
      return { ...state, load: false, errors: payload };
    case GETONE_RENDEZVOUS:
      return { ...state, load: false, user: payload };

    default:
      return state;
  }
};
export default rendezvousReducer;
