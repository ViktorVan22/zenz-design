import React from "react";
import "./assets/penguin.svg";
import "./assets/wechatPay.svg";

interface Props {
  name: string;
}

const Icon = ({ name }: Props) => {
  return (
    <svg>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export { Icon };
