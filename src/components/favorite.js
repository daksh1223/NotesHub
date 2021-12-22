import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_MY_FAVORITE_NOTES, TOGGLE_FAVORITE } from "../query_container";
const FavoriteNote = (props) => {
  const [count, setCount] = useState(props.favoriteCount);
  const [favorited, setFavorited] = useState(
    props.me.favorites.filter((note) => note.id === props.noteId).length > 0
  );
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: props.noteId,
    },
    // refetch the GET_MY_FAVORITES query to update the cache
    refetchQueries: [{ query: GET_MY_FAVORITE_NOTES }],
  });
  return (
    <React.Fragment>
      {favorited ? (
        <button
          onClick={() => {
            toggleFavorite();
            setFavorited(false);
            setCount(count - 1);
          }}
        >
          Remove Favorite
        </button>
      ) : (
        <button
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }}
        >
          Add Favorite
        </button>
      )}
    </React.Fragment>
  );
};

export default FavoriteNote;
