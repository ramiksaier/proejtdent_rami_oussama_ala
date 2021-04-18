import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../REduxJS/ACTION/Patient";
import "./Navbar.css";
const Navbar = () => {
  const isAuth = useSelector((state) => state.patientReducer.isAuth);

  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/">
        <h2>DET.TN</h2>
      </Link>
      {isAuth ? (
        <div>
          <Link to="/" onClick={() => dispatch(logout())}>
            {" "}
            <a href="#" className="btn-area">
              Logout
            </a>
          </Link>

          <Link to="/ourdoc">
            <a href="#" className="btn-area">
              Our doctor
            </a>
          </Link>
        </div>
      ) : (
        <div className="btns">
          <Link to="/signin">
            {" "}
            <a href="#" className="btn-area">
              Signin
            </a>
          </Link>

          <Link to="/ourdoc">
            <a href="#" className="btn-area">
              Our doctor
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
