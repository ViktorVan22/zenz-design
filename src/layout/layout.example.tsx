import React from "react";
import { Layout } from "./Layout";
import "./layout.example.scss";
import { Aside } from "./aside";
import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";

const LayoutExample = () => {
  //   const rootClassName = "zenz-design-layout";
  return (
    <div>
      <h1>Layout 1</h1>
      <Layout style={{ height: 500, width: 500 }} className="layout-example1">
        <Header className="h">Header</Header>
        <Aside className="a">Aside</Aside>
        <Content className="c">Content</Content>
        <Footer className="f">Footer</Footer>
      </Layout>
    </div>
  );
};

export { LayoutExample };
