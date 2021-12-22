import React from "react";
import { useParams } from "react-router-dom";
import Note from "../components/Note";
import { gql, useQuery } from "@apollo/client";
const note_query = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      content
      favoriteCount
      author {
        username
        id  
        avatar
        email
      }
    }
  }
`;
export default function Note_Page(props) {
  let { id } = useParams();
  const { data, loading, error } = useQuery(note_query, { variables: { id } });
  if(loading) {return <div>Loading...</div>;}
  if(error) {return <div>Error!</div>;}
  console.log(data);
  return <Note note={data.note}/>;
}
