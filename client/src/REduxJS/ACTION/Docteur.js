import {
  CONF_DOCTOR,
  FAIL_DOCTORS,
  GETONE_DOCTORS,
  GET_DOCTORS,
  LOGIN_DOCTEUR,
  LOAD_DOCTORS,
  CURRENT_DOCTEUR,
  REGISTER_DOCTOR,
  LOGOUT_DOCTOR,
} from "../ACTIONTYPE/Docteur";
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
export const postdoctor = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_DOCTORS });
  console.log(history);
  try {
    const result = await axios.post("/api/docteur/signup", newUser);

    dispatch({ type: REGISTER_DOCTOR, payload: result.data }); //msg , token , user
    console.log(result.data);
    history.push("/profiledocteur");
  } catch (error) {
    console.log(error.response.data.errorrs);
    // error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_DOCTORS, payload: error.response.data.errors });
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
export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_DOCTORS });

  try {
    const result = await axios.post("/api/docteur/signin", user);
    dispatch({ type: LOGIN_DOCTEUR, payload: result.data }); //msg /token , user

    history.push("/profiledocteur");
  } catch (error) {
    // error.response.data.errors.map((el) =>
    //   setTimeout(function () {
    //     alert(el.msg);
    //   }, 3000)
    // );
    dispatch({ type: FAIL_DOCTORS, payload: error.response });
    console.log(error.response);
  }
};

export const logout = () => {
  return {
    type: LOGOUT_DOCTOR,
  };
};

export const currentUser = () => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/docteur/current", options);
    dispatch({ type: CURRENT_DOCTEUR, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_DOCTORS, payload: error.response.data });
  }
};
export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};
