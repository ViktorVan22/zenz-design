import React from "react";
import { Carousel } from "./carousel";
import { CarouselAutoplay } from "./carouselAutoplay";

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
      <h2>渐显轮播图</h2>
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
      <h2>自动播放滑动轮播图</h2>
      <CarouselAutoplay autoplay>
        <h3 style={{ ...contentStyle, width: "100%" }}>1</h3>
        <h3 style={{ ...contentStyle, width: "100%" }}>2</h3>
        <h3 style={{ ...contentStyle, width: "100%" }}>3</h3>
        <h3 style={{ ...contentStyle, width: "100%" }}>4</h3>
        <h3 style={{ ...contentStyle, width: "100%" }}>5</h3>
        <h3 style={{ ...contentStyle, width: "100%" }}>6</h3>
      </CarouselAutoplay>
    </div>
  );
};

export { CarouselExample };
