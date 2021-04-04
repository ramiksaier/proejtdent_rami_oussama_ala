import { FAIL_DOCTORS, GET_DOCTORS, LOAD_DOCTORS } from "../ACTIONTYPE/Docteur";
import axios from "axios";
export const getdoctors = () => async (dispatch) => {
  dispatch({ type: LOAD_DOCTORS });
  try {
    let result = await axios.get("/api/docteur");
    dispatch({ type: GET_DOCTORS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_DOCTORS, payload: error.response });
  }
};
