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

const EditRendezvous = () => {
  //const docteur = useSelector((state) => state.doctorReducer.doctor);

  const Patient = useSelector((state) => state.patientReducer.patient);

  const [date, setDate] = useState();
  const inputProps = useDateInput({
    date,
    format: "yyyy-MM-dd",
    locale: enGB,
    onDateChange: setDate,
  });

  const [user, setuser] = useState({});
  const rendezvousReducer = useSelector(
    (state) => state.rendezvousReducer.user
  );
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setuser(rendezvousReducer)
      : setuser({
          id_pat: Patient._id,

          firstName_pat: Patient.firstName,
          lastName_pat: Patient.lastName,
          jour: "",
          dateRen: "",
          description: "",
        });
  }, [rendezvousReducer]);
  const handeldata = () => {
    edit
      ? dispatch(editrendezvous(rendezvousReducer._id, user))
      : dispatch(postrendezvous(user));
  };
  const handelchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input
        className="inp"
        value={user.jour}
        name="jour"
        onChange={handelchange}
      />

      <Form.Field>
        <select
          className="inp"
          id="localisation"
          value={user.dateRen}
          onChange={handelchange}
          name="dateRen"
        >
          <option value="09:00 ">09:00 to 10:00</option>
          <option value="10:00">10:00 to 11:00</option>
          <option value="11:00">11:00 to 12:00</option>
          <option value="14:00">14:00 to 15:00</option>
          <option value="15:00">15:00 to 16:00</option>
          <option value="16:00">16:00 to 17:00</option>
          <option value="17:00">17:00 to 18:00</option>

          <option value="tunis" selected>
            08:00 to 09:00
          </option>
        </select>
      </Form.Field>
      <Form.Field
        control={TextArea}
        className="inp"
        label="Description writing by doctor:"
        name="description"
        value={user.description}
        onChange={handelchange}
      />
      <Button onClick={handeldata}>
        <Link
          to={{
            pathname: `/profiledocteur/${user._id}`,
            state: { user: user },
          }}
        >
          {edit ? "edit" : "save"}
        </Link>
      </Button>
    </div>
  );
};
export default EditRendezvous;
