import React, { useEffect } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Form from '../components/Form'
const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;
export default function Signup(props) {
  const client = useApolloClient();
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Signup";
  });
  const [fetch_token] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      client.writeQuery({
        query: gql`
          query write_data {
            isLoggedIn
          }
        `,
        data: {
          isLoggedIn: true,
        },
      });
      navigate("/home");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <Form action={fetch_token} type="signup" />
  );
}
