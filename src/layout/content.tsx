import classnames from "classnames";
import React, { HTMLAttributes } from "react";

interface ContentProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Content: React.FC<ContentProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={classnames("zenz-design-layout-content", className || "")}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Content };
