import {
  CONF_DOCTOR,
  FAIL_DOCTORS,
  GETONE_DOCTORS,
  GET_DOCTORS,
  LOAD_DOCTORS,
} from "../ACTIONTYPE/Docteur";
import axios from "axios";
export const getdoctors = () => async (dispatch) => {
  dispatch({ type: LOAD_DOCTORS });
  try {
    let result = await axios.get("/api/docteur");
    dispatch({ type: GET_DOCTORS, payload: result.data });
    console.log(result.data);
  } catch (error) {
    dispatch({ type: FAIL_DOCTORS, payload: error.response });
  }
};
export const getonedoctor = (id) => (dispatch) => {
  axios
    .get(`/api/docteur/${id}`)
    .then((res) =>
      dispatch({
        type: GETONE_DOCTORS,
        payload: res.data.getone,
      })
    )
    .catch((err) => console.log(err));
};
export const postdoctor = (newuser) => async (dispatch) => {
  try {
    const result = await axios.post("/api/docteur", newuser);
    console.log("result", result);
    dispatch(getonedoctor(result.data.response._id));
    dispatch(getdoctors());
  } catch (error) {
    dispatch({ type: FAIL_DOCTORS, payload: error.response });
  }
};
export const editdocteur = (id, newdocteur) => async (dispatch) => {
  try {
    await axios.put(`/api/docteur/${id}`, newdocteur);
    dispatch(getdoctors());
  } catch (error) {
    dispatch({ type: FAIL_DOCTORS, payload: error.response });
  }
};
export const conf_doc = () => async (dispatch) => {
  dispatch({ type: LOAD_DOCTORS });
  try {
    let result = await axios.get("/api/docteur");
    dispatch({ type: CONF_DOCTOR, payload: result.data.list });
  } catch (error) {
    dispatch({ type: FAIL_DOCTORS, payload: error.response });
  }
};
