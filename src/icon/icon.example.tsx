import React from "react";
import { Icon } from "./Icon";

const IconExample = () => {
  const onClickIcon = (e: React.MouseEvent) => {
    e.stopPropagation && e.stopPropagation();
    e.preventDefault && e.preventDefault();
    console.log("svg is clicked");
    console.log(e.target);
  };

  return (
    <>
      <Icon name="wechatPay" onClick={onClickIcon} />
      <Icon name="penguin" onClick={onClickIcon} />
      <hr />
    </>
  );
};

export { IconExample };
