import React, { HTMLAttributes } from "react";
import { Icon } from "../icon/Icon";
import "./iconButton.scss";
interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**
   * @description: 图标名称
   */
  iconName: string;
  /**
   * @description: className
   */
  className?: string;
}

const IconButton = ({ iconName, className, ...restProps }: Props) => {
  return (
    <button className={className} {...restProps}>
      <Icon className={className} name={iconName} />
    </button>
  );
};

export { IconButton };
