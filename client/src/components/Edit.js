import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { editrendezvous } from "../REduxJS/ACTION/Rendezvous";

const ModalExampleModal = ({ el }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handeldata = () => {
    setOpen(false);
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="blue">
          description
        </Button>
      }
    >
      <Modal.Header>
        <h2 className=" h2title">Description</h2>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description></Modal.Description>
        <h3 className=" h2title">{el.description}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button
          className=" h2title"
          content="Yep, i untrestand"
          labelPosition="right"
          icon="checkmark"
          onClick={handeldata}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalExampleModal;
