import React from "react";
import { useParams } from "react-router-dom";
import NoteForm from "../components/noteform";
import { useQuery, useMutation } from "@apollo/client";
import { GET_NOTE, GET_ME, EDIT_NOTE } from "../query_container";

export default function Editnote(props) {
  let { id } = useParams();
  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: { id },
  });
  const {
    data: userdata,
    loading: userloading,
    error: usererror,
  } = useQuery(GET_ME);
  if (loading || userloading) {
    return <div>Loading...</div>;
  }
  if (error || usererror) {
    return <div>Error!</div>;
  }
  if (data.note.author.id !== userdata.me.id) {
    return <div>Permission denied!</div>;
  }
  return <NoteForm content={data.note.content} action={editNote} />;
}
