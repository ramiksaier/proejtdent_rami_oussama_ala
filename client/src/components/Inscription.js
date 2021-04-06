import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, TextArea, Button, Icon } from "semantic-ui-react";
import { editdocteur, postdoctor } from "../REduxJS/ACTION/Docteur";
const genderOptions = [
  { key: "m", text: "M", value: "male" },
  { key: "f", text: "Me", value: "female" },
];

const Inscription = () => {
  const [user, setuser] = useState({});
  const userReducer = useSelector((state) => state.doctorReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setuser(userReducer)
      : setuser({
          images: "",
          firstName: "",
          lastName: "",
          Phone: "",
          PhoneCab: "",
          email: "",
          age: "",
          password: "",
          qualification: "",
          localisation: "",
          emplacementEducation: "",
        });
  }, [userReducer]);
  const handeldata = () => {
    edit
      ? dispatch(editdocteur(userReducer._id, user))
      : dispatch(postdoctor(user));
  };
  const handelchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <h1>welcome docteur </h1>
      <div className="FM">
        <img src="img/user/user2.png" alt="imguser" width="100px" />
      </div>
      <Icon name="camera" />
      <input
        type="file"
        name="images"
        value={user.images}
        onChange={handelchange}
      />
      <Form.Group widths="equal">
        <Icon name="user md" />
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          name="firstName"
          placeholder="First name"
          value={user.firstName}
          onChange={handelchange}
        />
        <Icon name="user md" />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name"
          name="lastName"
          placeholder="Last name"
          value={user.lastName}
          onChange={handelchange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Icon name="envelope" />

        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handelchange}
        />
        <Icon name="lock" />
        <Form.Field
          type="password"
          id="form-input-control-last-name"
          control={Input}
          label="Mot De Passe"
          name="password"
          placeholder="Mode de Passe"
          value={user.password}
          onChange={handelchange}
        />
        <Icon name="eye" />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="age"
          type="number"
          name="age"
          placeholder="put your age"
          onChange={handelchange}
          value={user.age}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Icon name="phone" />
        <Form.Field
          type="number"
          id="form-input-control-first-name"
          control={Input}
          label="nuemro tel Personel"
          placeholder="nuemro tel Personel"
          name="Phone"
          value={user.Phone}
          onChange={handelchange}
        />
        <Icon name="text telephone" />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="nuemro tel Cabinet"
          type="number"
          name="PhoneCab"
          placeholder="nuemro tel Cabinet"
          onChange={handelchange}
          value={user.PhoneCab}
        />
      </Form.Group>
      <Icon name="user md" />
      <Form.Field
        id="form-textarea-control-qualification"
        control={TextArea}
        label="qualification"
        name="qualification"
        placeholder="qualification"
        value={user.qualification}
        onChange={handelchange}
      />
      <Icon name="warehouse" />
      <select
        id="localisation"
        value={user.localisation}
        onChange={handelchange}
        name="localisation"
      >
        <option value="tunis ">tunis</option>
        <option value="Nabeul">Nabeul</option>
        <option value="Manouba">Manouba</option>
        <option value="Sousse">Sousse</option>
        <option value="Monastir">Mounastir</option>
        <option value="Ariana">Ariana</option>
        <option value="Beja">Beja</option>
        <option value="Kairaoun">Kairaoune</option>
        <option value="Gbelli">Gbelli</option>
        <option value="Kef">Kef</option>
        <option value="Jendouba">Jendouba</option>
        <option value="Benarous">BenArous</option>
        <option value="mahdia">Mahdia</option>
        <option value="Medenin">Medenin</option>
        <option value="sidibouzid">Sidi bouzid</option>
        <option value="gafsa">gafsa</option>

        <option value="tunis" selected>
          Tunis
        </option>
      </select>
      <Icon name="building" />
      <Form.Field
        id="form-textarea-control-emplacementEducation"
        control={TextArea}
        label="emplacementEducation"
        placeholder="Emplacement Education"
        name="emplacementEducation"
        value={user.emplacementEducation}
        onChange={handelchange}
      />
      <Button negative onClick={handeldata}>
        <Link to="/profile">{edit ? "edit" : "save"}</Link>
      </Button>
    </Form>
  );
};
export default Inscription;
