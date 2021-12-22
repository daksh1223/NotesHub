import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import Notes from "../components/Notes";
import { GET_MY_NOTES } from "../query_container";

export default function Mynotes() {
  useEffect(() => {
    document.title = "My Notes";
  });
  const { data, loading, error } = useQuery(GET_MY_NOTES);
  console.log(data);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data && !data.me.Notes.length && <p>No notes yet...</p>}
      {data && !!data.me.Notes.length && <Notes notes={data.me.Notes} />}
    </div>
  );
}
