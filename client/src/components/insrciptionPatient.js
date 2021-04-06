import React from "react";

import { Link } from "react-router-dom";
import { Form, Input, Select, Button, Icon } from "semantic-ui-react";
const genderOptions = [
  { key: "m", text: "M", value: "male" },
  { key: "f", text: "Me", value: "female" },
];

const FormulairDoctor = () => {
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
          name="name"
          required
        />
        <Icon name="user md" />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name:"
          placeholder="Last name"
          Type="text"
          name="name"
          required
        />
        <Icon name="user md" />
        <Form.Field
          control={Select}
          options={genderOptions}
          label={{ children: "SEX", htmlFor: "form-select-control-gender" }}
          placeholder="Sex:"
          search
          searchInput={{ id: "form-select-control-gender" }}
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Icon name="envelope" />

        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Email:"
          placeholder="XXXX@.com"
          type="email"
        />
        <Icon name="lock" />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Mot De Passe:"
          placeholder="Mode de Passe"
          type="password"
          minlength="8"
          required
        />
        <Icon name="lock" />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Confirmation de Mot de passe:"
          placeholder="Confirmation de mot de passe"
          type="password"
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
          name="name"
          required
        />
        <Icon name="eye" />
        <Form.Field
          id="age"
          control={Input}
          label="Votre Age:"
          placeholder=""
          type="datetime-local"
          name="date_inscription3"
          required
        />
        <Icon name="warehouse" />
        <select id="localisation" name="localisation">
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
      <input type="file" />
      <div className="enregister">
        <Link to="/detailPatient">
          <Button negative>Save</Button>
        </Link>
      </div>
    </Form>
  );
};
export default FormulairDoctor;
