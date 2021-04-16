import React,{useState} from "react";
import { Modal, ModalHeader } from "reactstrap";

const ErrorModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={true}>
        <ModalHeader toggle={toggle} style={{ color: "black" }}>Path is not found</ModalHeader>
      </Modal>
    </div>
  );
};

export default ErrorModal;
