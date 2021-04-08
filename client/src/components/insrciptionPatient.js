import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, Icon } from "semantic-ui-react";
import { editpatient, postpatient } from "../REduxJS/ACTION/Patient";
const InscriptionPatient = () => {
  const [user, setuser] = useState({});
  const userReducer = useSelector((state) => state.patientReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setuser(userReducer)
      : setuser({
          image: "",
          firstName: "",
          lastName: "",
          sex: "",
          Phone: "",
          email: "",
          age: "",
          password: "",
          adress: "",
        });
  }, [userReducer]);
  const handeldata = () => {
    edit
      ? dispatch(editpatient(userReducer._id, user))
      : dispatch(postpatient(user));
  };
  const handelchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <h1 className="titreFD">bienvenue au espace patient</h1>
      <div className="FM">
        <img src="img/user/user1.png" alt="imguser" width="100px" />
      </div>
      <Form.Group widths="equal">
        <Icon name="user md" />
        <Form.Field
          id="name"
          control={Input}
          label="First name:"
          placeholder="De 3 à 20 caractères"
          Type="text"
          name="firstName"
          value={user.firstName}
          onChange={handelchange}
          required
        />
        <Icon name="user md" />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name:"
          placeholder="Last name"
          Type="text"
          name="lastName"
          value={user.lastName}
          onChange={handelchange}
          required
        />
        <Icon name="user md" />
        <Form.Field>
          <select id="sex" value={user.sex} onChange={handelchange} name="sex">
            <option value="femelle">femelle</option>

            <option value="male" selected>
              Male
            </option>
          </select>
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Icon name="envelope" />

        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Email:"
          placeholder="XXXX@.com"
          type="email"
          name="email"
          value={user.email}
          onChange={handelchange}
        />
        <Icon name="lock" />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Mot De Passe:"
          placeholder="Mode de Passe"
          type="password"
          minlength="8"
          name="password"
          value={user.password}
          onChange={handelchange}
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Icon name="phone" />

        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Nuemro tel Personel:"
          placeholder="+216"
          type="number"
          name="Phone"
          value={user.Phone}
          onChange={handelchange}
          required
        />
        <Icon name="eye" />
        <Form.Field
          id="age"
          control={Input}
          label="Votre Age:"
          placeholder=""
          type="number"
          name="age"
          value={user.age}
          onChange={handelchange}
          required
        />
        <Icon name="warehouse" />
        <select
          id="localisation"
          name="adress"
          value={user.adress}
          onChange={handelchange}
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
      </Form.Group>
      <Icon name="camera" />
      <input type="file"
      name="image"
      value={user.image}
      onChange={handelchange} />
      <div className="enregister">
        <Link to="/detailPatient">
          <Button negative onClick={handeldata}>
            Save
          </Button>
        </Link>
      </div>
    </Form>
  );
};
export default InscriptionPatient;
