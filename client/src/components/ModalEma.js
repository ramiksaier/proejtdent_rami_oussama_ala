import { el } from "date-fns/locale";
import React from "react";
import { Button, Header, Icon, Modal, List } from "semantic-ui-react";

function ModalExampleShorthand({ el }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={
        <button className="btn btn-custom btn-lg page-scroll">
          Detail Docteur
        </button>
      }
    >
      <Header icon>
        <Icon name="archive" />
        see detail
      </Header>
      <Modal.Content>
        <p className="h3title">
          <List.Icon name="user" />
          Docteur Name : {el.firstName} <span></span>
          {el.lastName}
        </p>
      </Modal.Content>
      <Modal.Content>
        <p className="h3title">
          {" "}
          <List.Icon name="phone" />
          Phone :{el.Phone}
        </p>
      </Modal.Content>

      <Modal.Content>
        <p className="h3title">
          {" "}
          <List.Icon name="phone" />
          Cabinet Phone: {el.PhoneCab}
        </p>
      </Modal.Content>
      <Modal.Content>
        <p className="h3title">
          {" "}
          <List.Icon name="mail" />
          email :{el.email}
        </p>
      </Modal.Content>
      <Modal.Content>
        <p className="h3title">
          {" "}
          <List.Icon name="marker" />
          Cabinet :{el.localisation}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleShorthand;
