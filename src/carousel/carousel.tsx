import React, { HTMLAttributes } from "react";
import classnames from "classnames";
import "./carousel.scss";
interface CarouselProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactElement[];
  className?: string;
}

const Carousel = ({ children, className, ...rest }: CarouselProps) => {
  const showSlide = (n: number) => {
    /**
     * @description 点击对应的点就会显示相应的卡片内容
     */
    const nodes = document.getElementsByClassName("child-element-wrapper");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < children.length; i++) {
      if (nodes[i].classList.contains("slide-active") && i !== n) {
        nodes[i].classList.remove("slide-active");
      }
      if (dots[i].classList.contains("dot-active") && i !== n) {
        dots[i].classList.remove("dot-active");
      }
    }
    // 点击事件发生后关闭默认展示
    if (nodes[0].classList.contains("default-slide")) {
      nodes[0].classList.remove("default-slide");
    }
    nodes[n].classList.add("slide-active");
    dots[n].classList.add("dot-active");
  };

  return (
    <div
      className={classnames("zenz-design-carousel", className || "")}
      {...rest}
    >
      {children.map(childElement => (
        <div
          className={classnames("child-element-wrapper", "fade", {
            "default-slide":
              children.indexOf(childElement) === 0 ? true : false,
          })}
          key={children.indexOf(childElement)}
        >
          <div>
            <div style={{ width: "100%", display: "inline-block" }}>
              {childElement}
            </div>
          </div>
        </div>
      ))}
      <footer className="dot-wrapper">
        {children.map(child => (
          <div
            key={children.indexOf(child)}
            className="dot"
            onClick={() => showSlide(children.indexOf(child))}
          ></div>
        ))}
      </footer>
    </div>
  );
};

export { Carousel };
