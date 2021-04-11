import {
  FAIL_PATIENT,
  GETONE_PATIENT,
  GET_PATIENT,
  LOAD_PATIENT,
} from "../ACTIONTYPE/Patient";
import axios from "axios";
export const getpatient = () => async (dispatch) => {
  dispatch({ type: LOAD_PATIENT });
  try {
    let result = await axios.get("/api/patient");
    dispatch({ type: GET_PATIENT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PATIENT, payload: error.response });
  }
};
export const getonepatient = (id) => (dispatch) => {
  axios
    .get(`/api/patient/${id}`)
    .then((res) =>
      dispatch({
        type: GETONE_PATIENT,
        payload: res.data.getone,
      })
    )
    .catch((err) => console.log(err));
};
export const postpatient = (newuser) => async (dispatch) => {
  try {

    const result =await axios.post("/api/patient", newuser);
    dispatch(getonepatient(result.data.response._id));
     dispatch(getpatient());
  } catch (error) {
    dispatch({ type: FAIL_PATIENT, payload: error.response });
  }
};
export const editpatient = (id, newpatient) => async (dispatch) => {
  try {
    await axios.put(`/api/patient/${id}`, newpatient);
    dispatch(getpatient());
  } catch (error) {
    dispatch({ type: FAIL_PATIENT, payload: error.response });
  }
};
