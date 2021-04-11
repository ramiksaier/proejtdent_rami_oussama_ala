import {
  FAIL_RENDEZVOUS,
  GETONE_RENDEZVOUS,
  GET_RENDEZVOUS,
  LOAD_RENDEZVOUS,
} from "../ACTIONTYPE/Rendezvous";

import axios from "axios";
export const getrendezvous = () => async (dispatch) => {
  dispatch({ type: LOAD_RENDEZVOUS });
  try {
    let result = await axios.get("/api/rendezvous");
    dispatch({ type: GET_RENDEZVOUS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_RENDEZVOUS, payload: error.response });
  }
};
export const getonerendezvous = (id) => (dispatch) => {
  axios
    .get(`/api/rendezvous/${id}`)
    .then((res) =>
      dispatch({
        type: GETONE_RENDEZVOUS,
        payload: res.data.getone,
      })
    )
    .catch((err) => console.log(err));
};
export const postdoctor = (newrendezvous) => async (dispatch) => {
  try {
    const result = await axios.post("/api/rendezvous", newrendezvous);
    dispatch(getonerendezvous(result.data.response._id));
    dispatch(getrendezvous());
  } catch (error) {
    dispatch({ type: FAIL_RENDEZVOUS, payload: error.response });
  }
};
export const editrendezvous = (id, newrendezvous) => async (dispatch) => {
  try {
    await axios.put(`/api/rendezvous/${id}`, newrendezvous);
    dispatch(getrendezvous());
  } catch (error) {
    dispatch({ type: FAIL_RENDEZVOUS, payload: error.response });
  }
};
