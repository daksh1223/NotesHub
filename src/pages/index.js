import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./home";
import Favoritenotes from "./favorite_notes";
import Layout from "../components/Layout";
import NotePage from "./Note";
import Signup from "./Signup";
import Login from "./Login";
import NewNote from "./newnote";
import Editnote from "./editnote";
import Mynotes from "./mynotes";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query get_data {
    isLoggedIn
  }
`;
export default function Index() {
  const Checker = ({ children }) => {
    const { data } = useQuery(query);
    let location = useLocation();
    if (data && data.isLoggedIn) return children;
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  };
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route
              path="/personal_notes"
              element={
                <Checker>
                  <Mynotes />
                </Checker>
              }
            />

            <Route
              path="/favorite_notes"
              element={
                <Checker>
                  <Favoritenotes />
                </Checker>
              }
            />
            <Route path="/note/:id" element={<NotePage />} />
            <Route path="/editnote/:id" element={<Editnote />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/new"
              element={
                <Checker>
                  <NewNote />
                </Checker>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
