import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>SING UP</h2>
          <div className="user">
            <img src="img/user/user1.png" className="img-responsive" alt="" />{" "}
            <img src="img/user/user2.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="btn">
            <Link to="/connectpatient">
              <button variant="primary" size="lg">
                You Are Patient?
              </button>
            </Link>

            <Link to="/connectdocteur">
              <button variant="primary" size="lg">
                You Are Doctor?
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;