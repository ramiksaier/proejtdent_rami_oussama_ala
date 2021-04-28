import { useDispatch } from "react-redux";
import {
  Deleterendezvous,
  editrendezvous,
  getonerendezvous,
} from "../REduxJS/ACTION/Rendezvous";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import { toggle_edit } from "../REduxJS/ACTION/Edit";
import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const RendezvousCard = ({ el, history }) => {
  const dispatch = useDispatch();

  return (
    <div className="doct" >
      {" "}
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://st4.depositphotos.com/3369547/30882/v/1600/depositphotos_308820562-stock-illustration-professional-dentist-avatar-character-vector.jpg"
              alt="avatar"
            />
            <Card.Header>
              {el.status ? (
                <h3>
                  Patient Name : Mr(e) <span />
                  {el.firstName_pat} {el.lastName_pat} <span />{" "}
                  <img
                    className="ic"
                    src="https://img2.freepng.fr/20180422/ykw/kisspng-check-mark-computer-icons-clip-art-ophthalmology-5adc922ab885b3.2051605015244047787558.jpg"
                    alt="iconverif"
                  />
                </h3>
              ) : (
                <h3>
                  Patient Name : Dr <span />
                  {el.firstName_pat} {el.lastName_pat} <span />
                </h3>
              )}
            </Card.Header>
            <Card.Meta>
              <br></br>

              <h4>time : {el.dateRen}</h4>
              <br></br>
            </Card.Meta>
            <Card.Meta>
              <h4> jour : {el.jour}</h4>
            </Card.Meta>
            <Card.Description>
              <h2>{el.description}</h2>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              {el.status ? (
                <Button
                  basic
                  color="green"
                  onClick={() => dispatch(Deleterendezvous(el._id))}
                >
                  delete
                </Button>
              ) : (
                <>
                  <Button
                    basic
                    color="red"
                    onClick={() =>
                      dispatch(editrendezvous(el._id, { status: true }))
                    }
                  >
                    confirmed
                  </Button>
                  <Button
                    basic
                    color="red"
                    onClick={() => dispatch(Deleterendezvous(el._id))}
                  >
                    reject
                  </Button>
                </>
              )}
              <Button>
                <Edit el={el} />
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};
export default RendezvousCard;
