import axios from "axios";
import {
  CURRENT_ADMIN,
  FAIL_ADMIN,
  LOAD_ADMIN,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
} from "../ACTIONTYPE/Admin";
export const loginAdmin = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });

  try {
    const result = await axios.post("/api/admin/signin", user);
    dispatch({ type: LOGIN_ADMIN, payload: result.data }); //msg /token , user

    history.push("/espaceadmin");
  } catch (error) {
    // error.response.data.errors.map((el) =>
    //   setTimeout(function () {
    //     alert(el.msg);
    //   }, 3000)
    // );
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
  }
};
export const logout = () => {
  return {
    type: LOGOUT_ADMIN,
  };
};

export const currentadmin = () => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/admin/current", options);
    dispatch({ type: CURRENT_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data });
  }
};
export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};
