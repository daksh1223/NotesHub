import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import Form from "../components/Form";

const query = gql`
  mutation signIn($email: String!, $username: String!, $password: String!) {
    signIn(email: $email, username: $username, password: $password)
  }
`;
export default function Login(props) {
  const client = useApolloClient();
  let navigate = useNavigate();
  let location = useLocation();
  let redirect_url = "/home";

  if(location.state && location.state.from)
   redirect_url = location.state.from.pathname;
  console.log(redirect_url);
  useEffect(() => {
    document.title = "Login";
  });
  const [fetch_token] = useMutation(query, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signIn);
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
      navigate(redirect_url);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return <Form type="login" action={fetch_token} />;
}
