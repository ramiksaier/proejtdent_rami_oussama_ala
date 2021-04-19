import React from "react";
import { useSelector } from "react-redux";

import { Card, Icon, Button, Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarPa from "./NavbarPa";
import ModalPhne from "./ModalPhne";
import ModalEma from "./ModalEma";
const DetailDocCard = ({ location }) => {
  const el = location.state.el;
  // const el = useSelector((state) => state.doctorReducer.doctor);

  return (
    <div>
      <NavbarPa />

      <Link to="/">
        <button className="btn btn-custom btn-lg page-scroll"> </button>
      </Link>

      <div className="card">
        <Card style={{ width: "15rem" }}>
          {el.images ? (
            <Image src={el.images} alt="img" />
          ) : (
            <Image
              src="https://image.freepik.com/free-vector/doctor-icon-avatar-white_136162-58.jpg"
              alt="img"
            />
          )}
          <Card.Content>
            <Card.Header>
              <span />
              {el.firstName} {el.lastName} <span />
            </Card.Header>
            <Card.Meta>
              <br></br>
              <span className="date">
                <h3>{el.emplacementEducation}</h3>
              </span>
            </Card.Meta>
            <Card.Meta>
              <br></br>
              <span className="date">
                <h3>
                  <span></span> {el.age} ans
                </h3>
              </span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>
      </div>
      <div className="btnrdv">
        <Link to={{ pathname: `/prendrerdv/${el._id}`, state: { el: el } }}>
          <button className="btn btn-custom btn-lg page-scroll">
            <Icon name="calendar" /> Prendre RDV
          </button>{" "}
        </Link>
      </div>
      <div className="card2">
        <Card style={{ width: "30rem" }}>
          <h1 className="cardt">Information de Contact:</h1>
          <Card.Content>
            <List>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <ModalEma el={el} />
                  <ModalPhne el={el} />
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="phone" />
                <List.Content></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>{el.localisation}</List.Content>
              </List.Item>
            </List>
          </Card.Content>
        </Card>
      </div>
      <div className="card3">
        <Card style={{ width: "50rem" }}>
          <h1 className="titre"> Présentation:</h1>
          <Card.Content>
            <h4>Qualification professionnelle:</h4>
            <p> {el.qualification} </p>
            <h4>
              Assurance maladie:
              <img src="../img/user/cnam.jpg" style={{ width: "50px" }}></img>
            </h4>
          </Card.Content>
        </Card>
      </div>
      <div className="card4">
        <Card style={{ width: "50rem" }}>
          <h1 className="card4t"> Horaires d'ouverture:</h1>
          <Card.Content>
            <div className="timeimg">
              <img src="../img/user/time.png" alt="img" />
            </div>
            <div className="time">
              <h6>Lundi</h6> <p>09:00/12:00 - 14:00/18:00</p>
              <h6>Mardi</h6> <p>09:00/12:00 - 14:00/18:00</p>
              <h6>Mercrodi</h6> <p>09:00/12:00 - 14/00:18:00</p>
              <h6>Jeudi</h6> <p>09:00/12:00 - 14:00/18:00</p>
              <h6>Vendredi</h6> <p>09:00/12:00 - 14:00/18:00</p>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};
export default DetailDocCard;
