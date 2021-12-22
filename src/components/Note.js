import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import Noteuser from "./Noteuser";
import { IS_LOGGED_IN } from "../query_container";

const Infocontainer = styled.div`
  display: flex;
  div{
    margin:0% 0.5%;
  }
`;
export default function Note({ note }) {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <Infocontainer>
        <img
          src={note.author.avatar}
          alt={note.author.username}
          height="20px"
        />
        <div>{note.author.username}</div>
        <div>{data.isLoggedIn && <Noteuser note={note} />}</div>
      </Infocontainer>
      <ReactMarkdown children={note.content} />
    </div>
  );
}
