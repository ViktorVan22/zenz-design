export const sourceCode = [
  `import React from "react";
    import { Carousel } from "./carousel";

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
            <Carousel className="carousel-demo">
              <h3 style={contentStyle}>1</h3>
              <h3 style={contentStyle}>2</h3>
              <h3 style={contentStyle}>3</h3>
              <h3 style={contentStyle}>4</h3>
            </Carousel>
        );
    };
    `,
  `
    import React from "react";
    import { CarouselSlide } from "./carouselAutoplay";

    const CarouselExample = () => {
        return (
            <CarouselSlide autoplay>
                <h3 style={contentStyle}>1</h3>
                <h3 style={contentStyle}>2</h3>
                <h3 style={contentStyle}>3</h3>
                <h3 style={contentStyle}>4</h3>
                <h3 style={contentStyle}>5</h3>
                <h3 style={contentStyle}>6</h3>
            </CarouselSlide>
  );
};
    `,
];
