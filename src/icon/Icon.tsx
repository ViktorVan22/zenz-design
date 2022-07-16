import React from "react";
import "./icon.scss";
import "./assets/penguin.svg";
import "./assets/wechatPay.svg";
import "./assets/add_linear.svg";
import "./assets/close.svg";

interface Props {
  name: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Icon = ({ name, className, onClick }: Props) => {
  return (
    <svg className={className} onClick={onClick}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export { Icon };
