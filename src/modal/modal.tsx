import React, { Fragment, HTMLAttributes } from "react";
import classnames from "classnames";
import { Icon } from "@icon/Icon";
import "./modal.scss";
import ReactDOM from "react-dom";

interface ModalProps extends HTMLAttributes<HTMLElement> {
  visible: boolean;
  onClose: React.MouseEventHandler;
  footerContents?: React.ReactElement[];
  className?: string;
  title?: string;
  closeOnClickMask?: boolean;
}

const Modal = ({
  visible,
  onClose,
  footerContents,
  className,
  title,
  closeOnClickMask = true,
  children,
  ...rest
}: ModalProps) => {
  const onClickMask: React.MouseEventHandler = e => {
    if (closeOnClickMask) {
      onClose(e);
    }
  };
  const onClickClose: React.MouseEventHandler = e => {
    onClose(e);
  };
  const result = visible ? (
    <Fragment>
      <div className="zenz-design-modal-mask" onClick={onClickMask}></div>
      <div
        className={classnames("zenz-design-modal", className || false)}
        {...rest}
      >
        <header className="zenz-design-modal-header">
          {title && <span>{title}</span>}
          <Icon name="close" onClick={onClickClose} />
        </header>
        <main className="zenz-design-modal-main">{children}</main>
        {footerContents && (
          <footer className="zenz-design-modal-footer">
            {footerContents.map((content, index) =>
              React.cloneElement(content, { key: index })
            )}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(result, document.body);
};

export { Modal };
