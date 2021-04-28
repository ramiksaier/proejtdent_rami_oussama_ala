import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle_edit } from "../REduxJS/ACTION/Edit";
import {
  Deleterendezvous,
  getonerendezvous,
} from "../REduxJS/ACTION/Rendezvous";
import { Button, Card, Image } from "semantic-ui-react";

const RendCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://image.shutterstock.com/image-vector/valentines-day-tooth-calendar-dental-260nw-1915899994.jpg"
            alt="avatar"
          />
          <Card.Header>
            {el.status ? (
              <h3 className="h2title">
                <h4 className="title1">confirmer</h4> <span /> Dr <span />
                {el.firstName_doc} {el.lastName_doc}
              </h3>
            ) : (
              <h3 className="h2title">
                Dr <span />
                {el.firstName_doc} {el.lastName_doc} <span />
              </h3>
            )}
          </Card.Header>
          <Card.Meta>
            <br></br>
            <h1 className="h2title">{el.dateRen}</h1> <br></br>
          </Card.Meta>
          <Card.Meta>
            <h2 className="h2title">{el.jour}</h2>
          </Card.Meta>
          <Card.Description>
            <h2 className="h2title">{el.description}</h2>
          </Card.Description>
          <Button
            basic
            color="green"
            onClick={() => dispatch(Deleterendezvous(el._id))}
          >
            delete
          </Button>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};
export default RendCard;
