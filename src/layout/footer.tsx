import React, { HTMLAttributes } from "react";
import classnames from "classnames";

interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={classnames("zenz-design-layout-footer", className || "")}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Footer };
