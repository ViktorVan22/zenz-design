import React from "react";
import { Button } from "./button";
import { Icon } from "./icon/Icon";

const App = () => {
  const onClickIcon = (e: React.MouseEvent) => {
    e.stopPropagation && e.stopPropagation();
    e.preventDefault && e.preventDefault();
    console.log("svg is clicked");
    console.log(e.target);
  };

  return (
    <div>
      <Button></Button>
      <Icon name="wechatPay" onClick={onClickIcon} />
      <Icon name="penguin" onClick={onClickIcon} />
    </div>
  );
};

export default App;
