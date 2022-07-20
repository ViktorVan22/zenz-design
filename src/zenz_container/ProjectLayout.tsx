import React from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { ButtonExample } from "@button/button.example";
import { IconExample } from "@icon/icon.example";
import { LayoutExample } from "../layout/layout.example";
import { ModalExample } from "../modal/modal.example";
import { CarouselExample } from "../carousel/carousel.example";

const ProjectLayout = () => {
  return (
    <HashRouter>
      <div>
        <ul className="navigator">
          <li>
            <NavLink to="/button">Button</NavLink>
          </li>
          <li>
            <NavLink to="/icon">Icon</NavLink>
          </li>
          <li>
            <NavLink to="/layout">Layout</NavLink>
          </li>
          <li>
            <NavLink to="/modal">Modal</NavLink>
          </li>
          <li>
            <NavLink to="carousel">Carousel</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<ButtonExample />} />
            <Route path="/button" element={<ButtonExample />} />
            <Route path="/icon" element={<IconExample />} />
            <Route path="/layout" element={<LayoutExample />} />
            <Route path="/modal" element={<ModalExample />} />
            <Route path="/carousel" element={<CarouselExample />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export { ProjectLayout };
