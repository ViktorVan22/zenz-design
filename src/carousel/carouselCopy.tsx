import React, { HTMLAttributes } from "react";
import "./carouselCopy.scss";
import classnames from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactElement[];
  className?: string;
}

const CarouselCopy = ({ className, children }: Props) => {
  return (
    <div
      className={classnames(
        "zenz-design-carousel",
        "carousel-copy",
        className || ""
      )}
    >
      <div className="children-container">
        {children.map(childElement => (
          <div className="child-element" key={children.indexOf(childElement)}>
            {childElement}
          </div>
        ))}

        <div className="buttons">
          <span className="left">&lt;</span>
          <span className="right">&gt;</span>
        </div>
        {/* 切换按钮 */}
        <div className="dots">
          {children.map(childElement => (
            <div className="dot" key={children.indexOf(childElement)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CarouselCopy };
