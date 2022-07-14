import React, { useState } from "react";
import { Button } from "./button/button";
import { IconButton } from "./button/iconButton";
import { Icon } from "./icon/Icon";

const App = () => {
  const [count, setCount] = useState(0);

  const onClickIcon = (e: React.MouseEvent) => {
    e.stopPropagation && e.stopPropagation();
    e.preventDefault && e.preventDefault();
    console.log("svg is clicked");
    console.log(e.target);
  };
  const onClickIconButton = (e: React.MouseEvent) => {
    console.log("IconButton is clicked");
    console.log(e.target);
    setCount(count + 1);
  };
  return (
    <div>
      <Button></Button>
      <Icon name="wechatPay" onClick={onClickIcon} />
      <Icon name="penguin" onClick={onClickIcon} />
      <hr />
      <IconButton
        className="btn-icon-within"
        iconName="add_linear"
        onClick={onClickIconButton}
      />
      <div>count: {count} </div>
    </div>
  );
};

export default App;
