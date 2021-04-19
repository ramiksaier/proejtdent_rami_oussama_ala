import { el } from "date-fns/locale";
import React from "react";
import { Button, Modal } from "semantic-ui-react";

function ModalExampleShorthand({ el }) {
  return (
    <Modal
      trigger={<Button>Affiche email</Button>}
      header="Email!"
      content={el.email}
      actions={[{ key: "done", content: "Done", positive: true }]}
    />
  );
}

export default ModalExampleShorthand;
