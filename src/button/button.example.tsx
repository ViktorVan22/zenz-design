import React, { useState } from "react";
import { Button } from "./button";
import { IconButton } from "./iconButton";

const ButtonExample = () => {
  const [count, setCount] = useState(0);

  const onClickIconButton = (e: React.MouseEvent) => {
    console.log("IconButton is clicked");
    console.log(e.target);
    setCount(count + 1);
  };
  return (
    <>
      <Button />
      <hr />
      <IconButton
        className="btn-icon-within"
        iconName="add_linear"
        onClick={onClickIconButton}
      />
      <div>count: {count} </div>
    </>
  );
};

export { ButtonExample };
