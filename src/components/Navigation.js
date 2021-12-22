import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1%;
  padding-top: 0.5%;
  padding-right: 2%;
  width: max-content;
  border-right: 1px solid white;
  box-shadow: 0px 2px 5px grey;
`;

export default function Navigation() {
  return (
    <Nav>
      <Link to="/home">Home</Link>

      <Link to="/personal_notes">Personal Notes</Link>

      <Link to="/favorite_notes">Favorite Notes</Link>

      <Link to="/new">Create new note</Link>
    </Nav>
  );
}
