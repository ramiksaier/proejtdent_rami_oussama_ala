import React from "react";
import { logout } from "../REduxJS/ACTION/Admin";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Navbar.css";

const NavbarAdmin = () => {
  const isAuth = useSelector((state) => state.adminReducer.isAuth);
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
        </div>
      ) : null}
    </header>
  );
};

export default NavbarAdmin;
