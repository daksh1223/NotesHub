import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 96vh;
  a {
    text-decoration: none;
    font-weight: 500;
    color: black;
    margin-bottom: 2%;
  }
  a:hover {
    color: blue;
  }
`;

const Main = styled.div`
  padding: 1%;
  overflow-x: hidden;
`;
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Wrapper>
        <Navigation />
        <Main>{children}</Main>
      </Wrapper>
    </div>
  );
}
