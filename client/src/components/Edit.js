import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { editrendezvous } from "../REduxJS/ACTION/Rendezvous";

const ModalExampleModal = ({ el }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const [user, setuser] = useState({});

  const rendezvousReducer = useSelector(
    (state) => state.rendezvousReducer.user
  );

  useEffect(() => {
    setuser(rendezvousReducer);
  }, [rendezvousReducer]);
  const handelchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handeldata = () => {
    dispatch(editrendezvous(rendezvousReducer._id, user));
    setOpen(false);
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>ADD description</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          wrapped
        />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <input value={el.description} name="jour" onChange={handelchange} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
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
