import React, { HTMLAttributes } from "react";
import classnames from "classnames";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={classnames("zenz-design-layout-header", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Header };
