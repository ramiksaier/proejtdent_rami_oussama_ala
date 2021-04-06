import React from "react";

import { Link } from "react-router-dom";
import { Form, Input, Select, Button, Icon } from "semantic-ui-react";
const genderOptions = [
  { key: "m", text: "M", value: "male" },
  { key: "f", text: "Me", value: "female" },
];
const countryOptions = [
  { key: "af", value: "af", text: "Tunis" },
  { key: "ax", value: "ax", text: "Bizert" },
  { key: "al", value: "al", text: "Sousse" },
  { key: "dz", value: "dz", text: "Monastir" },
  { key: "as", value: "as", text: "Nabeul" },
  { key: "ad", value: "ad", text: "Kairaoune" },
  { key: "ao", value: "ao", text: "Zaghwane" },
  { key: "ai", value: "ai", text: "Mednine" },
  { key: "ag", value: "ag", text: "kef" },
  { key: "ar", value: "ar", text: "Silyana" },
  { key: "am", value: "am", text: "ben Arous" },
  { key: "aw", value: "aw", text: "Manouba" },
  { key: "au", value: "au", text: "Suliana" },
  { key: "at", value: "at", text: "Beja" },
  { key: "az", value: "az", text: "sidi bouzid" },
  { key: "bs", value: "bs", text: "Tataouin" },
  { key: "bh", value: "bh", text: "Touzer" },
  { key: "bd", value: "bd", text: "Gabes" },
  { key: "bb", value: "bb", text: "jandouba" },
  { key: "by", value: "by", text: "Gafsa" },
  { key: "be", value: "be", text: "Gbeli" },
  { key: "bz", value: "bz", text: "Manouba" },
  { key: "bj", value: "bj", text: "Benin" },
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
        <p>localisation</p>
        <Select
          placeholder="Select your country"
          options={countryOptions}
          required
        />
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
