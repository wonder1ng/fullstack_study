import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  border: 1px solid black;
  color: white;
  font-size: 22px;
  text-align: center;
  align-content: center;
`;
const Header = styled(Box).attrs({ as: "header" })`
  background-color: purple;
  height: 10%;
`;
const Nav = styled(Box).attrs({ as: "nav" })`
  background-color: green;
  height: 10%;
`;
const Main = styled(Box).attrs({ as: "main" })`
  display: flex;
  flex: 1;
`;
const Aside = styled(Box).attrs({ as: "" })`
  background-color: orange;
  height: 100%;
  flex: 1;
`;
const Section = styled(Box).attrs({ as: "section" })`
  background-color: teal;
  height: 100%;
  flex: 2;
`;
const Footer = styled(Box).attrs({ as: "footer" })`
  background-color: darkgreen;
  height: 10%;
`;

export function Semantic() {
  return (
    <Wrap>
      <Header>Header</Header>
      <Nav>Nav</Nav>
      <Main>
        <Section>Section</Section>
        <Aside>Aside</Aside>
      </Main>
      <Footer>Footer</Footer>
    </Wrap>
  );
}
