import React from "react";
import { Carousel } from "./carousel";

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
      <Carousel className="carousel-demo">
        <span>
          <h3 style={contentStyle}>carousel span</h3>
        </span>
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
    </div>
  );
};

export { CarouselExample };
