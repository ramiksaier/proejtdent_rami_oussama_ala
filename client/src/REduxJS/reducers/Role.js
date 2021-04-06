import { ROLE_DOCTEUR, ROLE_PATIENT } from "../ACTIONTYPE/Role";

const initialState = {
  role: "",
};
const roleReducer = (state = initialState, { type }) => {
  switch (type) {
    case ROLE_DOCTEUR:
      return { ...state, role: "doctor" };
    case ROLE_PATIENT:
      return { ...state, role: "patient" };
    default:
      return state;
  }
};

export default roleReducer;
