import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ButtonExample } from "@button/button.example";
import { IconExample } from "@icon/icon.example";
import { NoMatch } from "./NoMatch";
import { LayoutExample } from "../layout/layout.example";

const ProjectLayout = () => {
  return (
    <div>
      <ul className="navigator">
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>
          <Link to="/icon">Icon</Link>
        </li>
        <li>
          <Link to="/layout">Layout</Link>
        </li>
      </ul>
      <div className="content">
        <Routes>
          <Route path="/" element={<ButtonExample />} />
          <Route path="button" element={<ButtonExample />} />
          <Route path="icon" element={<IconExample />} />
          <Route path="layout" element={<LayoutExample />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
};

export { ProjectLayout };
