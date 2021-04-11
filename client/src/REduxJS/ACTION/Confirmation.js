import { CONFIRM_DOCTEUR, INCONFIRM_DOCTEUR } from "../ACTIONTYPE/Confirmatin";

export const confirmer_docteur = () => {
  return {
    type: CONFIRM_DOCTEUR,
  };
};
export const inconfrimer_docteur = () => {
  return {
    type: INCONFIRM_DOCTEUR,
  };
};
