const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Find a doctor and make an appointment quickly!"
                  <span></span>
                </h1>
                <p>
                  Select your doctor, create an account, choose the date and
                  time of your appointment and receive your confirmation text /
                  email. It's that simple !
                </p>

                <button className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
