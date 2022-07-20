import React from "react";
import { Carousel } from "./carousel";
import { CarouselSlide } from "./carouselAutoplay";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

const CarouselExample = () => {
  return (
    <div className="demo-container">
      <h2>渐显轮播图</h2>
      <Carousel className="carousel-demo">
        <h3 style={contentStyle}>1</h3>
        <h3 style={contentStyle}>2</h3>
        <h3 style={contentStyle}>3</h3>
        <h3 style={contentStyle}>4</h3>
      </Carousel>
      <h2>自动播放滑动轮播图</h2>
      <CarouselSlide autoplay>
        <h3 style={contentStyle}>1</h3>
        <h3 style={contentStyle}>2</h3>
        <h3 style={contentStyle}>3</h3>
        <h3 style={contentStyle}>4</h3>
        <h3 style={contentStyle}>5</h3>
        <h3 style={contentStyle}>6</h3>
      </CarouselSlide>
    </div>
  );
};

export { CarouselExample };
