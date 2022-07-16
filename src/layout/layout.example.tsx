import React from "react";
import "./layout.example.scss";
import { Aside } from "./aside";
import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import { Layout } from "./layout";

const LayoutExample = () => {
  //   const rootClassName = "zenz-design-layout";
  return (
    <div>
      <h1>Layout demo 1</h1>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="h">Header</Header>
        <Content className="c">Content</Content>
        <Footer className="f">Footer</Footer>
      </Layout>
      <hr />
      <h1>Layout demo 2</h1>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="h">Header</Header>
        <Layout>
          <Aside className="a">
            Aside
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </Aside>
          <Content className="c">Content</Content>
        </Layout>
        <Footer className="f">Footer</Footer>
      </Layout>
      <hr />
      <h1>Layout demo 3</h1>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="h">Header</Header>
        <Layout>
          <Content className="c">Content</Content>
          <Aside className="a">
            Aside
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </Aside>
        </Layout>
        <Footer className="f">Footer</Footer>
      </Layout>
      <hr />
      <h1>Layout demo 4</h1>
      <Layout style={{ height: 500, width: 500 }}>
        <Aside className="a">
          Aside
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </Aside>
        <Layout>
          <Header className="h">Header</Header>
          <Content className="c">Content</Content>
          <Footer className="f">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export { LayoutExample };
