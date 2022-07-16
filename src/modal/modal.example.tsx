import React, { useState } from "react";
import { Modal } from "./Modal";
import "./modal.example.scss";

const ModalExample = () => {
  const [visible, setVisible] = useState(false);
  const onClickModal = () => {
    console.log("switch visible");
    setVisible(!visible);
  };
  return (
    <div>
      <h1>Modal demo 1</h1>
      <Modal
        modalName={"Open Modal"}
        className={"modal-demo"}
        visible={visible}
        onClick={onClickModal}
      >
        <div>Hello, Modal demo 1</div>
      </Modal>
    </div>
  );
};

export { ModalExample };
