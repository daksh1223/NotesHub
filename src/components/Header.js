import React from "react";
import styled from "styled-components";
import { useQuery, useApolloClient, gql } from "@apollo/client";
import { useNavigate, useLocation } from "react-router-dom";
const query = gql`
  query get_data {
    isLoggedIn
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 1%;
  font-weight: 900;
  border: 1px solid white;
  box-shadow: 0px 2px 5px grey;
`;
export default function Header() {
  const client = useApolloClient();
  const { data } = useQuery(query);
  const location = useLocation();
  let navigate = useNavigate();
  if (data) console.log(data);
  return (
    <Container>
      NOTESHUB
      {data.isLoggedIn ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            client.writeQuery({
              query: query,
              data: {
                isLoggedIn: false,
              },
            });
          }}
        >
          Log out
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              navigate("/signup", { state: { from: location } });
            }}
          >
            Signup
          </button>
          <button
            onClick={() => {
              navigate("/login", { state: { from: location } });
            }}
          >
            Login
          </button>
        </div>
      )}
    </Container>
  );
}
