import React from "react";
import "./icon.scss";
import "./assets/penguin.svg";
import "./assets/wechatPay.svg";

interface Props {
  name: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Icon = ({ name, onClick }: Props) => {
  return (
    <svg onClick={onClick}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export { Icon };
