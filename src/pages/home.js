import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Notes from "../components/Notes";
import { GET_NOTES } from "../query_container";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  const fetch_more = (data) => {
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      query: GET_NOTES,
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const prev_notes = previousResult.noteFeed.notes;
        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
            notes: [...prev_notes, ...fetchMoreResult.noteFeed.notes],
            __typename: previousResult.__typename,
          },
        };
      },
    });
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div> Error in loading the data! </div>;
  }
  return (
    <div>
      <Notes notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <button onClick={() => fetch_more(data)}>Read More...</button>
      )}
    </div>
  );
};
export default Home;
