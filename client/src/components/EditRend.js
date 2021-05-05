import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { editrendezvous, postrendezvous } from "../REduxJS/ACTION/Rendezvous";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar, useDateInput } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import doctorReducer from "../REduxJS/reducers/Docteur";
import "./Rendezvous.css";
import Navbar from "./Navbar";
import { videErrors } from "../REduxJS/ACTION/Patient";

const Rendezvous = ({ location }) => {
  //  const docteur = location.state.el;
  const [user, setuser] = useState({});
  const userReducer = useSelector((state) => state.rendezvousReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const errors = useSelector((state) => state.patientReducer.errors);

  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setuser(userReducer)
      : setuser({
          jour: "",
          description: "",
          dateRen: "",
        });
    return () => {
      dispatch(videErrors());
    };
  }, [userReducer]);
  const handeldata = () => {
    edit
      ? dispatch(editrendezvous(userReducer._id, user))
      : dispatch(postrendezvous(user));
  };
  const handelchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  return (
    <div>
      <Navbar />
      <h1 className="bigtitle">
        {" "}
        welcome, <br></br> Add your description <br></br>
      </h1>
      <img
        className="img1"
        src="https://www.dentistespecialisepourenfant.com/fr/images/dentiste-pediatrique-prevention.png"
        alt="imagedentiste"
      />
      <div className="rend">
        <div>
          <Form.Field
            className="inpu"
            control={TextArea}
            className="inputtext"
            label="Description  doctor "
            name="description"
            value={user.description}
            onChange={handelchange}
            style={{
              width: "500px",
              height: "600px",
              marginLeft: "-20px",
            }}
          />

          <Button onClick={handeldata} className="btnfinal">
            <Link
              to={{
                pathname: `/profiledocteur/${user._id}`,
                state: { user: user },
              }}
            >
              edit
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Rendezvous;
