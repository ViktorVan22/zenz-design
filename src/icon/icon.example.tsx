import React from "react";
import { Highlighter } from "../utils/highlighter";
import { Icon } from "./Icon";
import exampleSource from "./source.txt";

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
      <Highlighter sourceCode={exampleSource} />
    </>
  );
};

export { IconExample };
