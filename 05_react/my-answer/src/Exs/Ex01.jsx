import React from "react";

function Wrap({ newStyle = false, children }) {
  let style = {
    margin: "0 auto",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  };
  style = newStyle ? { ...style, ...newStyle } : style;
  return <div style={{ ...style, ...newStyle }}>{children}</div>;
}

function Header({ newStyle = false, children }) {
  let style = {
    backgroundColor: "purple",
    height: "10%",
  };
  style = newStyle ? { ...style, ...newStyle } : style;
  return <header style={{ ...style, ...newStyle }}>{children}</header>;
}

function Nav({ newStyle = false, children }) {
  let style = {
    backgroundColor: "green",
    flex: 1,
  };
  style = newStyle ? { ...style, ...newStyle } : style;
  return <nav style={{ ...style, ...newStyle }}>{children}</nav>;
}

function Main({ newStyle = false, children }) {
  let style = {
    display: "flex",
    flex: 1,
  };
  style = newStyle ? { ...style, ...newStyle } : style;
  return <nav style={{ ...style, ...newStyle }}>{children}</nav>;
}

function Aside({ newStyle = false, children }) {
  let style = {
    backgroundColor: "orange",
    height: "100%",
    flex: 1,
  };
  style = newStyle ? { ...style, ...newStyle } : style;
  return <nav style={{ ...style, ...newStyle }}>{children}</nav>;
}

function Section({ newStyle = false, children }) {
  let style = {
    backgroundColor: "teal",
    height: "100%",
    flex: 2,
  };
  style = newStyle ? { ...style, ...newStyle } : style;
  return <nav style={{ ...style, ...newStyle }}>{children}</nav>;
}

function Footer({ newStyle = false, children }) {
  let style = {
    backgroundColor: "darkgreen",
    height: "10%",
  };
  style = newStyle ? { ...style, ...newStyle } : style;
  return <nav style={{ ...style, ...newStyle }}>{children}</nav>;
}

export function Semantic() {
  const boxStyle = {
    border: "1px solid black",
    color: "white",
    fontSize: "22px",
    textAlign: "center",
    alignContent: "center",
  };
  return (
    <Wrap>
      <Header newStyle={boxStyle}>Header</Header>
      <Nav newStyle={boxStyle}>Nav</Nav>
      <Main newStyle={boxStyle}>
        <Section newStyle={boxStyle}>Section</Section>
        <Aside newStyle={boxStyle}>Aside</Aside>
      </Main>
      <Footer newStyle={boxStyle}>Footer</Footer>
    </Wrap>
  );
}
