import React, { HTMLAttributes, useState } from "react";
import classnames from "classnames";
import "./carousel.scss";

interface CarouselProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactElement[];
  className?: string;
}

const Carousel = ({ children, className, ...rest }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div
      className={classnames("zenz-design-carousel", className || "")}
      {...rest}
    >
      <div className="carousel-inner">
        {children.map(child => (
          <div
            key={children.indexOf(child)}
            className={classnames("carousel-item", "fade", {
              "slide-active":
                children.indexOf(child) === activeIndex ? true : false,
            })}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {React.Children.map(children, (child, index) => {
          return <div className="dot" onClick={() => updateIndex(index)}></div>;
        })}
      </div>
    </div>
  );
};

export { Carousel };
