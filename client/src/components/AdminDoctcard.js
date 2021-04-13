import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmer_docteur } from "../REduxJS/ACTION/Confirmation";
import { conf_doc } from "../REduxJS/ACTION/Docteur";

const AdminDoctcard = ({ el }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.doctorReducer.status);

  return (
    <div>
      <div className="col-md-4">
        <div className="testimonial">
          <div className="testimonial-image">
            {el.img ? (
              <img src={el.image} alt="img" />
            ) : (
              <img
                src="https://image.freepik.com/free-vector/doctor-icon-avatar-white_136162-58.jpg"
                alt="img"
              />
            )}
          </div>

          {el.status ? (
            <h3>
              Dr <span />
              {el.firstName} {el.lastName} <span />{" "}
              <img
                className="ic"
                src="https://img2.freepng.fr/20180422/ykw/kisspng-check-mark-computer-icons-clip-art-ophthalmology-5adc922ab885b3.2051605015244047787558.jpg"
                alt="iconverif"
              />
            </h3>
          ) : (
            <h3>
              Dr <span />
              {el.firstName} {el.lastName} <span />
            </h3>
          )}
        </div>
        <div className="testimonial-content">
          <p>
            {" "}
            <img
              className="ic"
              src="data:image/png;base64,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"
            />
            {el.localisation}
          </p>
          <div className="testimonial-meta">
            <img
              className="ic"
              src="https://logo-creation.com/wp-content/uploads/2020/04/PFE_Icon_Public-education.png"
            />{" "}
            {el.emplacementEducation}{" "}
          </div>

          <button
            className="btn btn-custom btn-lg page-scroll"
            onClick={() => dispatch(conf_doc())}
          >
            confirmer doctor
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminDoctcard;
