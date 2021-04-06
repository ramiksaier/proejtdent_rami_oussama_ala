import { ROLE_DOCTEUR, ROLE_PATIENT } from "../ACTIONTYPE/Role";

export const role_docteur = () => {
  return {
    type: ROLE_DOCTEUR,
  };
};
export const role_patient = () => {
  return {
    type: ROLE_PATIENT,
  };
};
