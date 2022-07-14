/**
 * @description 程序主入口
 */
import React from "react";
import ReactDom from "react-dom";
import { Button } from "./button";
import { Icon } from "./icon/Icon";

ReactDom.render(
  <div>
    <Button></Button>
    <Icon name="wechatPay" />
    <Icon name="penguin" />
  </div>,
  document.querySelector("#root")
);
