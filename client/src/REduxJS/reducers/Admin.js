import {
  CURRENT_ADMIN,
  FAIL_ADMIN,
  LOAD_ADMIN,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
} from "../ACTIONTYPE/Admin";

const initialstate = {
  load: false,
  user: {},
  admin: {},
  isAuth: false,
  errors: [],
};
//pure function
const adminReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOAD_ADMIN:
      return { ...state, load: true };

    case FAIL_ADMIN:
      return { ...state, load: false, errors: payload };
    case LOGIN_ADMIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        admin: payload.user,
        isAuth: true,
        errors: [],
      };
    case CURRENT_ADMIN:
      return {
        ...state,
        load: false,
        doctor: payload,
        isAuth: true,
        errors: [],
      };
    case LOGOUT_ADMIN:
      localStorage.removeItem("token");
      return {
        ...state,
        load: false,
        errors: [],
        admin: {},
        isAuth: false,
      };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default adminReducer;
