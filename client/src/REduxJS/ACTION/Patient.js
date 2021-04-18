import {
  CURRENT_PATIENT,
  FAIL_PATIENT,
  GETONE_PATIENT,
  GET_PATIENT,
  LOAD_PATIENT,
  LOGIN_PATIENT,
  LOGOUT_PATIENT,
  REGISTER_PATIENT,
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
export const postpatient = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_PATIENT });
  console.log(history);
  try {
    const result = await axios.post("/api/patient/signup", newUser);

    dispatch({ type: REGISTER_PATIENT, payload: result.data }); //msg , token , user
    console.log(result.data);
    history.push("/detailPatient");
  } catch (error) {
    console.log(error.response.data.errorrs);
    // error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_PATIENT, payload: error.response.data.errors });
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
export const loginP = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_PATIENT });

  try {
    const result = await axios.post("/api/patient/signin", user);
    dispatch({ type: LOGIN_PATIENT, payload: result.data }); //msg /token , user

    history.push("/detailPatient");
  } catch (error) {
    // error.response.data.errors.map((el) =>
    //   setTimeout(function () {
    //     alert(el.msg);
    //   }, 3000)
    // );
    dispatch({ type: FAIL_PATIENT, payload: error.response.data.errors });
  }
};
export const logout = () => {
  return {
    type: LOGOUT_PATIENT,
  };
};

export const currentPatient = () => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/patient/current", options);
    dispatch({ type: CURRENT_PATIENT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PATIENT, payload: error.response.data });
  }
};
export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};
