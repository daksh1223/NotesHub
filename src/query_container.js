import { gql } from "@apollo/client";

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;
const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;
const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;
const NEW_NOTE = gql`
  mutation newNote($content: String!) {
    newNote(content: $content) {
      id
      content
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;
const GET_MY_NOTES = gql`
  query me {
    me {
      id
      username
      Notes {
        id
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;
const GET_MY_FAVORITE_NOTES = gql`
  query me {
    me {
      id
      username
      favorites {
        id
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;
const GET_ME = gql`
  query me {
    me {
      id
      username
      favorites {
        id
      }
    }
  }
`;
const EDIT_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;
const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;
const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;
export {
  GET_NOTES,
  GET_NOTE,
  IS_LOGGED_IN,
  NEW_NOTE,
  GET_MY_NOTES,
  GET_MY_FAVORITE_NOTES,
  GET_ME,
  EDIT_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVORITE,
};
