import React, { HTMLAttributes } from "react";
import classnames from "classnames";

interface AsideProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Aside: React.FC<AsideProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={classnames("zenz-design-layout-aside", className || "")}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Aside };
