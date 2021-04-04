import React from "react";

const Error = ({ history }) => {
  return (
    <div>
      <img
        style={{ margin: "7%" }}
        src="https://assets.prestashop2.com/sites/default/files/blog/2019/10/banner_error_404.jpg"
        alt="img"
      />
      <br />
      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "1px",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <br></br>
      <br></br>
    </div>
  );
};
export default Error;
