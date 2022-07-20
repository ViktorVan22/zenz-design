import React from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { ButtonExample } from "@button/button.example";
import { IconExample } from "@icon/icon.example";
import { LayoutExample } from "../layout/layout.example";
import { ModalExample } from "../modal/modal.example";
import { CarouselExample } from "../carousel/carousel.example";
import { Layout } from "../layout/layout";
import { Header } from "../layout/header";
import { Aside } from "../layout/aside";
import { Content } from "../layout/content";
import { Footer } from "../layout/footer";
import "./ProjectLayout.scss";

const ProjectLayout = () => {
  return (
    <HashRouter>
      <Layout className="project-layout">
        <Header className="project-header">
          <h1>zenz-design</h1>
        </Header>
        <Layout>
          <Aside className="project-aside">
            <h2>组件</h2>
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
          </Aside>
          <Content className="project-content">
            <Routes>
              <Route path="/" element={<ButtonExample />} />
              <Route path="/button" element={<ButtonExample />} />
              <Route path="/icon" element={<IconExample />} />
              <Route path="/layout" element={<LayoutExample />} />
              <Route path="/modal" element={<ModalExample />} />
              <Route path="/carousel" element={<CarouselExample />} />
            </Routes>
          </Content>
        </Layout>
        <Footer className="project-footer">Footer</Footer>
      </Layout>
    </HashRouter>
  );
};

export { ProjectLayout };
