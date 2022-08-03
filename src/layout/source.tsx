export const sourceCode = [
  `<Layout style={{ height: 500, width: 500 }}>
    <Header className="h">Header</Header>
    <Content className="c">Content</Content>
    <Footer className="f">Footer</Footer>
  </Layout>`,
  `
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
  `,
  `<Layout style={{ height: 500, width: 500 }}>
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
</Layout>`,
  `<Layout style={{ height: 500, width: 500 }}>
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
</Layout>`,
];
