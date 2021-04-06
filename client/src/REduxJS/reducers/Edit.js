import { TOGGLE_ADD, TOGGLE_EDIT } from "../ACTIONTYPE/Edit";

const initialState = {
  edit: false,
};
const editReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_EDIT:
      return { ...state, edit: true };
    case TOGGLE_ADD:
      return { ...state, edit: false };
    default:
      return state;
  }
};

export default editReducer;
