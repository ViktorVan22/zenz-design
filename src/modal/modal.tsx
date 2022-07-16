import React, { HTMLAttributes } from "react";
import classnames from "classnames";

interface ModalProps extends HTMLAttributes<HTMLElement> {
  modalName: string;
  className: string;
  visible: boolean;
}

const Modal = ({
  modalName = "对话框",
  className,
  visible,
  children,
  ...rest
}: ModalProps) => {
  return (
    <div className={classnames("zenz-design-modal", className)} {...rest}>
      <span>{modalName}</span>
      {visible ? <div>{children}</div> : null}
    </div>
  );
};

export { Modal };
