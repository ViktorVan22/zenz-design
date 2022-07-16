import React, { Fragment, useState } from "react";
import { Modal } from "./Modal";
import "./modal.example.scss";

const ModalExample = () => {
  const [visible, setVisible] = useState(false);
  const onClickModal1 = () => {
    console.log("clicked.");
    setVisible(!visible);
  };
  const buttons = [
    <div className="confirm" onClick={onClickModal1}>
      确认
    </div>,
    <div className="cancel" onClick={onClickModal1}>
      取消
    </div>,
  ];
  return (
    <Fragment>
      <div className="demo-container">
        <h1>Modal demo 1</h1>
        <button onClick={onClickModal1}>open modal demo</button>
        <Modal
          visible={visible}
          onClose={onClickModal1}
          buttons={buttons}
          className={"confirm-demo"}
          title={"提示"}
          closeOnClickMask={true}
        >
          <p>...content</p>
          <p>...content</p>
          <p>...content</p>
        </Modal>
      </div>
    </Fragment>
  );
};

export { ModalExample };
