import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import NoteForm from "../components/noteform";
import { GET_NOTES, NEW_NOTE, GET_MY_NOTES } from "../query_container";

const NewNote = (props) => {
  useEffect(() => {
    document.title = "New Note";
  });
  let navigate = useNavigate();

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: (data) => {
      navigate(`/note/${data.newNote.id}`);
    },
  });
  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>Error saving the note</p>}
      <NoteForm action={data} />
    </React.Fragment>
  );
};
export default NewNote;
