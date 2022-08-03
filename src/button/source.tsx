export const sourceCode = `import React, { useState } from "react";
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
      <h1>demo 1</h1>
      <Button />
      <hr />
      <h1>demo 2</h1>
      <IconButton
        className="btn-icon-within"
        iconName="add_linear"
        onClick={onClickIconButton}
      />
      <div>count: {count} </div>
    </>
  );
};`;
