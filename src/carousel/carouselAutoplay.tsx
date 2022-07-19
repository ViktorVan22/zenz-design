import React, { HTMLAttributes, useEffect, useState } from "react";
import "./carouselAutoplay.scss";
import classnames from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactElement[];
  className?: string;
}

const CarouselAutoplay = ({ className, children, ...rest }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);
    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    <div
      className={classnames("carousel", className || "")}
      onMouseEnter={() => {
        console.log("轮播图暂停播放");
        setPaused(true);
      }}
      onMouseLeave={() => {
        console.log("轮播图继续播放");
        setPaused(false);
      }}
      {...rest}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map(childElement => (
          <div className="carousel-item" key={children.indexOf(childElement)}>
            {childElement}
          </div>
        ))}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => updateIndex(index)}
            ></div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
    </div>
  );
};

export { CarouselAutoplay };
