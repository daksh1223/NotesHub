import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import Notes from "../components/Notes";
import { GET_MY_FAVORITE_NOTES } from "../query_container";

export default function Mynotes() {
  useEffect(() => {
    document.title = "Favorite Notes";
  });
  const { data, loading, error } = useQuery(GET_MY_FAVORITE_NOTES);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data && !data.me.favorites.length && <p>No notes yet...</p>}
      {data && !!data.me.favorites.length && (
        <Notes notes={data.me.favorites} />
      )}
    </div>
  );
}
