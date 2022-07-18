import React, { Fragment, useState } from "react";
import { Modal } from "./modal";
import "./modal.example.scss";

const ModalExample = () => {
  const [visible, setVisible] = useState(false);
  const onClickModal1 = () => {
    setVisible(!visible);
  };
  const [visible2, setVisible2] = useState(false);
  const onClickModal2 = () => {
    setVisible2(!visible2);
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
        <button onClick={onClickModal1}>Open Modal Demo</button>
        <Modal
          visible={visible}
          onClose={onClickModal1}
          footerContents={buttons}
          className={"confirm-demo"}
          title={"提示"}
          closeOnClickMask={true}
        >
          <p>...content</p>
          <p>...content</p>
          <p>...content</p>
        </Modal>
        <hr />
        <h1>Modal demo 2</h1>
        <button onClick={onClickModal2}>
          Open Modal with Customized Footer
        </button>
        <Modal
          visible={visible2}
          onClose={onClickModal2}
          footerContents={[
            <button onClick={onClickModal2}>取消</button>,
            <button onClick={onClickModal2}>确定</button>,
            <button>Search on Google</button>,
          ]}
          title={"自定义Footer"}
          closeOnClickMask={false}
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
