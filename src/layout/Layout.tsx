import React from "react";
import classnames from "classnames";
import "./layout.scss";

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children, className, ...rest }: LayoutProps) => {
  return (
    <div className={classnames("zenz-design-layout", className)} {...rest}>
      {children}
    </div>
  );
};

export { Layout };
