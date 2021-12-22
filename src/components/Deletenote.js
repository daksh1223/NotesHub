import React from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { DELETE_NOTE, GET_MY_NOTES, GET_NOTES } from "../query_container";

const DeleteNote = (props) => {
  const navigate = useNavigate();
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId,
    },
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: (data) => {
      navigate(`/home`);
    },
  });
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a onClick={deleteNote} href="#">
      Delete Note
    </a>
  );
};
export default DeleteNote;
