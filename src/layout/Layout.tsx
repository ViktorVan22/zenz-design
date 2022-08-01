import React from "react";
import classnames from "classnames";
import "./layout.scss";
import { Aside } from "./aside";

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children, className, ...rest }: LayoutProps) => {
  const hasAside =
    "length" in children &&
    children.reduce((result, node) => result || node.type === Aside, false);
  return (
    <div
      className={classnames(
        "zenz-design-layout",
        hasAside ? "zenz-design-layout-hasAside" : "",
        className
      )}
      {...rest}
    >
      {children}
    </div>
    // <div className={sc({ "": true, hasAside }, { extra: className })} {...rest}>
    //   {children}
    // </div>
  );
};

export { Layout };
