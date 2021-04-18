import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { role_docteur, role_patient } from "../REduxJS/ACTION/Role";

const Signin = () => {
  const dispatch = useDispatch();

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>SING IN</h2>
          <div className="user">
            <img src="img/user/user1.png" className="img-responsive" alt="" />{" "}
            <img src="img/user/user2.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="btn ">
            <Link to="/connectpatient">
              <button
                className="btn btn-custom btn-lg page-scroll"
                variant="primary"
                size="lg"
                onClick={() => dispatch(role_patient())}
              >
                You Are Patient?
              </button>
            </Link>

            <Link to="/connectdocteur">
              <button
                className="btn btn-custom btn-lg page-scroll"
                variant="primary"
                size="lg"
                onClick={() => dispatch(role_docteur())}
              >
                You Are Doctor?
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
