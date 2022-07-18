import React from "react";
import { Carousel } from "./carousel";
import { CarouselCopy } from "./carouselCopy";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselExample = () => {
  return (
    <div className="demo-container">
      <h2>常规轮播图</h2>
      <Carousel className="carousel-demo">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <h2>抄来的滑动轮播图</h2>
      <CarouselCopy>
        <li>
          <h3 style={contentStyle}>1</h3>
        </li>
        <li>
          <h3 style={contentStyle}>2</h3>
        </li>
        <li>
          <h3 style={contentStyle}>3</h3>
        </li>
        <li>
          <h3 style={contentStyle}>4</h3>
        </li>
        <li>
          <h3 style={contentStyle}>5</h3>
        </li>
      </CarouselCopy>
    </div>
  );
};

export { CarouselExample };
