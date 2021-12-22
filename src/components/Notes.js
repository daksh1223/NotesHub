import React from "react";
import Note from "./Note";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Notecontainer = styled.div`
  border: 2px solid black;
  padding: 2%;
  width: 87vw;
  margin-bottom: 0.5%;
  box-shadow: 0px 2px 5px grey;
`;

export default function Notes({ notes }) {
  return (
    <div>
      {notes.map((note) => {
        return (
          <Notecontainer key={note.id}>
            <Note note={note} />
            <Link to={`/note/${note.id}`}>Link</Link>
          </Notecontainer>
        );
      })}
    </div>
  );
}
