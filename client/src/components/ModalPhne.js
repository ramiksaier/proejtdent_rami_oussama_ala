import { el } from "date-fns/locale";
import React from "react";
import { Button, Modal } from "semantic-ui-react";

function ModalExampleShorthand({ el }) {
  return (
    <Modal
      trigger={<Button>Affiche Number</Button>}
      header="Phone!"
      content={el.Phone}
      content2={el.PhoneCab}
      actions={[{ key: "done", content: "Done", positive: true }]}
    />
  );
}

export default ModalExampleShorthand;
