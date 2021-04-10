import React from "react";
import { Card, Icon, Button, Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DetailDocCard = ({ location }) => {
  const el = location.state.el;
  return (
    <div>
      <div className="card">
        <Card style={{ width: "15rem" }}>
          {el.img ? (
            <Image src={el.image} alt="img" />
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
        <Link to="/prendrerdv">
          <Button color="youtube">
            <Icon name="calendar" /> Prendre RDV
          </Button>{" "}
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
                  <Button color="linkedin">
                    <Icon name="mail" /> Envoyer un Email
                  </Button>{" "}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="phone" />
                <List.Content>
                  <Button color="linkedin">
                    <Icon name="phone" /> Afficher le numero
                  </Button>{" "}
                </List.Content>
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
              <img src="img/user/cnam.jpg" style={{ width: "50px" }}></img>
            </h4>
          </Card.Content>
        </Card>
      </div>
      <div className="card4">
        <Card style={{ width: "50rem" }}>
          <h1 className="card4t"> Horaires d'ouverture:</h1>
          <Card.Content>
            <div className="timeimg">
              <img src="img/user/time.png" alt="img" />
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
