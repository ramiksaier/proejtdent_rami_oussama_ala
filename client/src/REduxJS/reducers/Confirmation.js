import { CONFIRM_DOCTEUR, INCONFIRM_DOCTEUR } from "../ACTIONTYPE/Confirmatin";

const initialState = {
  status: false,
};
const confirmReducer = (state = initialState, { type }) => {
  switch (type) {
    case CONFIRM_DOCTEUR:
      return { ...state, status: true };
    case INCONFIRM_DOCTEUR:
      return { ...state, status: false };
    default:
      return state;
  }
};

export default confirmReducer;
