import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ME } from "../query_container";
import DeleteNote from "./Deletenote";
import FavoriteNote from "./favorite";

const NoteUser = (props) => {
  const { data, loading } = useQuery(GET_ME);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      Favorite: {props.note.favoriteCount}{" "}
      <FavoriteNote
        me={data.me}
        noteId={props.note.id}
        favoriteCount={props.note.favoriteCount}
      />
      <br />
      {
      // eslint-disable-next-line eqeqeq
      data && data.me.id == props.note.author.id && (
        <>
          <Link to={`/editnote/${props.note.id}`}>Edit</Link>{" "}
          <DeleteNote noteId={props.note.id} />
        </>
      )}
    </React.Fragment>
  );
};
export default NoteUser;
